import React from 'react'
import posts from '../../data/posts.json';
import Link from 'next/link';

export const metadata = {
  title: 'Blog - The blog from Evacta',
  description: 'Blog - The blog from Evacta',
};

function Blog() {
  return (
    <>
      <div
        style={{ backgroundImage: "url('/images/Banners/banner5.png')" }}
        className='relative h-72 bg-cover bg-center'
      >
        <div className='absolute inset-0 '></div>
        <div className='p-4 relative text-center w-full flex flex-col justify-center items-center h-full'>
          <h1 className='text-white text-4xl font-extrabold'>Evacta Read</h1>
          <h3 className='mt-2 text-gray-50'>
          </h3>
        </div>
      </div>
      <section className='text-gray-600 body-font overflow-hidden'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='-my-8 divide-y-2 divide-gray-100'>
            {Object.keys(posts).map((postKey, idx) => {
              const post = posts[postKey];
              return (
                <div className='py-8 flex flex-wrap md:flex-nowrap' key={idx}>
                  <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
                    <span className='font-semibold title-font text-gray-700'>
                      {post.category}
                    </span>
                    <span className='mt-1 text-gray-500 text-sm'>
                      {post.author.name}
                    </span>
                  </div>
                  <div className='md:flex-grow'>
                    <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
                      {post.title}
                    </h2>
                    <p className='leading-relaxed'>{post.description}</p>
                    <Link
                      className='text-blue-500 inline-flex items-center mt-4'
                      href={'./blog/' + postKey}
                    >
                      Learn More
                      <svg
                        className='w-4 h-4 ml-2'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <path d='M5 12h14'></path>
                        <path d='M12 5l7 7-7 7'></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog