// ==========================================================================
// quiz.js — Question selection & quiz rendering
// ==========================================================================

function getQuestionBank(level) {
  const banks = {
    primary: window.QUESTIONS_PRIMARY,
    middle: window.QUESTIONS_MIDDLE,
    secondary: window.QUESTIONS_SECONDARY,
    higher: window.QUESTIONS_HIGHER,
    graduate: window.QUESTIONS_GRADUATE,
  };

  return banks[level] || null;
}


// --------------------------------------------------------------------------
// Fisher-Yates shuffle
// --------------------------------------------------------------------------

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}


// --------------------------------------------------------------------------
// Select random questions
// 5 sections × 4 questions = 20 questions
// --------------------------------------------------------------------------

async function selectRandomQuestions(level, perSection = 4) {

  const sectionOrder = [
    "Basic Computers",
    "English",
    "Aptitude",
    "Logical Reasoning",
    "General Awareness"
  ];

  let questionsPool = [];

  // ------------------------------------------------------------------------
  // 1. Load LOCAL question bank first
  // ------------------------------------------------------------------------

  const localBank = getQuestionBank(level);

  if (localBank) {

    for (const [section, questions] of Object.entries(localBank)) {

      questionsPool = questionsPool.concat(
        questions.map(q => ({
          ...q,
          section: section,
          correctIndex:
            q.correctIndex !== undefined
              ? q.correctIndex
              : q.correct_index
        }))
      );

    }

  } else {

    console.error(`No local question bank found for level: ${level}`);

  }


  // ------------------------------------------------------------------------
  // 2. Try Supabase
  // ------------------------------------------------------------------------

  const sb =
    typeof getSupabaseClient === "function"
      ? getSupabaseClient()
      : null;


  if (sb) {

    try {

      const { data, error } = await sb
        .from("questions")
        .select("*")
        .eq("education_level", level)
        .eq("is_active", true);

      if (error) {
        throw error;
      }


      // --------------------------------------------------------------------
      // If Supabase has questions, use them for their respective sections.
      // Missing sections will continue using the local question bank.
      // --------------------------------------------------------------------

      if (data && data.length > 0) {

        const dbQuestions = data.map(q => ({

          ...q,

          // Support either "section" or "category"
          section: q.section || q.category,

          // Support both database/frontend naming styles
          correctIndex:
            q.correctIndex !== undefined
              ? q.correctIndex
              : q.correct_index

        }));


        // Replace local questions with DB questions
        // section-by-section.

        const dbBySection = {};

        dbQuestions.forEach(q => {

          if (!q.section) {
            return;
          }

          if (!dbBySection[q.section]) {
            dbBySection[q.section] = [];
          }

          dbBySection[q.section].push(q);

        });


        // Remove local questions for sections that
        // actually exist in Supabase.

        questionsPool = questionsPool.filter(
          q => !dbBySection[q.section]
        );


        // Add Supabase questions.

        questionsPool = questionsPool.concat(dbQuestions);

      }

    } catch (err) {

      console.warn(
        "Supabase question fetch failed. Using local question banks.",
        err
      );

    }

  }


  // ------------------------------------------------------------------------
  // 3. Group questions by section
  // ------------------------------------------------------------------------

  const poolBySection = {};

  questionsPool.forEach(q => {

    if (!q.section) {
      return;
    }

    if (!poolBySection[q.section]) {
      poolBySection[q.section] = [];
    }

    poolBySection[q.section].push(q);

  });


  // ------------------------------------------------------------------------
  // 4. Select questions in REQUIRED order
  // ------------------------------------------------------------------------

  const selected = [];

  for (const section of sectionOrder) {

    const pool = poolBySection[section];

    if (!pool || pool.length === 0) {

      console.warn(
        `No questions found for section "${section}" at level "${level}"`
      );

      continue;

    }


    const shuffled = shuffle([...pool]);

    const picked = shuffled.slice(0, perSection);


    picked.forEach(q => {

      if (q.correctIndex === undefined) {
        q.correctIndex = q.correct_index;
      }

    });


    selected.push(...picked);

  }


  console.log(
    `${level}: Selected ${selected.length} questions`,
    selected.map(q => q.section)
  );


  return selected;

}


// --------------------------------------------------------------------------
// Render current question
// --------------------------------------------------------------------------

function renderQuestion() {

  const q = state.activeQuestions[state.currentQuestionIndex];

  const total = state.activeQuestions.length;

  const idx = state.currentQuestionIndex;


  // Section label

  dom.sectionLabel.textContent = q.section;


  // Progress

  const progressPct =
    Math.round((idx / total) * 100);

  dom.progressText.textContent =
    `Question ${idx + 1} of ${total}`;

  dom.progressBar.style.width =
    `${progressPct}%`;

  dom.progressBarCont.setAttribute(
    "aria-valuenow",
    progressPct
  );


  // Question

  dom.questionTitle.textContent =
    q.question;


  // Options

  dom.optionsContainer.innerHTML = "";


  q.options.forEach((optText, optIdx) => {

    const btn = document.createElement("button");

    btn.type = "button";

    btn.className =
      "option-card w-full text-left border-2 border-gray-300 rounded-xl px-5 py-4 " +
      "text-base sm:text-lg font-medium text-gray-800 cursor-pointer";


    btn.setAttribute("role", "radio");

    btn.setAttribute("aria-checked", "false");

    btn.textContent = optText;


    btn.addEventListener(
      "click",
      () => handleOptionSelect(optIdx)
    );


    dom.optionsContainer.appendChild(btn);

  });


  // Reset selection

  state.selectedOptionIndex = null;

  dom.btnNext.disabled = true;


  // Last question button

  dom.btnNext.textContent =
    idx === total - 1
      ? "See Results →"
      : "Next →";

}


// --------------------------------------------------------------------------
// Handle option selection
// --------------------------------------------------------------------------

function handleOptionSelect(optIdx) {

  state.selectedOptionIndex = optIdx;


  const cards =
    dom.optionsContainer.querySelectorAll(
      ".option-card"
    );


  cards.forEach((card, i) => {

    if (i === optIdx) {

      card.classList.add("selected");

      card.setAttribute(
        "aria-checked",
        "true"
      );

    } else {

      card.classList.remove("selected");

      card.setAttribute(
        "aria-checked",
        "false"
      );

    }

  });


  dom.btnNext.disabled = false;

}


// --------------------------------------------------------------------------
// Handle Next
// --------------------------------------------------------------------------

function handleNext() {

  if (state.selectedOptionIndex === null) {
    return;
  }


  const q =
    state.activeQuestions[
      state.currentQuestionIndex
    ];


  state.answers.push({

    questionId: q.id,

    selectedIndex:
      state.selectedOptionIndex,

    correct:
      state.selectedOptionIndex ===
      q.correctIndex

  });


  state.currentQuestionIndex++;


  if (
    state.currentQuestionIndex <
    state.activeQuestions.length
  ) {

    renderQuestion();

  } else {

    showScreen("results");

    renderResults();

  }

}