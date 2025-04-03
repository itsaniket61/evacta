import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const iconVariants = {
    animate: {
      rotate: [0, 10, -10, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  };

  return (
    <section
      id='about'
      className='min-h-screen py-16 md:py-20 px-4 bg-black relative overflow-hidden flex items-center'
    >
      <motion.div
        className='absolute top-0 left-0 w-1/2 md:w-1/3 h-full bg-gray-900 transform -skew-x-12 opacity-20'
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className='relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-16'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        {/* Animated Icon */}
        <motion.div
          className='w-full md:w-1/3 flex justify-center'
          variants={iconVariants}
          animate='animate'
        >
          <Users size={150} className='text-white opacity-90 drop-shadow-lg' />
        </motion.div>

        {/* Text Content */}
        <div className='w-full md:w-2/3 text-left'>
          <motion.h2
            className='text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 tracking-tight text-white'
            variants={textVariants}
          >
            About Us
          </motion.h2>
          <motion.p
            className='text-base md:text-lg font-light mb-4 md:mb-6 leading-relaxed text-gray-200'
            variants={textVariants}
          >
            Evacta is your gateway to the future of IT. We craft bespoke
            solutions that push boundaries and drive success.
          </motion.p>
          <motion.p
            className='text-sm md:text-base text-gray-400 leading-relaxed'
            variants={textVariants}
          >
            With a passion for innovation, we empower businesses to excel in a
            digital-first world.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
