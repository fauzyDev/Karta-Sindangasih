"use server"

import { createClient } from "@/lib/supabase/server";

export async function pengumumanAction() {
    const supabase = await createClient()
}
