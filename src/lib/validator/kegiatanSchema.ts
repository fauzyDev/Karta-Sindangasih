import { z } from "zod"
import slugify from "slugify"

export const kegiatanSchema = z.object({
    title: z.string().min(5, "Judul wajib diisi"),
    description: z.string().min(15, "Deskripsi wajib diisi")
}).transform((data) => {
    return {
        ...data,
        slug: slugify(data.title, {
            lower: true,
            strict: true,
            trim: true
        })
    }
})