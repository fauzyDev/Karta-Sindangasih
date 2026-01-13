import { z } from "zod"

export const galeriUploadSchema = z.object({
    kegiatan_id: z.string().min(5, "Kegiatan wajib diisi").uuidv4(),
    title: z.string().min(5, "Judul wajib diisi"),
    images: z.array(z.instanceof(File)).min(4, "Minimal 4 foto")
})

export const galeriDBschema = z.object({
    kegiatan_id: z.string().min(5),
    title: z.string().min(5),
    images: z.array(z.string()).min(4)
})
