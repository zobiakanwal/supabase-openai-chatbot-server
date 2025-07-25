import dotenv from 'dotenv';
dotenv.config(); 

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

(async () => {
  try {
    const { data, error } = await supabase.from('drivers').select('*').limit(1);

    if (error) {
      console.error("❌ Supabase query error:", error.message);
    } else {
      console.log("✅ Connection successful, sample data:", data);
    }
  } catch (err) {
    console.error("❌ Supabase connection or table error:", err);
  }
})();
