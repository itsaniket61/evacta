import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';
import { getData } from '../utils/getData';

export default function Clients() {
  const [clientsData, setClientsData] = useState([]);
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 20px rgba(255, 255, 255, 0.1)',
      transition: { duration: 0.3 },
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

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getData('Clients');

      // Data validation
      if (!Array.isArray(data)) {
        throw new Error('Invalid data format received');
      }

      setClientsData(data);
    } catch (error) {
      setError(
        error.message || 'Failed to load client data. Please try again later.'
      );
      console.error('Error fetching clients:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <section
      id='clients'
      className='min-h-screen py-16 md:py-20 px-4 bg-black relative overflow-hidden flex items-center'
      aria-label='Our Clients Section'
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
        {/* Header section */}
        <motion.div
          className='flex flex-col md:flex-row items-center gap-12 md:gap-16 mb-12 md:mb-16'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <motion.div
            className='w-full md:w-1/3 flex justify-center'
            variants={iconVariants}
            animate='animate'
            aria-hidden='true'
          >
            <Users
              size={150}
              className='text-white opacity-90 drop-shadow-lg'
            />
          </motion.div>

          <div className='w-full md:w-2/3 text-left'>
            <motion.h2
              className='text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 tracking-tight text-white'
              variants={textVariants}
            >
              Our Clients
            </motion.h2>
            <motion.p
              className='text-base md:text-lg text-gray-400 leading-relaxed'
              variants={textVariants}
            >
              We’re proud to partner with industry leaders across various
              sectors.
            </motion.p>
          </div>
        </motion.div>

        {/* Content section */}
        {isLoading ? (
          <motion.div
            className='flex justify-center items-center min-h-[250px]'
            variants={loaderVariants}
            animate='animate'
            aria-label='Loading client data'
          >
            <div className='w-12 h-12 border-4 border-white border-t-transparent rounded-full' />
          </motion.div>
        ) : error ? (
          <div className='text-center text-red-400 min-h-[250px] flex flex-col items-center justify-center gap-4'>
            <p>{error}</p>
            <button
              onClick={fetchData}
              className='bg-white text-black px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors'
            >
              Retry
            </button>
          </div>
        ) : (
          <motion.div
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            role='list'
          >
            {clientsData.length > 0 ? (
              clientsData.map((client, index) => (
                <motion.div
                  key={client.id || index}
                  className='bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-white/30 transition-all min-h-[250px] flex flex-col'
                  variants={cardVariants}
                  whileHover='hover'
                  role='listitem'
                >
                  <h3 className='text-xl md:text-2xl font-semibold mb-2 text-white'>
                    {client.name}
                  </h3>
                  <p className='text-sm md:text-base text-gray-400 mb-4'>
                    <span className='font-medium text-gray-300'>Industry:</span>{' '}
                    {client.industry}
                  </p>
                  <p className='text-sm md:text-base text-gray-500 italic mb-4 flex-grow'>
                    "{client.testimonial}"
                  </p>
                  <a
                    href={client.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-auto bg-white text-black px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors inline-block text-center focus:outline-none focus:ring-2 focus:ring-white'
                    aria-label={`Visit ${client.name} website`}
                  >
                    Visit Website
                  </a>
                </motion.div>
              ))
            ) : (
              <div
                className='text-center text-gray-400 col-span-full'
                role='status'
              >
                No clients found.
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
