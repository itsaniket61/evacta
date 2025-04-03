import { motion } from 'framer-motion';
import { Zap, Code, Globe, Rocket, Shield, Star } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.8 },
    },
    hover: { scale: 1.1, transition: { yoyo: Infinity, duration: 0.3 } },
  };

  const iconVariants = (delay) => ({
    animate: {
      y: [0, -15, 0],
      opacity: [0.3, 0.8, 0.3],
      rotate: [0, 10, -10, 0],
      transition: { duration: 3 + Math.random() * 2, repeat: Infinity, delay },
    },
  });

  const iconTypes = [Zap, Code, Globe, Rocket, Shield, Star];
  const generateIcons = () => {
    const icons = [];
    iconTypes.forEach((Icon) => {
      const count = Math.floor(Math.random() * 3) + 2; // 2-4 icons per type
      for (let i = 0; i < count; i++) {
        icons.push({
          Icon,
          size: Math.floor(Math.random() * 10) + 16, // 16-25px
          top: `${Math.random() * 80 + 10}%`,
          left: `${Math.random() * 80 + 10}%`,
          delay: Math.random() * 2,
        });
      }
    });
    return icons;
  };

  const icons = generateIcons();

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-4'
    >
      <motion.div
        className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:40px_40px]'
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      {icons.map(({ Icon, size, top, left, delay }, index) => (
        <motion.div
          key={index}
          className='absolute hidden md:block' // Hide on mobile for performance
          style={{ top, left }}
          variants={iconVariants(delay)}
          animate='animate'
        >
          <Icon size={size} className='text-white' />
        </motion.div>
      ))}
      <motion.div
        className='text-center z-10 max-w-full md:max-w-2xl'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.h1
          className='text-3xl md:text-5xl font-extrabold mb-6 tracking-tight flex items-center justify-center gap-3'
          variants={textVariants}
        >
          <Zap size={24} className='animate-pulse' />
          <Image src={'/assets/images/logo.png'} alt='Logo' width={230} height={150} />
        </motion.h1>
        <motion.p
          className='text-sm md:text-lg max-w-full mx-auto mb-8 opacity-80 leading-relaxed'
          variants={textVariants}
        >
          Innovate. Accelerate. Celebrate. Transforming businesses with
          cutting-edge IT solutions.
        </motion.p>
        <motion.a
          href='#contact'
          className='inline-block bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base shadow-lg hover:shadow-white/20 transition-shadow'
          variants={buttonVariants}
          whileHover='hover'
          whileTap={{ scale: 0.95 }}
        >
          Start Your Journey
        </motion.a>
      </motion.div>
    </section>
  );
}
