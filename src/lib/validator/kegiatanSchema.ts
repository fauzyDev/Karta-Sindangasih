import { z } from "zod"

export const kegiatanSchema = z.object({
    title: z.string().min(5, "Judul wajib diisi"),
    slug: z.string().min(5),
    description: z.string().min(15, "Deskripsi wajib diisi") 
})