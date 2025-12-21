import Link from "next/link"
import { Route } from "next"

const pengumuman = [
  {
    id: "pengumuman-01",
    title: "Rapat Evaluasi Akhir Tahun",
    slug: "rapat-evaluasi-akhir-tahun",
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
          <div key={item.id} className="border-3 border-gray-300 rounded-xl p-4 bg-card shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="p-1 space-y-1">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
            </div>
            <Link
              href={`/pengumuman/${item.slug}` as Route}
              className="text-primary font-semibold hover:underline bg-white shadow-md">
              Selengkapnya →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
