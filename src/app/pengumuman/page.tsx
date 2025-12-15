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
    <div className="container py-10 space-y-6">
      <h1 className="text-3xl font-bold">Pengumuman</h1>

      <div className="space-y-6">
        {pengumuman.map((item) => (
          <CardItem key={item.id} item={item} baseUrl="pengumuman" />
        ))}
      </div>
    </div>
  )
}
