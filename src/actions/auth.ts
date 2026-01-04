"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export async function loginAction(formData: FormData) {
    const username = formData.get("username")?.toString().trim() as string
    const password = formData.get("password") as string

    const supabase = await createClient()

    const { error } = await supabase.auth.signInWithPassword({
        email: `${username}@karangtaruna.local`,
        password,
    })

    if (error) {
        throw error
    }

    const { data: admin } = await supabase
        .from("admin_profiles")
        .select("id")
        .eq("username", username)
        .single()

    if (!admin) {
        throw new Error("Username tidak ditemukan")
    }

    redirect("/dashboard")
}

export async function logoutAction() {
    const supabase = await createClient()
    await supabase.auth.signOut()

    const cookieStore = await cookies()
    cookieStore.delete("active_theme")

    redirect("/")
}
