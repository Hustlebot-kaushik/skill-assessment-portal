// ==========================================================================
// dashboard.js — Logic for fetching and displaying submissions
// ==========================================================================

async function loadDashboard() {
  const sb = getSupabaseClient();
  const tbody = document.getElementById("dashboard-tbody");
  const status = document.getElementById("dashboard-status");
  
  const nameFilter = document.getElementById("filter-name").value.trim();
  const levelFilter = document.getElementById("filter-level").value;
  
  status.textContent = "Loading...";
  tbody.innerHTML = "";
  
  try {
    let query = sb.from("assessments").select("*").order("created_at", { ascending: false });
    
    if (nameFilter) {
      query = query.ilike("full_name", `%${nameFilter}%`);
    }
    if (levelFilter) {
      query = query.eq("education_level", levelFilter);
    }
    
    // Limit to recent 100 for basic view
    query = query.limit(100);
    
    const { data, error } = await query;
    if (error) throw error;
    
    if (data.length === 0) {
      status.textContent = "No submissions found.";
      return;
    }
    
    status.textContent = "";
    
    data.forEach(sub => {
      const tr = document.createElement("tr");
      tr.className = "hover:bg-gray-50";
      
      const date = new Date(sub.created_at).toLocaleDateString();
      const scorePct = Math.round((sub.score / sub.total_questions) * 100);
      
      tr.innerHTML = `
        <td class="p-3">${date}</td>
        <td class="p-3 font-medium text-gray-900">${sub.full_name}</td>
        <td class="p-3 capitalize">${sub.education_level}</td>
        <td class="p-3">${sub.category}</td>
        <td class="p-3">
          <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium 
                ${scorePct >= 60 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}">
            ${sub.score}/${sub.total_questions} (${scorePct}%)
          </span>
        </td>
        <td class="p-3 text-xs text-gray-600 truncate max-w-xs" title="${sub.recommended_pathway}">${sub.recommended_pathway}</td>
      `;
      tbody.appendChild(tr);
    });
    
  } catch (err) {
    console.error("Dashboard error:", err);
    status.textContent = "Error loading submissions.";
  }
}

async function exportCSV() {
  const sb = getSupabaseClient();
  // Fetch all matching filters without limit
  const nameFilter = document.getElementById("filter-name").value.trim();
  const levelFilter = document.getElementById("filter-level").value;
  
  let query = sb.from("assessments").select("*").order("created_at", { ascending: false });
  if (nameFilter) query = query.ilike("full_name", `%${nameFilter}%`);
  if (levelFilter) query = query.eq("education_level", levelFilter);
  
  const { data, error } = await query;
  if (error || !data) {
    alert("Error exporting CSV");
    return;
  }
  
  const headers = ["Date", "Name", "Category", "Accommodation", "Education Level", "Score", "Total", "Pathway"];
  const csvRows = [headers.join(",")];
  
  data.forEach(r => {
    const row = [
      new Date(r.created_at).toISOString(),
      `"${r.full_name}"`,
      `"${r.category}"`,
      `"${r.accommodation_notes || ''}"`,
      r.education_level,
      r.score,
      r.total_questions,
      `"${r.recommended_pathway}"`
    ];
    csvRows.push(row.join(","));
  });
  
  const blob = new Blob([csvRows.join("\n")], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("hidden", "");
  a.setAttribute("href", url);
  a.setAttribute("download", "assessments.csv");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
