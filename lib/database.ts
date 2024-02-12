import { createClient } from "@supabase/supabase-js";
import { Env } from "@/utils/env.utils";

const supabase = createClient(Env.SUPABASE_URL, Env.SUPABASE_ANON_KEY);

export default supabase;
