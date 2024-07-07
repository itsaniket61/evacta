import React from 'react';
import Card from '../Utils/Card';
import Image from 'next/image';
import Link from 'next/link';
import posts from '../../data/posts.json';

function PostsSection() {
  const MAX_DESCRIPTION_LENGTH = 150; // Max length for description before truncation

  return (
    <div className='bg-blue-500 p-10' id='blog-section'>
      {/* <h3 className='text-white text-center md:text-5xl text-4xl font-semibold font-sans my-2'>
        Blog Posts
      </h3> */}
      <Card className='bg-gray-800'>
        {Object.keys(posts)
          .slice(0, 5) // Limit to only 5 posts
          .map((post, idx) => (
            <div
              className='group text-white text-center md:justify-stretch md:w-1/4 
                          bg-gray-800 rounded my-3 mr-1 hover:bg-gray-950 hover:scale-105 hover:rounded hover:shadow-md transition-all duration-500 px-4 py-8'
              key={idx}
            >
              <div className='w-1/2 mx-auto'>
                <Image
                  src='/images/logo.png'
                  width={100}
                  height={100}
                  alt='post'
                  className='w-full'
                />
              </div>
              <h4 className='my-2 text-3xl'>{posts[post].title}</h4>
              <p className='truncate'>
                {truncateDescription(posts[post].description)}
              </p>
              <div className='my-6'></div>
              <Link
                href={`/blog/` + post}
                className='py-4 px-8 rounded-md bg-white hover:bg-white text-gray-900 
                  uppercase font-semibold'
              >
                Read More
              </Link>
            </div>
          ))}
      </Card>
    </div>
  );

  function truncateDescription(description) {
    if (description?.length > MAX_DESCRIPTION_LENGTH) {
      return description.substring(0, MAX_DESCRIPTION_LENGTH) + '...';
    }
    return description;
  }
}

export default PostsSection;
