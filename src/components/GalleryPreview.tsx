import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Camera, ArrowRight } from 'lucide-react'

const galleryImages = [
  {
    id: "1",
    url: "https://www.shareable.net/wp-content/uploads/2023/05/sedang_1477229144sambatan.jpeg"
  },
  {
    id: "2",
    url: "https://images.solopos.com/2013/01/1601rehab-kliwen-1.jpg"
  },
  {
    id: "3",
    url: "https://cdn.antaranews.com/cache/1200x800/2022/03/16/5.jpg"
  },
  {
    id: "4",
    url: "https://img.antaranews.com/cache/730x487/2020/08/16/panjat-3.jpg"
  },
  {
    id: "5",
    url: "https://assets.promediateknologi.id/crop/0x0%3A0x0/750x500/webp/photo/p1/693/2023/08/17/3da88acd-eb89-40c8-8756-7815c7f7a211xx-921462384.jpg"
  },
  {
    id: "6",
    url: "https://cdn.antaranews.com/cache/1200x800/2019/08/18/antarafoto-pemeran-film-bumi-manusia-kunjungi-lkbn-antara-310719-sgd-5.jpg"
  }
]

export default function GalleryPreview() {
  return (
    <section className="py-16 bg-slate-100 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Galeri Kegiatan
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dokumentasi momen-momen berharga dan kegiatan Karang Taruna Dusun Sindang Asih
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
          {galleryImages.map((item) => (
            <div key={item.id} className="relative aspect-4/3 overflow-hidden w-full rounded-lg group cursor-pointer">
              <Image src={item.url} alt="images" loading="lazy" fill className="object-cover" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:cursor-pointer">
            <Link href="/galeri">Lihat Galeri Lengkap <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>
  )
}