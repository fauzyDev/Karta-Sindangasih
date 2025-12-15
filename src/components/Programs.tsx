import { Card, CardContent } from '@/components/ui/card'

export default function Programs() {
  const programs = [
    {
      id: 1,
      title: "Bakti Sosial",
      icon: "🤝",
      description: "Kegiatan sosial kemasyarakatan untuk membantu warga yang membutuhkan",
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      title: "Kebersihan",
      icon: "🧹",
      description: "Gerakan menjaga kebersihan lingkungan dan penghijauan dusun",
      color: "from-green-400 to-green-600"
    },
    {
      id: 3,
      title: "Olahraga",
      icon: "⚽",
      description: "Fasilitasi dan pembinaan bakat olahraga pemuda dusun",
      color: "from-orange-400 to-orange-600"
    },
    {
      id: 4,
      title: "UMKM",
      icon: "🏪",
      description: "Pelatihan dan pendampingan usaha mikro kecil menengah",
      color: "from-purple-400 to-purple-600"
    }
  ]

  return (
    <section className="py-16 bg-muted/15">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Program Unggulan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Program-program inovatif kami untuk kemajuan dusun dan pemberdayaan pemuda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {programs.map((program) => (
            <Card key={program.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <div className={`h-2 bg-linear-to-r ${program.color}`}></div>
              <CardContent className="p-6 text-center">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-linear-to-br ${program.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}