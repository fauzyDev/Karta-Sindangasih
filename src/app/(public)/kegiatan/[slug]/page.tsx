import Image from "next/image"

const kegiatan = [
  {
    id: "kerja-bakti-01",
    title: "Kerja Bakti Bersih Dusun",
    slug: "kerja-bakti-bersih-dusun",
    date: "2024-11-01",
    previewImages: [
      "https://picsum.photos/600/400.webp",
      "https://picsum.photos/601/400.webp",
      "https://picsum.photos/602/400.webp",
    ],
    excerpt: "Kerja bakti bersama warga membersihkan lingkungan dusun.",
    content: `
      Kegiatan kerja bakti bersama warga Dusun Sindang Asih untuk menjaga
      kebersihan dan kenyamanan lingkungan.
    `,
  },
]

type PropsParams = {
  params: Promise<{ slug: string }>
}

export default async function KegiatanDetail({ params }: PropsParams) {
  const { slug } = await params

  const item = kegiatan.find((k) => k.slug === slug)

  if (!item) return <div className="container py-10">Data tidak ditemukan.</div>

  return (
    <div className="container py-10 px-4 space-y-8 bg-background">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-gray-800">{item.title}</h1>
        <p className=" text-gray-900">{item.date}</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {item.previewImages.map((image, index) => (
          <Image key={index} src={image} alt={item.title} width={600} height={400} className="object-cover" loading="lazy"/>
        ))}
      </div>
      <div className="prose dark:prose-invert max-w-none text-gray-900">
        {item.content}
      </div>
    </div>
  )
}
