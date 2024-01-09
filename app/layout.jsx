import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Utils/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Evacta - Let's Build Something Incredible Together.`,
  description: 'Discover unparalleled digital solutions with Evacta, your trusted partner in technology. Elevate your business with innovative software services designed to enhance efficiency and drive growth. Explore our range of solutions tailored to meet the evolving needs of modern enterprises. Join us on the journey to digital excellence. Contact Evacta today',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
