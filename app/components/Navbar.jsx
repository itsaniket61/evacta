'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Services', 'Contact'];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <motion.nav
      className='fixed top-0 left-0 w-full bg-black/95 shadow-md z-50'
      variants={navVariants}
      initial='hidden'
      animate='visible'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo Section */}
          <div className='flex items-center'>
            <Image
              src='/assets/images/logo.png'
              alt='Logo'
              width={120}
              height={75}
              className='object-contain'
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className='text-white hover:text-gray-300 relative px-1 py-2 text-sm font-medium transition-colors duration-200'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <motion.span
                  className='absolute bottom-0 left-0 w-full h-0.5 bg-white'
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden p-2 rounded-md text-white hover:text-gray-300 focus:outline-none'
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className='md:hidden fixed top-16 left-0 w-full bg-black/95 shadow-lg'
        variants={mobileMenuVariants}
        initial='closed'
        animate={isMenuOpen ? 'open' : 'closed'}
      >
        <div className='px-2 pt-2 pb-3 space-y-1'>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className='block px-3 py-2 text-white hover:bg-gray-900 hover:text-gray-300 rounded-md text-base font-medium transition-colors duration-200'
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
