import Image from 'next/image'
import React from 'react'

function HeroSection() {
    return (
        <div className='h-full w-100 px-4 py-16 bg-blue-500 flex flex-col md:flex-row flex-wrap align-middle md:justify-start'>
            <div
                className='mx-auto order-1 md:order-2 my-4 w-1/3'>
                <Image src='/Icons/hero.png' alt="hero-image" height={1080} width={1080} className='w-auto' />
            </div>
            <div className='md:my-24 mx-auto md:w-1/3 justify-center md:order-1 order-2 text-center md:text-start'>
                <h2 className='text-white font-semibold text-5xl md:text-6xl '>IT and Software Development</h2>
                <p className='mb-8 mt-4 text-white text-2xl tracking-wide'>Crafting Exceptional Software Solutions for Your Business Success.</p>
                <a href="#"
                    className='py-4 px-8 rounded-md bg-gray-800 hover:bg-gray-950 text-white 
                uppercase font-semibold'>
                    GET STARTED
                </a>
            </div>
        </div>
    )
}

export default HeroSection