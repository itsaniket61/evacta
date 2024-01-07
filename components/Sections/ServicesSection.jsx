import React from 'react';
import Card from '../Utils/Card';
import Image from 'next/image';
import servicesData from '../../data/services.json';
import Link from 'next/link';

function ServicesSection() {
    return (
        <div className='bg-blue-500 p-10'>
            <h3 className='text-white text-center md:text-5xl text-4xl font-semibold font-sans my-2'>Services</h3>
            <Card>
                {
                    servicesData.map((service, idx) => (
                        <div className='md:text-start text-center md:justify-stretch md:w-1/4 
                        bg-gray-200 rounded my-3 mr-1 hover:bg-yellow-100 hover:scale-105 hover:rounded hover:shadow-md transition-all duration-500 px-4 py-8' key={idx}>
                            <div className="w-1/2 md:mx-0 mx-auto">
                                <Image src={service.img} width={1080} height={1080} alt='service' className='w-full' />
                            </div>
                            <h4 className='my-2 text-3xl'>{service.name}</h4>
                            <p>{service.description}</p>
                            <div className="my-6"></div>
                            <Link href={service.href} className='py-4 px-8 rounded-md bg-gray-800 hover:bg-gray-950 text-white 
                uppercase font-semibold'>Explore</Link>
                        </div>
                    ))
                }
            </Card>
        </div>
    )
}

export default ServicesSection