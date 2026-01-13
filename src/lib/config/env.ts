import "server-only";
import { z } from "zod";

const envSchema = z.object({
    NEXT_PUBLIC_SUPABASE_URL: z.url(),
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: z.string().min(1)
})

const _env = envSchema.parse(process.env)

export const env = {
    supabaseUrl: _env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseAnonKey: _env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
}