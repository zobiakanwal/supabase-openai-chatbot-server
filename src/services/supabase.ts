import { createClient } from '@supabase/supabase-js';
import dotenv from "dotenv";
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface DriverData {
  trips_this_week: number;
  total_earnings: number;
  active_warnings: string[];
}

export const fetchDriverData = async (driver_id: string): Promise<DriverData> => {
  const { data, error } = await supabase
    .from('drivers')
    .select('trips_this_week, total_earnings, active_warnings')
    .eq('id', driver_id)
    .single();

  if (error) throw new Error(`Supabase error: ${error.message}`);

  return {
    trips_this_week: data.trips_this_week,
    total_earnings: data.total_earnings,
    active_warnings: data.active_warnings || [],
  };
};