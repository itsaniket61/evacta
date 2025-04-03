import { motion } from 'framer-motion';
import { Box } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getData } from '../utils/getData';

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        when: 'beforeChildren'
      } 
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
    active: {
      scale: 1.02,
      boxShadow: '0 5px 15px rgba(255, 255, 255, 0.15)',
    }
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

  const [productsData, setProductsData] = useState([]);
  useEffect(()=>{
    getData('Products')
      .then((data) => {
        setProductsData(data);
      })
      .catch((error) => {
        console.error('Error fetching products data:', error);
      });
  },[])



  return (
    <section
      id='products'
      className='min-h-screen py-16 md:py-20 px-4 bg-black relative overflow-hidden flex items-center'
      aria-label="Our Products Section"
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
            aria-hidden="true"
          >
            <Box size={150} className='text-white opacity-90 drop-shadow-lg' />
          </motion.div>

          <div className='w-full md:w-2/3 text-left'>
            <motion.h2
              className='text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 tracking-tight text-white'
              variants={textVariants}
            >
              Our Products
            </motion.h2>
            <motion.p
              className='text-base md:text-lg text-gray-400 leading-relaxed'
              variants={textVariants}
            >
              Discover our innovative solutions designed to empower your business.
            </motion.p>
          </div>
        </motion.div>

        {/* Product Cards */}
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          role="list"
        >
          {productsData.map((product) => (
            <motion.div
              key={product.id}
              className='bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-white/30 transition-all min-h-[300px] flex flex-col'
              variants={cardVariants}
              whileHover='hover'
              whileTap='active'
              onClick={() => setActiveProduct(product.id)}
              animate={activeProduct === product.id ? 'active' : 'visible'}
              role="listitem"
            >
              <h3 className='text-xl md:text-2xl font-semibold mb-4 text-white'>
                {product.name}
              </h3>
              <p className='text-sm md:text-base text-gray-400 mb-4 flex-grow'>
                {product.description}
              </p>
              <a
                href={product.link}
                className='mt-auto bg-white text-black px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors inline-block text-center focus:outline-none focus:ring-2 focus:ring-white'
                onClick={(e) => e.stopPropagation()}
                aria-label={`Learn more about ${product.name}`}
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}