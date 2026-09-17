// ==========================================================================
// app.js — Event listeners & initialization
//
// This is the entry point. It wires up all user interactions using
// addEventListener (no inline onclick). Loaded last, after all other
// modules are available.
// ==========================================================================

// ── Education level definitions ──
// These are rendered as clickable cards on the level-selection screen.
const EDUCATION_LEVELS = [
  {
    key: "primary",
    label: "Up to 5th Standard",
    description: "Basic reading, writing, and simple arithmetic",
    icon: "📒"
  },
  {
    key: "middle",
    label: "6th – 8th Standard",
    description: "Knows parts of a computer, basic grammar, fractions",
    icon: "📗"
  },
  {
    key: "secondary",
    label: "9th – 10th Standard",
    description: "OS concepts, comprehension, word problems",
    icon: "📘"
  },
  {
    key: "higher",
    label: "11th – 12th Standard",
    description: "Networking basics, formal English, percentages",
    icon: "📕"
  },
  {
    key: "graduate",
    label: "Graduate & Above",
    description: "Software concepts, business English, data interpretation",
    icon: "🎓"
  }
];

/**
 * Render the education level selection cards.
 */
function renderLevelCards() {
  dom.levelCardsContainer.innerHTML = "";

  EDUCATION_LEVELS.forEach((lvl) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className =
      "level-card w-full text-left border-2 border-gray-300 rounded-xl px-5 py-4 " +
      "flex items-center gap-4 cursor-pointer";
    card.setAttribute("role", "radio");
    card.setAttribute("aria-checked", "false");
    card.setAttribute("data-level", lvl.key);

    card.innerHTML = `
      <span class="text-3xl" aria-hidden="true">${lvl.icon}</span>
      <div>
        <p class="text-base sm:text-lg font-semibold text-gray-900">${lvl.label}</p>
        <p class="text-sm text-gray-500">${lvl.description}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      // Deselect all
      dom.levelCardsContainer.querySelectorAll(".level-card").forEach(c => {
        c.classList.remove("selected");
        c.setAttribute("aria-checked", "false");
      });
      // Select this one
      card.classList.add("selected");
      card.setAttribute("aria-checked", "true");

      state.educationLevel = lvl.key;
      state.educationLevelLabel = lvl.label;
      dom.btnBeginQuiz.disabled = false;
      dom.levelHint.textContent = `${lvl.label} selected — ready to begin!`;
    });

    dom.levelCardsContainer.appendChild(card);
  });
}

// ==========================================================================
// ── Welcome Form: enable Start button when name is filled ──
// ==========================================================================
dom.nameInput.addEventListener("input", () => {
  const hasName = dom.nameInput.value.trim().length > 0;
  dom.btnStart.disabled = !hasName;
  if (hasName) {
    dom.nameError.classList.add("hidden");
    dom.startHint.textContent = "You're ready!";
  } else {
    dom.startHint.textContent = "Fill in your name above to begin.";
  }
});

// ==========================================================================
// ── Welcome Form submission → show education level screen ──
// ==========================================================================
dom.welcomeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = dom.nameInput.value.trim();
  if (!name) {
    dom.nameError.classList.remove("hidden");
    dom.nameInput.focus();
    return;
  }

  // Capture user info
  state.fullName = name;
  state.category = dom.categorySelect.value;
  state.accommodationNotes = dom.accommodationInput.value.trim();

  // Render level cards and transition
  renderLevelCards();
  showScreen("level");
});

// ==========================================================================
// ── Begin Quiz button → load questions and start ──
// ==========================================================================
dom.btnBeginQuiz.addEventListener("click", async () => {
  if (!state.educationLevel) return;

  const prevText = dom.btnBeginQuiz.textContent;
  dom.btnBeginQuiz.disabled = true;
  dom.btnBeginQuiz.innerHTML = `
    <svg class="animate-spin h-5 w-5 text-white inline mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
    </svg>
    Loading...
  `;

  // Select random questions for this level (now async)
  state.activeQuestions = await selectRandomQuestions(state.educationLevel, 4);
  state.currentQuestionIndex = 0;
  state.answers = [];
  state.selectedOptionIndex = null;

  dom.btnBeginQuiz.textContent = prevText;
  dom.btnBeginQuiz.disabled = false;

  if (state.activeQuestions.length === 0) {
    alert("Error: No questions found for this level. Please try a different level.");
    return;
  }

  showScreen("quiz");
  renderQuestion();
});

// ==========================================================================
// ── Next button ──
// ==========================================================================
dom.btnNext.addEventListener("click", handleNext);

// ==========================================================================
// ── Submit button ──
// ==========================================================================
dom.btnSubmit.addEventListener("click", submitToSupabase);

// ==========================================================================
// ── Restart button ──
// ==========================================================================
dom.btnRestart.addEventListener("click", () => {
  resetState();

  // Reset form fields
  dom.nameInput.value = "";
  dom.categorySelect.value = "None/Other";
  dom.accommodationInput.value = "";
  dom.btnStart.disabled = true;
  dom.startHint.textContent = "Fill in your name above to begin.";
  dom.btnBeginQuiz.disabled = true;
  dom.levelHint.textContent = "Select your education level above to continue.";

  showScreen("welcome");
});

// ==========================================================================
// ── Keyboard shortcut: Enter to advance during quiz ──
// Convenience for users who hit Enter after selecting an option
// instead of tabbing to the Next button.
// ==========================================================================
document.addEventListener("keydown", (e) => {
  if (
    e.key === "Enter" &&
    screens.quiz.classList.contains("active") &&
    !dom.btnNext.disabled
  ) {
    if (document.activeElement !== dom.btnNext) {
      dom.btnNext.click();
    }
  }
});
