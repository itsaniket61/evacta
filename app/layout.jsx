import { Inter } from 'next/font/google'
import './globals.css'
import './markdown.css';
import Navbar from '@/components/Utils/Navbar'
import FooterSection from '@/components/Sections/FooterSection';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Evacta - Let's Build Something Incredible Together.`,
  description: 'Discover unparalleled digital solutions with Evacta, your trusted partner in technology. Elevate your business with innovative software services designed to enhance efficiency and drive growth. Explore our range of solutions tailored to meet the evolving needs of modern enterprises. Join us on the journey to digital excellence. Contact Evacta today',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <meta name='google-adsense-account' content='ca-pub-4911910001881650' />
      <body className={inter.className}>
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
