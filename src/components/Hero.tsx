import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50 mt-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
          Karang Taruna Dusun
          <span className="block text-blue-600 mt-2">Sindangasih</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Wadah pemuda dusun untuk berkarya, berinovasi, dan berkontribusi dalam pembangunan masyarakat yang lebih baik dan sejahtera.
        </p>

        <div className="flex flex-row gap-3 justify-center">
          <Button
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-700 hover:cursor-pointer text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
          >
            Lihat Kegiatan
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-blue-400 text-blue-500 hover:text-blue-700 hover:cursor-pointer px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200"
          >
            Lihat Pengumuman
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-400 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-300 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-400 rounded-full opacity-10 blur-2xl"></div>
    </section>
  )
}
