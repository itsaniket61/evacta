import Image from 'next/image';
import React from 'react'
import adData from '../../data/ads.json'
import Link from 'next/link';

const SidebarAd = ({ adId }) => {
    const {title, img, href} = adData[adId];
  return (
    <div className=''>
      <Link href={href} target='_blank' rel='noopener noreferrer' title={title}>
        <div
          className='p-4 mb-6 text-center transition-transform transform hover:scale-105'
          style={{ width: '300px' }}
        >
          <div className='rounded-lg overflow-hidden'>
            <div className='bg-yellow-300 px-4 w-full text-start font-mediumfo'>Ad</div>
            <Image
              src={img}
              alt='Evacta Ad'
              width={300}
              height={250}
              className=''
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SidebarAd