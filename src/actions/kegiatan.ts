"use server"

import { createClient } from "@/lib/supabase/server"
import { kegiatanSchema } from "@/lib/validator/kegiatanSchema"

export default async function kegiatanAction(formData: FormData) {
    const parsed = kegiatanSchema.safeParse({
        title: formData.get("title") as string,
        slug: formData.get("slug") as string,
        description: formData.get("description") as string
    })

    if (!parsed.success) {
        console.error(parsed.error.flatten)
        throw new Error(parsed.error.issues[0].message)
    }

    const supabase = await createClient()

    try {
        const { error: kegiatanError } = await supabase
            .from("kegiatan")
            .insert(parsed.data)

        if (kegiatanError) {
            console.error(kegiatanError)
            throw new Error("Terjadi kesalahan, Coba kembali")
        }
    } catch (err) {
        throw err
    }

    return null
}
