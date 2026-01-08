"use server"

import { createClient } from "@/lib/supabase/server"
import { galeriSchema } from "@/lib/validator/galeriSchema"

export default async function galeriAction(formData: FormData) {
    const parsed = galeriSchema.safeParse({
        kegiatatan: formData.get("kegiatan_id") as string,
        title: formData.get("title") as string,
        images: formData.getAll("images") as File[]
    })

    if (!parsed.success) {
        console.error(parsed.error.flatten)
        throw new Error(parsed.error.issues[0].message)
    }

    const supabase = await createClient()

    const { error: galeriError } = await supabase
        .from("galeri")
        .insert(parsed.data)

    if (galeriError) {
        console.error(galeriError)
        throw new Error("Terjadi kesalahan")
    }

    return null
}
