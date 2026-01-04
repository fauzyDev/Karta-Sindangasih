"use server"

import { createClient } from "@/lib/supabase/server"

export default async function galeriAction(formData: FormData) {
    const title = formData.get("title") as string
    const slug = formData.get("slug") as string
    const description = formData.get("description") as string

    const supabase = await createClient()

    const { error } = await supabase
        .from("galeri")
        .insert({
            title,
            slug,
            description
        })

    if (error) {
        throw new Error(error.message)
    }
}
