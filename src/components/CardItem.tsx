import Image from "next/image"
import Link from "next/link"
import { Route } from "next"

export default function CardItem({ item, baseUrl }) {
  return (
    <div className="border-3 border-gray-300 rounded-xl p-4 bg-card shadow-md overflow-hidden hover:shadow-lg transition">
      <Image
        src={item.thumbnail}
        alt={item.title}
        width={600}
        height={400}
        className="object-cover"
      />
      <div className="p-4 space-y-1">
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
      </div>
      <Link
        href={`/${baseUrl}/${item.slug}` as Route}
        className="text-primary font-semibold hover:underline bg-white shadow-md"
      >
        Selengkapnya →
      </Link>
    </div>
  )
}
