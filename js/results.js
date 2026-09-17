// ==========================================================================
// results.js — Score calculation, section breakdown & recommendation engine
//
// The recommendation is fully rule-based and deterministic:
//  1. Find the section with the highest score.
//  2. Cross-reference with overall score band AND education level
//     to produce a concrete vocational pathway suggestion.
// ==========================================================================

/**
 * Build a per-section score breakdown from the user's answers.
 *
 * @returns {Object} e.g. { "Basic Computers": { correct: 3, total: 4 }, ... }
 */
function buildSectionBreakdown() {
  const map = {};
  state.activeQuestions.forEach((q, i) => {
    if (!map[q.section]) map[q.section] = { correct: 0, total: 0 };
    map[q.section].total++;
    if (state.answers[i] && state.answers[i].correct) {
      map[q.section].correct++;
    }
  });
  return map;
}

/**
 * Compute a human-readable vocational recommendation.
 *
 * Strategy:
 *  - Find the strongest section (ties broken by priority order).
 *  - Combine overall score band + education level + strongest section
 *    to suggest a specific training pathway.
 *
 * Score bands:
 *  - Low:  < 30%
 *  - Mid:  30–59%
 *  - High: ≥ 60%
 *
 * Education level modifiers:
 *  - Primary/Middle → favour hands-on / craft pathways
 *  - Secondary      → favour data entry / office support
 *  - Higher/Graduate → favour IT / accounting / administration
 */
function computeRecommendation(sectionMap, overallPct) {
  // Priority for tie-breaking: Computers > Aptitude > English > Reasoning
  const priority = ["Basic Computers", "Aptitude", "English", "Logical Reasoning"];

  let bestSection = null;
  let bestPct = -1;

  for (const sec of priority) {
    if (!sectionMap[sec]) continue;
    const pct = sectionMap[sec].correct / sectionMap[sec].total;
    if (pct > bestPct) {
      bestPct = pct;
      bestSection = sec;
    }
  }

  const level = state.educationLevel; // "primary"|"middle"|"secondary"|"higher"|"graduate"
  const isBasicLevel = (level === "primary" || level === "middle");
  const isAdvancedLevel = (level === "higher" || level === "graduate");

  // ── Low overall score: foundational track ──
  if (overallPct < 30) {
    if (isBasicLevel) {
      return (
        "Foundational Literacy & Life Skills — We recommend starting with our basic " +
        "literacy and numeracy programme along with daily living skills training. " +
        "This builds a strong foundation before moving to a specific trade."
      );
    }
    return (
      "Foundational Skills Refresher — We recommend a refresher course in basic " +
      "computer skills and communication before proceeding to vocational training. " +
      "Our counsellors will create a personalised learning plan for you."
    );
  }

  // ── Pathway maps: section × band × level ──
  const pathways = {
    "Basic Computers": {
      mid: isBasicLevel
        ? "Basic Computer Awareness & Data Entry — You show good awareness of computers! " +
          "Our beginner-friendly Data Entry course uses simple, guided exercises to build your typing and MS Office skills."
        : "Computer Basics & Data Entry — Your computer knowledge is solid. " +
          "We recommend our Data Entry & MS Office course, opening doors to office, bank, and government data centre roles.",
      high: isAdvancedLevel
        ? "Advanced IT & Desktop Publishing — Your computer skills are strong! " +
          "Consider our advanced track: DTP, Tally accounting software, and basic web skills for broader opportunities."
        : "Computer Operations & Office Tools — Great computer skills! " +
          "Our Computer Operations course covers MS Office, email, and internet skills for office support roles."
    },
    "English": {
      mid: isBasicLevel
        ? "Communication & Customer Service Basics — Your English is promising! " +
          "Our spoken English and customer greeting course will help you in retail, reception, and service roles."
        : "Customer Support & Communication — Your language skills are a real asset. " +
          "We recommend Customer Support training: phone etiquette, email writing, and basic CRM tools.",
      high: isAdvancedLevel
        ? "Office Administration & Front Desk — Excellent communication skills! " +
          "Our Office Administration course prepares you for receptionist, front desk, and admin assistant positions."
        : "Communication & Retail Skills — Strong English skills! " +
          "Our Retail & Communication course prepares you for customer-facing roles in shops and service centres."
    },
    "Logical Reasoning": {
      mid: isBasicLevel
        ? "Craft & Assembly Work — Your logical thinking is solid! " +
          "Our assembly, packaging, and craft course uses step-by-step processes you'll pick up quickly."
        : "Office Administration & Filing — Good analytical thinking! " +
          "Our Office Administration course focuses on filing systems, scheduling, and process management.",
      high: isAdvancedLevel
        ? "Quality Inspection & Inventory Management — Strong analytical skills! " +
          "Consider training in quality control and inventory tracking, highly valued in manufacturing and warehousing."
        : "Stores & Inventory Assistant — Great logical skills! " +
          "Our Stores Management course covers stock-taking, organisation, and record-keeping."
    },
    "Aptitude": {
      mid: isBasicLevel
        ? "Tailoring & Handicraft — Your number sense is good and can be applied to measurement, " +
          "costing, and pattern work. Our Tailoring & Handicraft course offers a path to self-employment."
        : "Bookkeeping Basics & Tally — Good with numbers! " +
          "Our basic Tally and bookkeeping course can lead to roles in small business accounts.",
      high: isAdvancedLevel
        ? "Accounting & Advanced Bookkeeping — Excellent numerical ability! " +
          "Our Tally & Bookkeeping course can lead to roles in accounts departments, chartered accountant offices, and businesses."
        : "Tailoring & Small Business Skills — Strong number skills! " +
          "Our Tailoring course combined with basic costing and billing prepares you for self-employment."
    }
  };

  const band = overallPct >= 60 ? "high" : "mid";
  return pathways[bestSection]?.[band] ??
    "General Vocational Skills Training — our counsellors will help you find the right fit.";
}

/**
 * Render the full results screen: overall score, per-section bars,
 * and the training recommendation.
 */
function renderResults() {
  const total = state.activeQuestions.length;
  const correct = state.answers.filter(a => a.correct).length;
  const pct = Math.round((correct / total) * 100);

  dom.resultScore.textContent = `${correct} / ${total}`;
  dom.resultPercent.textContent = `${pct}%`;
  dom.resultLevel.textContent = `Education Level: ${state.educationLevelLabel}`;

  // ── Section breakdown bars ──
  const sectionMap = buildSectionBreakdown();
  dom.resultSections.innerHTML = "";

  for (const [section, data] of Object.entries(sectionMap)) {
    const sectionPct = Math.round((data.correct / data.total) * 100);
    const barColor =
      sectionPct >= 75 ? "bg-green-500" :
      sectionPct >= 50 ? "bg-yellow-500" :
      "bg-red-500";

    const row = document.createElement("div");
    row.innerHTML = `
      <div class="flex justify-between text-sm font-medium text-gray-700 mb-1">
        <span>${section}</span>
        <span>${data.correct}/${data.total} (${sectionPct}%)</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div class="section-bar ${barColor} h-2.5 rounded-full" style="width: 0%"
             data-target-width="${sectionPct}%"></div>
      </div>
    `;
    dom.resultSections.appendChild(row);
  }

  // Animate bars after a paint frame
  requestAnimationFrame(() => {
    document.querySelectorAll(".section-bar").forEach(bar => {
      bar.style.width = bar.dataset.targetWidth;
    });
  });

  // ── Recommendation ──
  const pathway = computeRecommendation(sectionMap, pct);
  dom.resultRecommend.textContent = pathway;

  // Reset submit UI
  state.submitted = false;
  dom.btnSubmit.disabled = false;
  dom.btnSubmit.innerHTML = "Submit &amp; Finish ✓";
  dom.submitStatus.classList.add("hidden");
}
