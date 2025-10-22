/*
  # Math Workshop Registrations Table

  1. New Tables
    - `workshop_registrations`
      - `id` (uuid, primary key) - Unique identifier for each registration
      - `child_name` (text) - Full name of the child participant
      - `age` (integer) - Age of the child (7-12 years)
      - `parent_name` (text) - Full name of parent/guardian
      - `email` (text) - Contact email address
      - `phone` (text) - Contact phone number
      - `special_requirements` (text, optional) - Any special needs or requirements
      - `created_at` (timestamptz) - Registration timestamp
  
  2. Security
    - Enable RLS on `workshop_registrations` table
    - Add policy to allow anyone to insert registrations (public registration)
    - Add policy to allow authenticated users to view all registrations (admin access)
  
  3. Notes
    - The table stores registration data for the children's math workshop
    - Public insert access allows visitors to register without authentication
    - Email and phone stored for parent contact purposes
*/

CREATE TABLE IF NOT EXISTS workshop_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  child_name text NOT NULL,
  age integer NOT NULL CHECK (age >= 7 AND age <= 12),
  parent_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  special_requirements text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE workshop_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can register for workshop"
  ON workshop_registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view registrations"
  ON workshop_registrations
  FOR SELECT
  TO authenticated
  USING (true);