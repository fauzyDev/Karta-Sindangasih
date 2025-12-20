import Image from "next/image"

const kegiatan = [
  {
    id: "kerja-bakti-01",
    title: "Kerja Bakti Bersih Dusun",
    slug: "kerja-bakti-bersih-dusun",
    date: "2024-11-01",
    thumbnail: "/images/kegiatan/kerjabakti.jpg",
    excerpt: "Kerja bakti bersama warga membersihkan lingkungan dusun.",
    content: `
      Kegiatan kerja bakti bersama warga Dusun Sindang Asih untuk menjaga
      kebersihan dan kenyamanan lingkungan.
    `,
  },
  {
    id: "turnamen-bola-02",
    title: "Turnamen Sepak Bola Dusun",
    slug: "turnamen-sepak-bola-dusun",
    date: "2024-12-05",
    thumbnail: "/images/kegiatan/sepakbola.jpg",
    excerpt: "Turnamen sepak bola antar RT untuk mempererat silaturahmi.",
    content: `
      Turnamen ini diikuti oleh pemuda dari berbagai RT. Kegiatan berjalan
      meriah dan penuh sportivitas.
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
    <div className="container py-10 space-y-6 bg-background">
      <h1 className="text-3xl font-bold text-gray-800">{item.title}</h1>
      <p className=" text-gray-900">{item.date}</p>

      {item.thumbnail && (
        <Image src={item.thumbnail} alt={item.title} className="rounded-xl w-full" />
      )}

      <div className="prose dark:prose-invert max-w-none text-gray-900">
        {item.content}
      </div>
    </div>
  )
}
