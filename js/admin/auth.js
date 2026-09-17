// ==========================================================================
// auth.js — Admin authentication logic
// ==========================================================================

async function checkSession() {
  const sb = getSupabaseClient();
  if (!sb) {
    alert("Supabase not configured. Check config.js");
    return false;
  }

  const { data: { session } } = await sb.auth.getSession();
  if (session) {
    document.getElementById("current-user").textContent = session.user.email;
    return true;
  }
  return false;
}

async function login(email, password) {
  const sb = getSupabaseClient();
  const { data, error } = await sb.auth.signInWithPassword({
    email,
    password
  });
  
  if (error) {
    throw error;
  }
  
  document.getElementById("current-user").textContent = data.user.email;
  return true;
}

async function logout() {
  const sb = getSupabaseClient();
  await sb.auth.signOut();
  window.location.reload();
}
