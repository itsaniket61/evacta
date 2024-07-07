import AboutSection from '@/components/Sections/AboutSection'
import ClientsSection from '@/components/Sections/ClientsSection'
import ContactSection from '@/components/Sections/ContactSection'
import FooterSection from '@/components/Sections/FooterSection'
import HeroSection from '@/components/Sections/HeroSection'
import PostsSection from '@/components/Sections/PostsSection'
import ServicesSection from '@/components/Sections/ServicesSection'

export default function Home() {
  return (
  <main className='font-sans'>
    <HeroSection/>
    <ServicesSection/>
    <AboutSection/>
    <ClientsSection/>
    <PostsSection/>
    <ContactSection/>
  </main>
  )
}
