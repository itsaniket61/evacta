import AboutSection from '@/components/Sections/AboutSection'
import ClientsSection from '@/components/Sections/ClientsSection'
import ContactSection from '@/components/Sections/ContactSection'
import HeroSection from '@/components/Sections/HeroSection'
import ServicesSection from '@/components/Sections/ServicesSection'

export default function Home() {
  return (
  <main className='font-sans'>
    <HeroSection/>
    <ServicesSection/>
    <AboutSection/>
    <ClientsSection/>
    <ContactSection/>
  </main>
  )
}
