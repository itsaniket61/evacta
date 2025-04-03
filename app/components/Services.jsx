import { motion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import { getData } from '../utils/getData';
import { Code } from 'lucide-react';

export default function Services() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: 'beforeChildren',
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

  const loaderVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  const fetchServices = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getData('Services');

      if (!Array.isArray(data)) {
        throw new Error('Invalid services data format');
      }

      setServices(data);
    } catch (error) {
      setError(
        error.message || 'Failed to load services. Please try again later.'
      );
      console.error('Error fetching services:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  return (
    <section
      id='services'
      className='min-h-screen py-16 md:py-20 px-4 bg-black relative overflow-hidden flex items-center'
      aria-label='Our Services Section'
    >
      {/* Background decoration */}
      <motion.div
        className='absolute top-0 left-0 w-1/2 md:w-1/3 h-full bg-gray-900 transform -skew-x-12 opacity-20'
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <div className='relative z-10 max-w-6xl mx-auto w-full'>
        <motion.h2
          className='text-3xl md:text-4xl font-extrabold mb-12 md:mb-16 tracking-tight text-white text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>

        {isLoading ? (
          <motion.div
            className='flex justify-center items-center min-h-[300px]'
            variants={loaderVariants}
            animate='animate'
            aria-label='Loading services'
          >
            <div className='w-12 h-12 border-4 border-white border-t-transparent rounded-full' />
          </motion.div>
        ) : error ? (
          <div className='text-center text-red-400 min-h-[300px] flex flex-col items-center justify-center gap-4'>
            <p>{error}</p>
            <button
              onClick={fetchServices}
              className='bg-white text-black px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white'
              aria-label='Retry loading services'
            >
              Retry
            </button>
          </div>
        ) : (
          <div className='space-y-16 md:space-y-20' role='list'>
            {services.length > 0 ? (
              services.map((service, index) => (
                <motion.div
                  key={service.id || index}
                  className='flex flex-col md:flex-row items-center gap-12 md:gap-16'
                  variants={containerVariants}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  role='listitem'
                >
                  <motion.div
                    className='w-full md:w-1/3 flex justify-center'
                    variants={iconVariants}
                    animate='animate'
                    aria-hidden='true'
                  >
                    <Code
                      size={150}
                      className='text-white opacity-90 drop-shadow-lg'
                    />
                  </motion.div>

                  <div className='w-full md:w-2/3 text-left'>
                    <motion.h3
                      className='text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-white'
                      variants={textVariants}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p
                      className='text-base md:text-lg text-gray-400 leading-relaxed'
                      variants={textVariants}
                    >
                      {service.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className='text-center text-gray-400' role='status'>
                No services available at this time.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
