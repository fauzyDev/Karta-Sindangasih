import Link from "next/link"
import { Route } from "next"

export default function CardItem({ item, baseUrl }) {
  return (
    <div className="border-3 border-gray-300 rounded-xl p-4 bg-card shadow-md">
      <h2 className="text-xl font-semibold">{item.title}</h2>

      {item.date && (
        <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
      )}

      {item.excerpt && (
        <p className="mb-3 text-muted-foreground">{item.excerpt}</p>
      )}

      <Link
        href={`/${baseUrl}/${item.slug}` as Route}
        className="text-primary font-semibold hover:underline bg-white shadow-md"
      >
        Selengkapnya →
      </Link>
    </div>
  )
}
