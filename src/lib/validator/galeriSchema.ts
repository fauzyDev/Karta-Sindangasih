import { z } from "zod"

export const galeriSchema = z.object({
    kegiatanId: z.string().min(5, "Kegiatan wajib diisi"),
    title: z.string().min(5, "Judul wajib diisi"),
    images: z.array(z.instanceof(File)).min(4, "Minimal 4 foto")
})