'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import menuItems from '../../data/navbar.json'
import Image from 'next/image';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='bg-blue-500 text-white px-2 flex flex-wrap'>
      <div id='logo' className='pr-4 font-semibold text-3xl w-1/2 md:w-1/12 p-2'>
        <Link href='/'>
          <Image src='/images/logo.png' height={340} width={1230} alt='evacta logo' className='transition-all duration-300 hover:scale-125' />
        </Link>
      </div>
      <div id='menu' className='md:flex-grow'>
        <div className='md:flex hidden'>
          <ul className='md:flex py-2 '>
            {
              menuItems.map((item, id) => (
                <Link href={item.href} key={id} target={item.newTab ? '_blank' : ''}>
                  <li
                    className='px-4 font-medium'
                  >
                    {item.name}
                  </li>
                </Link>))
            }
          </ul>
        </div>
        <div className='md:hidden flex'>
          <button
            onClick={toggleMobileMenu}
            className='text-white p-2 focus:outline-none focus:bg-blue-600 float-right'
          >
            ☰
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className='md:hidden transition-all duration-300'>
            <ul className='py-2'>
              {
                menuItems.map((item, id) => (
                  <Link href={item.href} key={id} className='w-full' target={item.newTab ? '_blank' : ''}>
                    <li
                      onClick={toggleMobileMenu}
                      className='block px-4 py-2 font-medium'
                    >
                      {item.name}
                    </li>
                  </Link>))
              }

            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
