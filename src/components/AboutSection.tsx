import { Heart, Leaf, Trophy, ShoppingBag } from 'lucide-react'

export default function AboutSection() {
  const features = [
    {
      icon: Heart,
      title: "Sosial",
      description: "Meningkatkan kepedulian sosial dan solidaritas antar warga dusun"
    },
    {
      icon: Leaf,
      title: "Lingkungan",
      description: "Menjaga kebersihan dan kelestarian lingkungan sekitar"
    },
    {
      icon: Trophy,
      title: "Olahraga",
      description: "Membina bakat olahraga dan kesehatan pemuda dusun"
    },
    {
      icon: ShoppingBag,
      title: "UMKM",
      description: "Mendukung pengembangan usaha mikro dan ekonomi kreatif"
    }
  ]

  return (
    <section className="py-16 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tentang Kami
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Karang Taruna Dusun Sindangasih adalah organisasi kepemudaan yang berkomitmen untuk 
            menjadi wadah berkembangnya generasi muda yang berkarakter, kreatif, dan bertanggung jawab. 
            Kami berfokus pada pemberdayaan pemuda, pelestarian budaya lokal, serta pembangunan 
            masyarakat yang berkelanjutan melalui berbagai program sosial, pendidikan, dan ekonomi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}