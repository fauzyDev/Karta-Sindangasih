import { Card, CardContent } from '@/components/ui/card'
import { MessageCircle, Instagram, MapPin } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-white text-center shadow-md hover:shadow-lg hover:translate-y-1 transition-shadow duration-300 group cursor-pointer">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                <MessageCircle className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 text-sm">+62 812-3456-7890</p>
              <p className="text-green-600 text-sm mt-2 font-medium">Klik untuk chat</p>
            </CardContent>
          </Card>

          <Card className="bg-white text-center shadow-md hover:shadow-lg hover:translate-y-1 transition-shadow duration-300 group cursor-pointer">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-600 transition-colors">
                <Instagram className="w-8 h-8 text-pink-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Instagram</h3>
              <p className="text-gray-600 text-sm">@kartasindangasih</p>
              <p className="text-pink-600 text-sm mt-2 font-medium">Follow kami</p>
            </CardContent>
          </Card>

          <Card className="bg-white text-center shadow-md hover:translate-y-1 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Alamat</h3>
              <p className="text-gray-600 text-sm">Dusun Sindangasih,</p>
              <p className="text-gray-600 text-sm">Desa Kujangsari,</p>
              <p className="text-gray-600 text-sm">Kecamatan Langensari,</p>
              <p className="text-gray-600 text-sm">Kota Banjar</p>
            </CardContent>
          </Card>
{/* 
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">info@karangtaruna.me</p>
              <p className="text-gray-600 text-sm">mekarsari@karangtaruna.me</p>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  )
}