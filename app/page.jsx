"use client";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Clients from './components/Clients';
import Products from './components/Products';

export default function Home() {
  return (
    <div className='min-h-screen bg-black'>
      <Navbar />
      <Hero />
      <About />
      <Products/>
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}