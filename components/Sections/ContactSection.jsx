import Image from 'next/image'
import React from 'react'
import Card from '../Utils/Card'
import coreValues from '../../data/core-values.json';

function ContactSection() {
    return (
        <div
            className='bg-blue-500'
        >
            <div className='h-full w-100 px-4 py-8 bg-blue-500 flex flex-col md:flex-row flex-wrap align-middle md:justify-start'>
                <div className='md:my-24 mx-auto md:w-2/3 justify-center md:order-1 order-2 text-center md:text-start'>
                    <h2 className='text-white font-semibold text-4xl md:text-5xl '>Connect with Evacta</h2>
                    <p className='mb-8 mt-4 text-white text-2xl tracking-wide'>{`Let's`} Build Something Incredible Together.</p>
                    <Card>
                        <input className='h-full w-full text-xl outline-none' type="email" name="email" id="email" placeholder='Enter your email address....'/>
                    </Card>
                    <button href="#"
                            className='mt-2 py-4 px-8 rounded-md bg-gray-800 hover:bg-gray-950 text-white 
                uppercase font-semibold'>
                            CONNECT
                        </button>
                </div>
                <div
                    className='mx-auto order-1 md:order-2 my-4 w-1/3'>
                    <Image src='/Icons/about/email.png' alt="hero-image" height={1080} width={1080} className='w-auto' />
                </div>
            </div>
        </div>
    )
}

export default ContactSection;