"use server"

import { createClient } from "@/lib/supabase/server"

export default async function kegiatanAction() {
    const supabase = await createClient()
}
