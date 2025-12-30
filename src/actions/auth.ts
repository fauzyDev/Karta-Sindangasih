"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

type Props = {
    image: string
    userId: string
}

export async function logoutAction(data: Props) {
    const supabase = await createClient()
    return supabase.from("auth ").insert(data)
}