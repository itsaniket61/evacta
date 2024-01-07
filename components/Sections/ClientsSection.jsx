import React from 'react'
import Card from '../Utils/Card'
import Image from 'next/image'
import Link from 'next/link'
import clients from '../../data/clients.json'

function ClientsSection() {
    return (
        <div className='bg-blue-500 p-10'>
            <h3 className='text-white text-center md:text-5xl text-4xl font-semibold font-sans my-2'>Our Clients</h3>
            <Card>
                {
                    clients.map((client, idx) => (
                        <div className='md:text-start text-center md:justify-stretch md:w-1/4 
                        bg-gray-200 rounded my-3 mr-1 hover:bg-yellow-100 hover:scale-105 hover:rounded hover:shadow-md transition-all duration-500 px-4 py-8' key={idx}>
                            <div className="w-1/2 md:mx-0 mx-auto">
                                <Image src={client.img} width={1080} height={1080} alt='service' className='w-full' />
                            </div>
                            <h4 className='my-2 text-3xl'>{client.name}</h4>
                            <p>{client.description}</p>
                            <div className="my-6"></div>
                            <Link href={client.href} className='py-4 px-8 rounded-md bg-gray-800 hover:bg-gray-950 text-white 
                uppercase font-semibold' target='_blank'>View</Link>
                        </div>
                    ))
                }
            </Card>
        </div>
    )
}

export default ClientsSection