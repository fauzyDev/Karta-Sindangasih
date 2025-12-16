import CardItem from "@/components/CardItem"

const pengumuman = [
  {
    id: "pengumuman-01",
    title: "Rapat Evaluasi Akhir Tahun",
    date: "2024-12-10",
    excerpt: "Rapat evaluasi akan dilaksanakan di Balai Dusun.",
    content: `
      Diharapkan seluruh pengurus hadir tepat waktu. Agenda meliputi laporan,
      evaluasi, dan rencana kegiatan tahun depan.
    `,
  },
]

export default function PengumumanPage() {
  return (
    <div className="container py-10 space-y-6 bg-background">
      <h1 className="text-3xl text-center text-gray-900 font-bold">Pengumuman</h1>

      <div className="grid md:grid-cols-4 gap-6 p-4">
        {pengumuman.map((item) => (
          <CardItem key={item.id} item={item} baseUrl="pengumuman" />
        ))}
      </div>
    </div>
  )
}
