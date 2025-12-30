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

export default function Page({ params }) {
  const item = pengumuman.find((p) => p.id === params.id)

  if (!item) return <div className="container py-10 text-center font-semibold">Tidak ditemukan.</div>

  return (
    <div className="container py-10 space-y-6 bg-background">
      <h1 className="text-3xl font-bold">{item.title}</h1>
      <p className="text-muted-foreground">{item.date}</p>

      <div className="prose dark:prose-invert max-w-none">
        {item.content}
      </div>
    </div>
  )
}
