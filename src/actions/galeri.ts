"use server"

import { createClient } from "@/lib/supabase/server";
import { galeriUploadSchema, galeriDBschema } from "@/lib/validator/galeriSchema";
import { randomUUID } from "crypto";

const MAX_FILES = 8;
const MAX_FILE_SIZE = 1.5 * 1024 * 1024; // 1.5MB
const MAX_TOTAL_SIZE = 4 * 1024 * 1024; // 4MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export async function galeriAction(formData: FormData) {
    const parsed = galeriUploadSchema.safeParse({
        kegiatatan_id: formData.get("kegiatan_id") as string,
        title: formData.get("title") as string,
        images: formData.getAll("images") as File[]
    })

    if (!parsed.success) {
        console.error(parsed.error.flatten)
        throw new Error(parsed.error.issues[0].message)
    }

    if (parsed.data.images.length > MAX_FILES) {
        return { ok: false, message: `Maksimal ${MAX_FILES} foto per upload` };
    }

    let totalSize = 0;
    for (const file of parsed.data.images) {
        if (!ALLOWED_TYPES.includes(file.type)) {
            return { ok: false, message: "Format gambar harus JPG/PNG/WebP" };
        }

        if (file.size > MAX_FILE_SIZE) {
            return { ok: false, message: `Ukuran maksimal per foto 1.5MB` };
        }

        totalSize += file.size;
    }

    if (totalSize > MAX_TOTAL_SIZE) {
        return { ok: false, message: "Total upload terlalu besar (max 10MB)" };
    }

    const supabase = await createClient()

    const uploadedPaths: string[] = [];

    try {
        for (const file of parsed.data.images) {
            const fileExt = file.name.split(".").pop();
            const fileName = `${randomUUID()}.${fileExt}`;
            const filePath = `gallery/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from("public")
                .upload(filePath, file, { upsert: false });

            if (uploadError) {
                console.error(uploadError)
                throw new Error("Upload gambar gagal, coba lagi")
            }

            uploadedPaths.push(filePath);
        }

        const dbPayload = galeriDBschema.safeParse({
            kegiatan_id: parsed.data.kegiatan_id,
            title: parsed.data.title,
            images: uploadedPaths
        })

        if (!dbPayload.success) {
            console.error(dbPayload.error)
            throw new Error("Validasi gagal")
        }

        const { error: galeriError } = await supabase
            .from("galeri")
            .insert(dbPayload.data)

        if (galeriError) {
            console.error(galeriError)
            throw new Error("Terjadi kesalahan")
        }
    } catch (err) {
        if (uploadedPaths.length > 0) {
            await Promise.all(uploadedPaths.map((path) =>
                supabase.storage.from("public").remove([path])))
        }
        throw err
    }

    return null
}

export async function getGaleriAction() {
    const supabase = await createClient()

      
}