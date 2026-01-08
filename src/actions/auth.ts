"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export async function loginAction(formData: FormData) {
    const username = formData.get("username")?.toString().trim() as string
    const password = formData.get("password") as string

    if (!username || !password) {
        throw new Error("Username dan password wajib diisi")
    }

    const supabase = await createClient()

    try {
        const { error: authError } = await supabase.auth.signInWithPassword({
            email: `${username}@karangtaruna.local`,
            password,
        })

        if (authError) {
            console.error(authError)
            throw new Error("Username atau password salah")
        }

        const { data: admin, error: adminError } = await supabase
            .from("admin_profiles")
            .select("id")
            .eq("username", username)
            .single()

        if (adminError || !admin) {
            console.error(adminError)
            throw new Error("Username tidak ditemukan")
        }

    } catch (err) {
        throw err
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
