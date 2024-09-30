import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.SUPABASE_URL, //
  process.env.SUPABASE_KEY // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4cGNibnJjY3luYnp5dXVmcHp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1MjMxNDgsImV4cCI6MjAzODA5OTE0OH0.QMuXfmMl3SEz31Rpsfl49DnlvQxdlL9J49fo9ooCP5g
);
