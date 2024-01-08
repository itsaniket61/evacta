import Image from 'next/image'
import React from 'react'
import Card from '../Utils/Card'
import coreValues from '../../data/core-values.json';

function AboutSection() {
  return (
    <div
        className='bg-blue-500'
    >
        <div className='h-full w-100 px-4 py-8 bg-blue-500 flex flex-col md:flex-row flex-wrap align-middle md:justify-start'>
            <div className='md:my-24 mx-auto md:w-2/3 justify-center md:order-2 order-2 text-center md:text-start'>
                <h2 className='text-white font-semibold text-4xl md:text-5xl '>About Us</h2>
                <p className='mb-8 mt-4 text-white text-2xl tracking-wide'>Welcome to Evacta, a pioneering force in the realm of digital innovation. Established in 2024, Evacta is a fresh venture founded with a singular purpose — to redefine the landscape of digital solutions and provide businesses with the tools they need to thrive in a dynamic world.</p>
                <Card>
                {
                    coreValues.map((value, idx) => (
                        <div className='md:text-start text-center md:justify-stretch md:w-1/4 
                        bg-gray-200 rounded my-3 mr-1 hover:bg-yellow-100 hover:scale-105 hover:rounded hover:shadow-md transition-all duration-500 px-4 py-8' key={idx}>
                            <div className="w-1/2 md:mx-0 mx-auto">
                                <Image src={value.img} width={1080} height={1080} alt='service' className='w-full' />
                            </div>
                            <h4 className='my-2 text-3xl'>{value.name}</h4>
                            <p>{value.description}</p>
                            <div className="my-6"></div>
                        </div>
                    ))
                }
            </Card>
            </div>
            <div
                className='mx-auto order-1 md:order-1 my-4 w-1/3'>
                <Image src='/Icons/about/about.png' alt="hero-image" height={1080} width={1080} className='w-auto' />
            </div>
        </div>
    </div>
  )
}

export default AboutSection