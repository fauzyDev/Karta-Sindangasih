import Link from "next/link"
import { Route } from "next"
import { Card, CardHeader, CardContent } from '@/components/ui/card';

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
          <Card key={item.id} className="border-2 border-gray-300 p-4 bg-card shadow-md hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="p-1 space-y-1">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
            </CardHeader>
            <CardContent className="p-2">
              <Link
                href={`/pengumuman/${item.slug}` as Route}
                className="text-primary font-semibold hover:underline">
                Selengkapnya →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
