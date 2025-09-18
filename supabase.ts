import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./database";

const supabaseUrl = process.env["SUPABASE_URL"] as string;
const supabaseKey = process.env["SUPABASE_KEY"] as string;

export type CustomSupabaseClient = SupabaseClient<Database>;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase credentials");
}

export const supabase: CustomSupabaseClient = createClient(supabaseUrl, supabaseKey);
