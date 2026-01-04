"use server"

import { createClient } from "@/lib/supabase/server"

export default async function programAction() {
    const supabase = await createClient()
}
