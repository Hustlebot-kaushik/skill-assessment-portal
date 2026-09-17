-- ==============================================================================
-- Skill Assessment Portal - Supabase Setup
-- ==============================================================================

-- 1. Create Assessments Table
CREATE TABLE IF NOT EXISTS assessments (
    id                  BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    full_name           TEXT NOT NULL,
    category            TEXT NOT NULL,
    accommodation_notes TEXT DEFAULT '',
    education_level     TEXT NOT NULL,
    score               INTEGER NOT NULL,
    total_questions     INTEGER NOT NULL,
    section_breakdown   JSONB NOT NULL DEFAULT '{}',
    recommended_pathway TEXT NOT NULL,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT now()
);


-- 2. Create Questions Table
CREATE TABLE IF NOT EXISTS questions (
    id              BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    education_level TEXT NOT NULL,
    section         TEXT NOT NULL,
    question        TEXT NOT NULL,
    options         JSONB NOT NULL,
    correct_index   INTEGER NOT NULL,
    is_active       BOOLEAN NOT NULL DEFAULT true,
    created_at      TIMESTAMPTZ DEFAULT now()
);


-- 3. Enable Row Level Security
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;


-- 4. Remove old policies if they already exist
DROP POLICY IF EXISTS "Allow anonymous inserts on assessments"
ON assessments;

DROP POLICY IF EXISTS "Allow authenticated read on assessments"
ON assessments;

DROP POLICY IF EXISTS "Allow anonymous read active questions"
ON questions;

DROP POLICY IF EXISTS "Allow authenticated all on questions"
ON questions;


-- 5. Assessment Policies

-- Anonymous users can submit assessments
CREATE POLICY "Allow anonymous inserts on assessments"
ON assessments
FOR INSERT
TO anon
WITH CHECK (true);


-- Authenticated staff can view assessments
CREATE POLICY "Allow authenticated read on assessments"
ON assessments
FOR SELECT
TO authenticated
USING (true);


-- 6. Question Policies

-- Anonymous users can read active questions
CREATE POLICY "Allow anonymous read active questions"
ON questions
FOR SELECT
TO anon
USING (is_active = true);


-- Authenticated staff can manage questions
CREATE POLICY "Allow authenticated all on questions"
ON questions
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);