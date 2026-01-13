"use server"

import { createClient } from "@/lib/supabase/server";

export async function programAction() {
    const supabase = await createClient()
}
