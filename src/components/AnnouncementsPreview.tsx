import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Calendar, Megaphone } from 'lucide-react'

export default function AnnouncementsPreview() {
  const announcements = [
    {
      id: 1,
      title: "Rapat Rutin Bulanan Karang Taruna",
      date: "15 Januari 2025",
      type: "meeting"
    },
    {
      id: 2,
      title: "Pembukaan Pendaftaran Anggota Baru",
      date: "20 Januari 2025",
      type: "recruitment"
    },
    {
      id: 3,
      title: "Bakti Sosial bersama Masyarakat",
      date: "25 Januari 2025",
      type: "social"
    }
  ]

  return (
    <section className="py-16 bg-slate-100 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Megaphone className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Pengumuman Terbaru
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Informasi penting dan kegiatan terkini dari Karang Taruna Dusun Sindang Asih
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {announcements.map((announcement) => (
            <Card key={announcement.id} className="hover:shadow-lg transition-shadow duration-200 shadow-md bg-card border border-gray-200">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{announcement.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                  {announcement.title}
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                  Selengkapnya →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}