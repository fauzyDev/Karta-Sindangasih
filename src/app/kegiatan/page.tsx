import CardItem from "@/components/CardItem"

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
    date: "2024-12-05",
    thumbnail: "/images/kegiatan/sepakbola.jpg",
    excerpt: "Turnamen sepak bola antar RT untuk mempererat silaturahmi.",
    content: `
      Turnamen ini diikuti oleh pemuda dari berbagai RT. Kegiatan berjalan
      meriah dan penuh sportivitas.
    `,
  },
  {
    id: "turnamen-voly-02",
    title: "Turnamen voly ball Dusun",
    date: "2024-12-05",
    thumbnail: "/images/kegiatan/sepakbola.jpg",
    excerpt: "Turnamen sepak bola antar RT untuk mempererat silaturahmi.",
    content: `
      Turnamen ini diikuti oleh pemuda dari berbagai RT. Kegiatan berjalan
      meriah dan penuh sportivitas.
    `,
  },
]

export default function KegiatanPage() {
  return (
    <div className="container py-10 space-y-6 bg-background">
      <h1 className="text-3xl text-gray-900 text-center font-bold">Kegiatan</h1>

      <div className="grid md:grid-cols-3 gap-6 p-4">
        {kegiatan.map((item) => (
          <CardItem key={item.id} item={item} baseUrl="kegiatan"/>
        ))}
      </div>
    </div>
  )
}
