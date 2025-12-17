import Image from "next/image"

const image = [
  { 
    id: "1",
    url: "https://picsum.photos/800/600.webp",
  },
  { 
    id: "2",
    url: "https://picsum.photos/800/600.webp",
  },
  { 
    id: "3",
    url: "https://picsum.photos/800/600.webp",
  },
  { 
    id: "4",
    url: "https://picsum.photos/800/600.webp",
  },
]

export default function page() {
  return (
    <div className='container py-10 space-y-6 bg-background'>
      <h1 className='text-3xl text-center text-gray-900 font-bold'>Galeri</h1>
      <div className="grid md:grid-cols-4 gap-6 p-4">
        {image.map((index) => (
          <Image key={index.id} src={index.url} alt="galeri" height={400} width={600} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw,25vw" className="w-full h-auto"/>
        ))}
      </div>
    </div>
  )
}
