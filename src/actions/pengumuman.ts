"use server"

import { createClient } from "@/lib/supabase/server"

export default async function pengumumanAction() {
    const supabase = await createClient()
}
