import { createClient } from "@supabase/supabase-js";
import { Env } from "@/utils/env.utils";

const supabase = createClient(Env.NEXT_PUBLIC_SUPABASE_URL, Env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default supabase;
