// ==========================================================================
// supabase.js — Supabase integration
//
// Shared Supabase client initialization, assessment submission,
// and status handling.
// ==========================================================================

let _supabaseClient = null;

/**
 * Returns the initialized Supabase client, or null if not configured.
 * Acts as a lazy singleton.
 */
function getSupabaseClient() {
  if (_supabaseClient) return _supabaseClient;
  if (!isSupabaseConfigured()) return null;
  
  _supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return _supabaseClient;
}

/**
 * Check whether the Supabase credentials are real (not placeholders).
 */
function isSupabaseConfigured() {
  return (
    typeof SUPABASE_URL !== "undefined" &&
    typeof SUPABASE_ANON_KEY !== "undefined" &&
    SUPABASE_URL !== "YOUR_SUPABASE_URL" &&
    SUPABASE_ANON_KEY !== "YOUR_SUPABASE_ANON_KEY" &&
    SUPABASE_URL.startsWith("http")
  );
}

/**
 * Display a status message below the submit button.
 * @param {"success"|"warning"|"error"} type
 * @param {string} message
 */
function showSubmitStatus(type, message) {
  if (!dom.submitStatus) return;
  const colorMap = {
    success: "text-green-600",
    warning: "text-yellow-600",
    error:   "text-red-600"
  };
  dom.submitStatus.className = `text-sm font-medium ${colorMap[type] || "text-gray-600"}`;
  dom.submitStatus.textContent = message;
  dom.submitStatus.classList.remove("hidden");
}

/**
 * Submit assessment results to Supabase.
 */
async function submitToSupabase() {
  if (state.submitted) return;

  const sb = getSupabaseClient();
  if (!sb) {
    showSubmitStatus(
      "warning",
      "⚠️ Supabase is not configured yet — your results have NOT been saved to the database. " +
      "To enable saving, replace the placeholder URL and key in js/config.js."
    );
    return;
  }

  dom.btnSubmit.disabled = true;
  dom.btnSubmit.innerHTML = `
    <svg class="animate-spin h-5 w-5 text-white inline mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
    </svg>
    Submitting…
  `;

  try {
    const sectionMap = buildSectionBreakdown();
    const total = state.activeQuestions.length;
    const correct = state.answers.filter(a => a.correct).length;
    const pct = Math.round((correct / total) * 100);
    const pathway = computeRecommendation(sectionMap, pct);

    const { error } = await sb.from("assessments").insert({
      full_name:           state.fullName,
      category:            state.category,
      accommodation_notes: state.accommodationNotes,
      education_level:     state.educationLevel,
      score:               correct,
      total_questions:     total,
      section_breakdown:   sectionMap,
      recommended_pathway: pathway,
      created_at:          new Date().toISOString()
    });

    if (error) throw error;

    state.submitted = true;
    dom.btnSubmit.innerHTML = "Submitted ✓";
    showSubmitStatus("success", "✅ Your assessment has been saved successfully. Thank you!");

  } catch (err) {
    console.error("Supabase insert error:", err);
    dom.btnSubmit.disabled = false;
    dom.btnSubmit.innerHTML = "Retry Submit";
    showSubmitStatus(
      "error",
      `❌ Could not save your results: ${err.message || "Unknown error"}. Please try again or contact staff.`
    );
  }
}
