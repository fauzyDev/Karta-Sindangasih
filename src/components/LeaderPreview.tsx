import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Crown } from 'lucide-react'

export default function LeaderPreview() {
  return (
    <section className="py-16 bg-background border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="w-8 h-8 text-emerald-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Struktur Pengurus
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tim pengurus Karang Taruna Dusun Sindangasih periode 2024-2027
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <Card className="bg-card border border-gray-200 text-center overflow-hidden shadow-md hover:shadow-lg transition-all hover:translate-y-1 duration-300">
            <div className="relative h-48 bg-linear-to-br from-emerald-400 to-teal-500">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-6xl opacity-80">👤</div>
              </div>
              <div className="absolute top-4 right-4">
                <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Crown className="w-3 h-3" />
                  Ketua
                </div>
              </div>
            </div>

            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Cahya Suhendera
              </h3>
              <p className="text-gray-600 mb-4">
                Ketua Karang Taruna Dusun Sindangasih
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <p>📱 +62 812-3456-7890</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link href="/tentang/struktur">
            <Button
              size="lg"
              className="border-2 bg-emerald-400 text-white hover:bg-emerald-500 hover:cursor-pointer px-8 py-3 font-medium rounded-lg transition-all duration-200">
              <span>Lihat Pengurus Lengkap</span>
              <Users className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}