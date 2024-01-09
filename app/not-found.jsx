import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='h-screen bg-blue-500 flex flex-col items-center justify-center'>
            <div className="w-full">
                <Image src="/Icons/error-404.png" height={512} width={512} className='mx-auto'/>
            </div>
            <Link href="/" className='mt-4 py-4 px-8 rounded-md bg-gray-800 hover:bg-gray-950 text-white uppercase font-semibold'>
                Back to Home
            </Link>
        </div>
    )
}
