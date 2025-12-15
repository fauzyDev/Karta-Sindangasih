import { Card, CardContent } from '@/components/ui/card'
import { Calendar, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function NewsPreview() {
  const news = [
    {
      id: 1,
      title: "Sukses! Lomba 17 Agustus Meriahkan HUT RI ke-79",
      date: "18 Agustus 2024",
      excerpt: "Berbagai lomba tradisional berhasil menarik antusiasme warga dusun dalam memperingati HUT RI.",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Pelatihan Digital Marketing untuk UMKM Lokal",
      date: "10 Agustus 2024",
      excerpt: "Meningkatkan kemampuan pengusaha muda dalam memasarkan produk secara digital.",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Gerakan Bersih Dusun: Gotong Royong Jumat Bersih",
      date: "5 Agustus 2024",
      excerpt: "Masyarakat bersatu membersihkan lingkungan dusun untuk menciptakan suasana yang lebih sehat.",
      image: "/api/placeholder/400/250"
    }
  ]

  return (
    <section className="py-16 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kegiatan Terbaru
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dokumentasi kegiatan dan inisiatif Karang Taruna dalam memajukan dusun
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {news.map((item) => (
            <Card key={item.id} className="overflow-hidden bg-white/50 border border-gray-200 shadow-md hover:shadow-xl hover:translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <div className="absolute inset-0 bg-linear-to-br from-emerald-400 to-teal-500 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl opacity-50">📸</div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <button className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}