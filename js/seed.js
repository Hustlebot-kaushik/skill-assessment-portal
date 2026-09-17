// ==========================================================================
// seed.js — Database Seed Script
//
// Run this file's function from the browser console to bulk insert all
// local hardcoded questions into the Supabase database.
//
// Usage in console: await seedDatabase()
// ==========================================================================

async function seedDatabase() {
  const sb = getSupabaseClient();
  if (!sb) {
    console.error("Supabase is not configured in js/config.js");
    return;
  }

  const banks = {
    primary:   window.QUESTIONS_PRIMARY,
    middle:    window.QUESTIONS_MIDDLE,
    secondary: window.QUESTIONS_SECONDARY,
    higher:    window.QUESTIONS_HIGHER,
    graduate:  window.QUESTIONS_GRADUATE,
  };

  const recordsToInsert = [];

  for (const [level, bank] of Object.entries(banks)) {
    if (!bank) continue;
    
    for (const [section, questions] of Object.entries(bank)) {
      for (const q of questions) {
        recordsToInsert.push({
          education_level: level,
          section: section,
          question: q.question,
          options: q.options,
          correct_index: q.correctIndex,
          is_active: true
        });
      }
    }
  }

  console.log(`Found ${recordsToInsert.length} questions to seed. Inserting in batches...`);

  // Insert in batches of 50 to avoid any potential limits
  const batchSize = 50;
  for (let i = 0; i < recordsToInsert.length; i += batchSize) {
    const batch = recordsToInsert.slice(i, i + batchSize);
    const { data, error } = await sb.from("questions").insert(batch);
    
    if (error) {
      console.error(`Error inserting batch ${i / batchSize + 1}:`, error);
      return;
    }
    console.log(`Inserted batch ${i / batchSize + 1} / ${Math.ceil(recordsToInsert.length / batchSize)}`);
  }

  console.log("✅ Database seeding complete!");
}

// Attach to window so it can be run from DevTools
window.seedDatabase = seedDatabase;
