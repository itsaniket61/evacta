import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const iconVariants = {
    hover: { scale: 1.2, transition: { duration: 0.3 } },
  };

  return (
    <footer className='bg-black py-10 md:py-16 px-4 text-center border-t border-gray-800'>
      <motion.div
        className='max-w-5xl mx-auto'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className='text-2xl md:text-3xl font-extrabold mb-4 md:mb-6 tracking-tight'>
          Evacta
        </h3>
        <p className='text-sm md:text-base opacity-80 mb-6'>
          © {new Date().getFullYear()} Evacta. All rights reserved.
        </p>
        <div className='flex justify-center gap-6 md:gap-8'>
          <motion.a
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
            variants={iconVariants}
            whileHover='hover'
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            variants={iconVariants}
            whileHover='hover'
          >
            <Twitter size={20} />
          </motion.a>
          <motion.a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            variants={iconVariants}
            whileHover='hover'
          >
            <Linkedin size={20} />
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
}
