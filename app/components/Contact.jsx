import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Send, Users, MessageSquare } from 'lucide-react';
import { createData } from '../utils/getData';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const res = await createData('Contact', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('Error sending message.');
    }
  };

  return (
    <section
      id='contact'
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
          <Mail size={150} className='text-white opacity-90 drop-shadow-lg' />
        </motion.div>

        {/* Form Content */}
        <div className='w-full md:w-2/3'>
          <motion.h2
            className='text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 tracking-tight text-white text-left'
            variants={textVariants}
          >
            Get in Touch
          </motion.h2>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-4 md:gap-6'
          >
            <motion.div className='relative' variants={textVariants}>
              <input
                type='text'
                placeholder='Your Name'
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className='w-full bg-black border border-white/20 text-white p-3 pl-10 rounded-lg focus:outline-none focus:border-white/50 transition-all text-sm sm:text-base peer'
                required
              />
              <span className='absolute left-3 top-1/2 -translate-y-1/2 text-white/50 peer-focus:text-white transition-colors'>
                <Users size={16} />
              </span>
            </motion.div>
            <motion.div className='relative' variants={textVariants}>
              <input
                type='email'
                placeholder='Your Email'
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className='w-full bg-black border border-white/20 text-white p-3 pl-10 rounded-lg focus:outline-none focus:border-white/50 transition-all text-sm sm:text-base peer'
                required
              />
              <span className='absolute left-3 top-1/2 -translate-y-1/2 text-white/50 peer-focus:text-white transition-colors'>
                <Mail size={16} />
              </span>
            </motion.div>
            <motion.div className='relative' variants={textVariants}>
              <textarea
                placeholder='Your Message'
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className='w-full bg-black border border-white/20 text-white p-3 pl-10 rounded-lg min-h-[120px] focus:outline-none focus:border-white/50 transition-all text-sm sm:text-base peer'
                required
              />
              <span className='absolute left-3 top-4 text-white/50 peer-focus:text-white transition-colors'>
                <MessageSquare size={16} />
              </span>
            </motion.div>
            <motion.button
              type='submit'
              className='bg-white text-black px-6 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 w-fit'
              variants={textVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={16} />
              Send Message
            </motion.button>
          </form>
          {status && (
            <motion.p
              className='mt-4 text-sm sm:text-base text-gray-400'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {status}
            </motion.p>
          )}
        </div>
      </motion.div>
    </section>
  );
}
