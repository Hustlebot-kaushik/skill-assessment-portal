// ==========================================================================
// admin-app.js — Admin Panel Initialization & Event Listeners
// ==========================================================================

document.addEventListener("DOMContentLoaded", async () => {
  
  const isLoggedIn = await checkSession();
  
  if (isLoggedIn) {
    document.getElementById("screen-login").classList.remove("active");
    document.getElementById("screen-admin").classList.remove("hidden");
    document.getElementById("auth-controls").classList.remove("hidden");
    loadDashboard();
  } else {
    document.getElementById("screen-login").classList.add("active");
  }

  // Login form
  document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = document.getElementById("btn-login");
    const errorEl = document.getElementById("login-error");
    
    btn.disabled = true;
    btn.textContent = "Signing in...";
    errorEl.classList.add("hidden");
    
    try {
      const email = document.getElementById("login-email").value;
      const pass = document.getElementById("login-password").value;
      
      await login(email, pass);
      
      // Success
      document.getElementById("screen-login").classList.remove("active");
      document.getElementById("screen-admin").classList.remove("hidden");
      document.getElementById("auth-controls").classList.remove("hidden");
      loadDashboard();
      
    } catch (err) {
      errorEl.textContent = err.message || "Login failed";
      errorEl.classList.remove("hidden");
    } finally {
      btn.disabled = false;
      btn.textContent = "Sign In";
    }
  });

  // Logout
  document.getElementById("btn-logout").addEventListener("click", () => {
    logout();
  });

  // Tabs
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      // Update buttons
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      
      // Update content
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active", "block"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.add("hidden"));
      
      const tabId = e.target.getAttribute("data-tab");
      document.getElementById(`tab-${tabId}`).classList.remove("hidden");
      document.getElementById(`tab-${tabId}`).classList.add("active", "block");
      
      // Load data
      if (tabId === "dashboard") loadDashboard();
      if (tabId === "questions") loadQuestions();
    });
  });

  // Dashboard filters
  document.getElementById("btn-refresh-dashboard").addEventListener("click", loadDashboard);
  document.getElementById("filter-level").addEventListener("change", loadDashboard);
  
  // Allow enter key on search
  document.getElementById("filter-name").addEventListener("keypress", (e) => {
    if (e.key === "Enter") loadDashboard();
  });

  document.getElementById("btn-export-csv").addEventListener("click", exportCSV);

  // Questions filters
  document.getElementById("qfilter-level").addEventListener("change", loadQuestions);
  document.getElementById("qfilter-section").addEventListener("change", loadQuestions);

  // Modal logic
  document.getElementById("btn-add-question").addEventListener("click", () => openModal(null));
  document.getElementById("btn-modal-cancel").addEventListener("click", closeModal);
  document.getElementById("question-form").addEventListener("submit", saveQuestion);
  
  // Close modal on outside click
  document.getElementById("question-modal").addEventListener("click", (e) => {
    if (e.target.id === "question-modal") closeModal();
  });

});
