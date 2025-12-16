import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="justify-items-center items-center">
      <h2 className='text-black'>Not Found</h2>
      <p className='text-black'>Could not find requested resource</p>
      <Link href="/" className='text-black'>Return Home</Link>
    </div>
  )
}