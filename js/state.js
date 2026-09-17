// ==========================================================================
// state.js — Application state
//
// Single mutable state object for the current assessment session.
// Every module reads/writes this shared object.
// ==========================================================================

let state = {
  fullName: "",
  category: "None/Other",
  accommodationNotes: "",
  educationLevel: null,          // "primary" | "middle" | "secondary" | "higher" | "graduate"
  educationLevelLabel: "",       // human-readable, e.g. "Up to 5th Standard"
  currentQuestionIndex: 0,
  selectedOptionIndex: null,     // which option the user picked for the current question
  activeQuestions: [],            // the randomly-selected subset for this session
  answers: [],                   // { questionId, selectedIndex, correct }
  submitted: false               // whether results have been sent to Supabase
};

/**
 * Reset state to defaults. Called on restart.
 */
function resetState() {
  state = {
    fullName: "",
    category: "None/Other",
    accommodationNotes: "",
    educationLevel: null,
    educationLevelLabel: "",
    currentQuestionIndex: 0,
    selectedOptionIndex: null,
    activeQuestions: [],
    answers: [],
    submitted: false
  };
}
