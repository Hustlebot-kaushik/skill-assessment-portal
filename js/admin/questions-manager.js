// ==========================================================================
// questions-manager.js — CRUD logic for questions
// ==========================================================================

async function loadQuestions() {
  const sb = getSupabaseClient();
  const tbody = document.getElementById("questions-tbody");
  const status = document.getElementById("questions-status");
  
  const level = document.getElementById("qfilter-level").value;
  const section = document.getElementById("qfilter-section").value;
  
  status.textContent = "Loading...";
  tbody.innerHTML = "";
  
  try {
    const { data, error } = await sb
      .from("questions")
      .select("*")
      .eq("education_level", level)
      .eq("section", section)
      .order("created_at", { ascending: false });
      
    if (error) throw error;
    
    if (data.length === 0) {
      status.textContent = "No questions found for this level and section.";
      return;
    }
    
    status.textContent = "";
    
    data.forEach(q => {
      const tr = document.createElement("tr");
      tr.className = `hover:bg-gray-50 ${!q.is_active ? 'opacity-50' : ''}`;
      
      const optionsHtml = q.options.map((opt, i) => 
        `<div class="${i === q.correct_index ? 'font-bold text-green-600' : 'text-gray-600'} text-xs">
          ${i === q.correct_index ? '✓' : '•'} ${opt}
         </div>`
      ).join("");
      
      tr.innerHTML = `
        <td class="p-3">
          <div class="font-medium text-gray-900 break-words">${q.question}</div>
          ${!q.is_active ? '<span class="inline-flex mt-1 items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">Inactive</span>' : ''}
        </td>
        <td class="p-3">${optionsHtml}</td>
        <td class="p-3 text-right space-x-2">
          <button class="text-blue-600 hover:text-blue-800 font-medium" onclick="editQuestion(${q.id})">Edit</button>
          <button class="text-gray-600 hover:text-gray-800 font-medium" onclick="toggleActive(${q.id}, ${!q.is_active})">
            ${q.is_active ? 'Disable' : 'Enable'}
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
    
  } catch (err) {
    console.error("Questions error:", err);
    status.textContent = "Error loading questions.";
  }
}

function openModal(questionId = null) {
  const modal = document.getElementById("question-modal");
  const form = document.getElementById("question-form");
  const title = document.getElementById("modal-title");
  
  form.reset();
  
  // Pre-fill filter selections
  document.getElementById("modal-level").value = document.getElementById("qfilter-level").value;
  document.getElementById("modal-section").value = document.getElementById("qfilter-section").value;
  
  if (questionId) {
    title.textContent = "Edit Question";
    document.getElementById("modal-id").value = questionId;
    fetchAndFillModal(questionId);
  } else {
    title.textContent = "Add Question";
    document.getElementById("modal-id").value = "";
  }
  
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  const modal = document.getElementById("question-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

async function fetchAndFillModal(id) {
  const sb = getSupabaseClient();
  const { data, error } = await sb.from("questions").select("*").eq("id", id).single();
  
  if (error || !data) return alert("Error fetching question");
  
  document.getElementById("modal-level").value = data.education_level;
  document.getElementById("modal-section").value = data.section;
  document.getElementById("modal-question").value = data.question;
  
  const optInputs = document.querySelectorAll(".modal-opt");
  data.options.forEach((opt, i) => {
    if(optInputs[i]) optInputs[i].value = opt;
  });
  
  const radios = document.getElementsByName("modal-correct");
  if(radios[data.correct_index]) {
    radios[data.correct_index].checked = true;
  }
}

async function saveQuestion(e) {
  e.preventDefault();
  const sb = getSupabaseClient();
  
  const id = document.getElementById("modal-id").value;
  const level = document.getElementById("modal-level").value;
  const section = document.getElementById("modal-section").value;
  const question = document.getElementById("modal-question").value;
  
  const options = Array.from(document.querySelectorAll(".modal-opt")).map(i => i.value);
  const correct_index = parseInt(document.querySelector('input[name="modal-correct"]:checked').value, 10);
  
  const payload = {
    education_level: level,
    section: section,
    question: question,
    options: options,
    correct_index: correct_index
  };
  
  let error;
  if (id) {
    ({ error } = await sb.from("questions").update(payload).eq("id", id));
  } else {
    payload.is_active = true;
    ({ error } = await sb.from("questions").insert(payload));
  }
  
  if (error) {
    alert("Error saving question: " + error.message);
  } else {
    closeModal();
    loadQuestions();
  }
}

async function toggleActive(id, newState) {
  const sb = getSupabaseClient();
  const { error } = await sb.from("questions").update({ is_active: newState }).eq("id", id);
  if (!error) loadQuestions();
}

// Make these available globally for inline onclick handlers
window.editQuestion = openModal;
window.toggleActive = toggleActive;
