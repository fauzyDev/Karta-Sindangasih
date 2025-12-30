import Image from "next/image";
import Link from "next/link";
import { Route } from "next";
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const image = [
  {
    id: "1",
    kegatanSlug: "kerja-bakti-bersih-dusun",
    title: "Kerja Bakti Bersih Dusun",
    url: "https://picsum.photos/800/600.webp",
  },
]

export default function page() {
  return (
    <div className='container py-10 space-y-6 bg-background'>
      <h1 className='text-3xl text-center text-gray-900 font-bold'>Galeri Kegiatan</h1>
      <div className="grid md:grid-cols-4 gap-6 p-4">
        {image.map((index) => (
          <Card key={index.id} className="border border-gray-200 p-4 bg-card shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="relative aspect-4/3 w-full">
              <Image
                src={index.url}
                alt="galeri"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw,25vw"
                className="object-cover"
                loading="lazy" />
            </div>
            <CardHeader className="p-1 space-y-1">
              <h3 className="text-xl font-semibold">{index.title}</h3>
            </CardHeader>
            <CardContent className="p-2">
              <Link
                href={`/galeri/${index.kegatanSlug }` as Route}
                className="text-primary text-center font-semibold hover:underline">
                Selengkapnya →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 
