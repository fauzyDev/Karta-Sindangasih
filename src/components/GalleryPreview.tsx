import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Camera, ArrowRight } from 'lucide-react'

export default function GalleryPreview() {
  const galleryImages = Array.from({ length: 6 }, (_, i) => i + 1)

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
          {galleryImages.map((index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <div className="absolute inset-0 bg-linear-to-br from-emerald-400 via-teal-400 to-cyan-400 opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-4xl opacity-60 group-hover:opacity-100 transition-opacity">
                  📷
                </div>
              </div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
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