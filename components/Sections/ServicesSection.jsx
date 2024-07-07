import React from 'react';
import Card from '../Utils/Card';
import Image from 'next/image';
import servicesData from '../../data/services.json';
import Link from 'next/link';

function ServicesSection() {
    return (
        <div className='bg-blue-500 p-10' id="services-section">
            {/* <h3 className='text-white text-center md:text-5xl text-4xl font-semibold font-sans my-2'>Services</h3> */}
            <Card>
                {
                    servicesData.map((service, idx) => (
                        <div className='text-center md:justify-stretch md:w-1/4 
                        bg-gray-200 rounded my-3 mr-1 hover:bg-gray-800 hover:text-white hover:scale-105 hover:rounded hover:shadow-md transition-all duration-500 px-4 py-8 group' key={idx}>
                            <div className="w-1/2 mx-auto">
                                <Image src={service.img} width={1080} height={1080} alt='service' className='w-full' />
                            </div>
                            <h4 className='my-2 text-3xl'>{service.name}</h4>
                            <p>{service.description}</p>
                            <div className="my-6"></div>
                            <Link href={service.href} className='py-4 px-8 rounded-md bg-gray-800 group-hover:bg-white group-hover:text-gray-800 text-white 
                uppercase font-semibold'>Explore</Link>
                        </div>
                    ))
                }
            </Card>
        </div>
    )
}

export default ServicesSection