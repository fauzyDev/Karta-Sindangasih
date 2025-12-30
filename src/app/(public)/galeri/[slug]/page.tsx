import Image from "next/image"
import Link from "next/link"

const image = [
  {
    id: "1",
    kegiatanSlug: "kerja-bakti-bersih-dusun",
    title: "Kerja Bakti Bersih Dusun",
    cover: "https://picsum.photos/800/600?4",
    photos: [
      "https://picsum.photos/800/600?5",
      "https://picsum.photos/800/600?6",
      "https://picsum.photos/800/600?7",
      "https://picsum.photos/800/600?8",
      "https://picsum.photos/800/600?9",
      "https://picsum.photos/800/600?10",
      "https://picsum.photos/800/600?11",
      "https://picsum.photos/800/600?12",
    ],
  },
]

type PropsParams = {
  params: Promise<{ slug: string }>
}

export default async function GaleriDetail({ params }: PropsParams) {
  const { slug } = await params
  const data = image.find((k) => k.kegiatanSlug === slug)

  if (!data) return <div className="container py-10 text-center font-semibold">Galeri tidak ditemukan</div>

  return (
    <div className="container py-10 space-y-8">
      <h1 className="text-3xl font-bold text-center">{data.title}</h1>

      <div className="grid md:grid-cols-4 gap-4 px-4 mb-2">
        {data.photos.map((img, index) => (
          <div key={index} className="relative aspect-4/3 w-full">
            <Image
              src={img}
              alt={`foto-${index}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw,25vw"
              loading="lazy"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-1 translate-y-3">
        <Link
          href={`/kegiatan/${data.kegiatanSlug}`}
          className="inline-block mt-6 px-4 py-2 bg-black text-white rounded-lg"
        >
          Lihat Detail Kegiatan →
        </Link>
      </div>
    </div>
  )
}
