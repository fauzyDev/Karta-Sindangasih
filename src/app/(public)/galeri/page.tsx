import Image from "next/image";
import Link from "next/link";
import { Route } from "next";
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const image = [
  {
    id: "1",
    slug: "kerja-bakti-bersih-desa",
    title: "Kerja Bakti Bersih Desa",
    url: "https://picsum.photos/800/600.webp",
  },
  {
    id: "2",
    slug: "kerja-bakti-bersih-desa",
    title: "Kerja Bakti Bersih Desa",
    url: "https://picsum.photos/800/600.webp",
  },
  {
    id: "3",
    slug: "kerja-bakti-bersih-desa",
    title: "Kerja Bakti Bersih Desa",
    url: "https://picsum.photos/800/600.webp",
  },
  {
    id: "4",
    slug: "kerja-bakti-bersih-desa",
    title: "Kerja Bakti Bersih Desa",
    url: "https://picsum.photos/800/600.webp",
  },
]

export default function page() {
  return (
    <div className='container py-10 space-y-6 bg-background'>
      <h1 className='text-3xl text-center text-gray-900 font-bold'>Galeri Kegiatan</h1>
      <div className="grid md:grid-cols-4 gap-6 p-4">
        {image.map((index) => (
          <Card key={index.id} className="border-3 border-gray-300 rounded-xl p-4 bg-card shadow-md overflow-hidden hover:shadow-lg transition">
            <Image src={index.url} alt="galeri" height={400} width={600} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw,25vw" className="w-full h-auto" />
            <CardHeader className="p-4">
              <h3 className="text-xl font-semibold">{index.title}</h3>
            </CardHeader>
            <CardContent>
              <Link
                href={`/kegiatan/${index.slug}` as Route}
                className="text-primary text-center font-semibold hover:underline bg-white shadow-md">
                Selengkapnya →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
