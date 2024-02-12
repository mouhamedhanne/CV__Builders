import { z } from "zod";

const EnvSchema = z.object({
  SUPABASE_URL: z.string().min(1, "Required").url("Invalide URL"),
  SUPABASE_ANON_KEY: z.string().min(1, "Required"),
});

export const Env = EnvSchema.parse(process.env);
