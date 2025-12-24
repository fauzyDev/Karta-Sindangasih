import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, ArrowRight } from 'lucide-react'

export default function NewsPreview() {
  const news = [
    {
      id: 1,
      title: "Sukses! Lomba 17 Agustus Meriahkan HUT RI ke-79",
      date: "18 Agustus 2024",
      excerpt: "Berbagai lomba tradisional berhasil menarik antusiasme warga dusun dalam memperingati HUT RI.",
      image: "https://images.openai.com/thumbnails/url/MMq1-Hicu5mVUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw52CUvKqzLIyPWxjCj0DitOza4IdM-pDMy0TDXU9TTUjY-0KK1Iyi12Sc3I8MmPSNLNUSsGAJBVJu0"
    },
    {
      id: 2,
      title: "Pelatihan Digital Marketing untuk UMKM Lokal",
      date: "10 Agustus 2024",
      excerpt: "Meningkatkan kemampuan pengusaha muda dalam memasarkan produk secara digital.",
      image: "https://bangunjiwo-bantul.desa.id/assets/files/artikel/sedang_1648378727kalurahan.bangunjiwo_277317700_158903589848218_1343365514034326617_n.jpg"
    },
    {
      id: 3,
      title: "Gerakan Bersih Dusun: Gotong Royong Jumat Bersih",
      date: "5 Agustus 2024",
      excerpt: "Masyarakat bersatu membersihkan lingkungan dusun untuk menciptakan suasana yang lebih sehat.",
      image: "https://buketpala.gampong.id/media/2023.08/img_20230811_wa00061.jpeg"
    }
  ]

  return (
    <section className="py-16 bg-background border-t border-slate-200">
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
            <Card key={item.id} className="flex flex-col overflow-hidden bg-card border border-gray-200 shadow-md hover:shadow-lg hover:translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="relative h-48 overflow-hidden aspect-4/3 w-full bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw,25vw"
                  className='object-cover'
                  loading="lazy" />
              </div>

              <CardContent className="p-6 flex-1">
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
              </CardContent>
              <div className="p-6 pt-0">
                <button className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}