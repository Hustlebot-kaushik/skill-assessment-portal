# Skill Assessment Portal

**Mahatma Phule Apang Prashikshan Kendra** — Vocational Skill Assessment Portal

An accessible, mobile-responsive web app that assesses vocational aptitude across 4 sections, tailored to the user's education level, and recommends a training pathway.

## Quick Start

1. Open `index.html` in any modern browser (double-click the file)
2. That's it — no build step, no server, no `npm install`

## Features

- **Education-level selection** — Questions are tailored to 5 levels: Primary (up to 5th), Middle (6th–8th), Secondary (9th–10th), Higher Secondary (11th–12th), Graduate & above
- **Dynamic questions** — 10 questions per section per level = 200 total questions in the bank. Each assessment randomly picks 16 (4 per section), so every attempt is different
- **4 assessment sections** — Basic Computers, English, Logical Reasoning, Aptitude
- **Rule-based recommendations** — Deterministic vocational pathway suggestions based on scores + education level
- **Accessibility** — WCAG AA contrast, keyboard navigation, screen-reader support, skip-to-content link
- **Mobile-responsive** — Works on shared tablets and phones at the NGO

## Project Structure

```
skill-assessment-portal/
├── index.html                  ← Open this in browser
├── css/
│   └── styles.css              ← Focus rings, card animations, transitions
├── js/
│   ├── config.js               ← Supabase URL & key (edit this)
│   ├── state.js                ← App state management
│   ├── render.js               ← DOM references & screen switching
│   ├── quiz.js                 ← Random selection, question rendering
│   ├── results.js              ← Scores, breakdown, recommendations
│   ├── supabase.js             ← Database insert & error handling
│   ├── app.js                  ← Event listeners & initialization
│   └── questions/
│       ├── primary.js          ← Up to 5th standard (40 questions)
│       ├── middle.js           ← 6th–8th standard (40 questions)
│       ├── secondary.js        ← 9th–10th standard (40 questions)
│       ├── higher.js           ← 11th–12th standard (40 questions)
│       └── graduate.js         ← Graduate & above (40 questions)
└── README.md
```

## Supabase Backend & Admin Panel (Optional but Recommended)

Results can be saved to a Supabase database, and questions can be loaded dynamically. If not configured, the app still works completely offline using the fallback JavaScript question banks.

### 1. Database Setup

Run the provided SQL script in your Supabase SQL Editor:
1. Open `setup.sql` in this project.
2. Copy the contents.
3. Paste and run it in the Supabase SQL Editor.

This creates the `assessments` and `questions` tables, along with Row Level Security (RLS) policies.

### 2. Add your credentials

Edit `js/config.js` with your Supabase project URL and anon key:

```js
const SUPABASE_URL      = "https://your-project.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbG...your-anon-key";
```

### 3. Create a Staff Admin Account

You need a staff account to log into the Admin Dashboard (`admin.html`):
1. Go to your Supabase project dashboard.
2. Navigate to **Authentication > Users**.
3. Click **Add user > Create new user**.
4. Enter an email and password for the staff member.

### 4. Seed the Database with Questions

To migrate the 200 hardcoded questions into your new Supabase database:
1. Open `index.html` in your browser.
2. Open the browser's Developer Tools (F12 or Right-click > Inspect).
3. Go to the **Console** tab.
4. Run this command:
   ```js
   await window.seedDatabase()
   ```
5. You should see a success message. The quiz will now fetch questions from Supabase!

## Admin Panel

Open `admin.html` in your browser to access the staff portal. 
- Log in with the staff account created in step 3.
- **Submissions Dashboard:** View all student assessments, filter by standard/name, and export to CSV.
- **Question Manager:** Add, edit, or disable questions directly from the UI without touching the code.

```js
window.QUESTIONS_PRIMARY = {
  "Basic Computers": [
    {
      id: "p_comp1",
      question: "Which of these is used to type?",
      options: ["Mouse", "Keyboard", "Monitor", "Speaker"],
      correctIndex: 1
    },
    // ... more questions
  ],
  "English": [ ... ],
  "Logical Reasoning": [ ... ],
  "Aptitude": [ ... ]
};
```

- Each section should have **at least 4 questions** (since we pick 4 per section)
- More questions = more variety between attempts
- `correctIndex` is 0-based

## Deployment

Since there's no build step, deploy by copying the entire folder:

- **Netlify**: Drag & drop the folder at [app.netlify.com/drop](https://app.netlify.com/drop)
- **GitHub Pages**: Push to a repo, enable Pages in settings
- **Any web server**: Copy to the web root

## License

Built for Mahatma Phule Apang Prashikshan Kendra. Free to use and modify.
