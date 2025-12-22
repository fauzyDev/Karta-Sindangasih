import Link from "next/link";
import Image from "next/image";
import { Route } from "next";
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const kegiatan = [
  {
    id: "kerja-bakti-01",
    title: "Kerja Bakti Bersih Dusun",
    slug: "kerja-bakti-bersih-dusun",
    date: "2024-11-01",
    thumbnail: "https://images.openai.com/static-rsc-1/uUQG6w_ewLf3w-9L5plQATy7v0Vb2MZNlXQl1CEt2k_i_GZSgbfmjC78GcUoCvoefWAnX05eMoWRCADqmPCG913uDUjV4qphiJzC4idMFhtGqY4BLIeCP-cLDsRwpyBsN3oUXIv687NGKRU1sbUtHg",
    excerpt: "Kerja bakti bersama warga membersihkan lingkungan dusun.",
    content: `
      Kegiatan kerja bakti bersama warga Dusun Sindang Asih untuk menjaga
      kebersihan dan kenyamanan lingkungan.
    `,
  },
  {
    id: "turnamen-bola-02",
    title: "Turnamen Sepak Bola Dusun",
    date: "2024-12-05",
    thumbnail: "https://images.openai.com/static-rsc-1/uUQG6w_ewLf3w-9L5plQATy7v0Vb2MZNlXQl1CEt2k_i_GZSgbfmjC78GcUoCvoefWAnX05eMoWRCADqmPCG913uDUjV4qphiJzC4idMFhtGqY4BLIeCP-cLDsRwpyBsN3oUXIv687NGKRU1sbUtHg",
    excerpt: "Turnamen sepak bola antar RT untuk mempererat silaturahmi.",
    content: `
      Turnamen ini diikuti oleh pemuda dari berbagai RT. Kegiatan berjalan
      meriah dan penuh sportivitas.
    `,
  },
  {
    id: "turnamen-voly-02",
    title: "Turnamen voly ball Dusun",
    date: "2024-12-05",
    thumbnail: "https://images.openai.com/static-rsc-1/uUQG6w_ewLf3w-9L5plQATy7v0Vb2MZNlXQl1CEt2k_i_GZSgbfmjC78GcUoCvoefWAnX05eMoWRCADqmPCG913uDUjV4qphiJzC4idMFhtGqY4BLIeCP-cLDsRwpyBsN3oUXIv687NGKRU1sbUtHg",
    excerpt: "Turnamen sepak bola antar RT untuk mempererat silaturahmi.",
    content: `
      Turnamen ini diikuti oleh pemuda dari berbagai RT. Kegiatan berjalan
      meriah dan penuh sportivitas.
    `,
  },
]

export default function KegiatanPage() {
  return (
    <div className="container py-10 space-y-6 bg-background">
      <h1 className="text-3xl text-gray-900 text-center font-bold">Kegiatan</h1>

      <div className="grid md:grid-cols-3 gap-6 p-4">
        {kegiatan.map((item) => (
          <Card key={item.id} className="border border-gray-200 p-4 bg-card shadow-md hover:shadow-lg transition-shadow duration-200">
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={600}
              height={400}
              className="object-cover"
            />
            <CardHeader className="p-2 space-y-1">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
            </CardHeader>
            <CardContent className="p-2">
              <Link
                href={`/kegiatan/${item.slug}` as Route}
                className="text-primary font-semibold hover:underline">
                Selengkapnya →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
