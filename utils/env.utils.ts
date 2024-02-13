import { z } from "zod";

const EnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().min(1, "Required").url("Invalide URL"),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1, "Required"),
});

export const Env = EnvSchema.parse({
  ...process.env,
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ?? undefined,
  NEXT_PUBLIC_SUPABASE_ANON_KEY:
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? undefined,
});
