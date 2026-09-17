// ==========================================================================
// render.js — DOM references & screen management
//
// Caches DOM elements once on load and provides the showScreen() utility
// used by all other modules.
// ==========================================================================

const $ = (sel) => document.querySelector(sel);

// ── Screen containers ──
const screens = {
  welcome:  $("#screen-welcome"),
  level:    $("#screen-level"),
  quiz:     $("#screen-quiz"),
  results:  $("#screen-results"),
};

// ── All frequently-used DOM elements, cached for performance ──
const dom = {
  // Welcome
  nameInput:          $("#input-name"),
  nameError:          $("#name-error"),
  categorySelect:     $("#input-category"),
  accommodationInput: $("#input-accommodation"),
  btnStart:           $("#btn-start"),
  startHint:          $("#start-hint"),
  welcomeForm:        $("#welcome-form"),

  // Education Level
  levelCardsContainer: $("#level-cards"),
  btnBeginQuiz:        $("#btn-begin-quiz"),
  levelHint:           $("#level-hint"),

  // Quiz
  sectionLabel:   $("#quiz-section-label"),
  progressText:   $("#quiz-progress-text"),
  progressBarCont:$("#quiz-progress-bar-container"),
  progressBar:    $("#quiz-progress-bar"),
  questionTitle:  $("#quiz-question"),
  optionsContainer: $("#quiz-options"),
  btnNext:        $("#btn-next"),

  // Results
  resultScore:     $("#result-score"),
  resultPercent:   $("#result-percent"),
  resultSections:  $("#result-sections"),
  resultRecommend: $("#result-recommendation"),
  resultLevel:     $("#result-level"),
  btnSubmit:       $("#btn-submit"),
  submitStatus:    $("#submit-status"),
  btnRestart:      $("#btn-restart"),
};

/**
 * Switch the visible screen. Uses class toggles so CSS transitions work
 * and screen-reader announcements fire correctly.
 *
 * @param {"welcome"|"level"|"quiz"|"results"} name
 */
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[name].classList.add("active");
  // Move focus to the screen container for screen-reader users
  screens[name].setAttribute("tabindex", "-1");
  screens[name].focus({ preventScroll: false });
  window.scrollTo({ top: 0, behavior: "smooth" });
}
