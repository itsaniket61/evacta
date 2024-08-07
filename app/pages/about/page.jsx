import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'About Us - Evacta',
  description:
    'Learn about Evacta, your premier partner in cutting-edge technology solutions. Discover our innovative software services designed to enhance efficiency and drive business growth.',
  keywords:
    'Evacta, technology solutions, software services, business growth, digital transformation',
  author: 'Evacta',
};

function AboutPage() {
  return (
    <div className='container py-8 px-4 mx-auto min-h-screen'>
      <h2 className='text-4xl font-semibold py-4'>About Us</h2>
      <p className='text-lg py-2'>
        Welcome to <strong>Evacta</strong>, your premier partner in cutting-edge
        technology solutions. At Evacta, we specialize in delivering innovative
        software services that elevate your business, enhance efficiency, and
        drive growth. Our comprehensive range of solutions is tailored to meet
        the evolving needs of modern enterprises.
      </p>
      <p className='text-lg py-2'>
        With a dedicated team of experts, Evacta is committed to providing
        exceptional service and support. We leverage the latest technologies to
        develop customized solutions that address your unique business
        challenges and help you achieve digital excellence.
      </p>
      <p className='text-lg py-2'>Our services include:</p>
      <ul className='list-disc list-inside py-2'>
        <li>Software Development</li>
        <li>Mobile Application Development</li>
        <li>Web Development</li>
        <li>Cloud Solutions</li>
        <li>Data Analytics</li>
        <li>IT Consulting</li>
      </ul>
      <p className='text-lg py-2'>
        At Evacta, we believe in forging lasting partnerships with our clients.
        We work closely with you to understand your goals and deliver solutions
        that exceed your expectations. Our mission is to empower your business
        with the tools and technologies needed to thrive in today&apos;s
        competitive landscape.
      </p>
      <p className='text-lg py-2'>
        Join Evacta on the journey to digital excellence. Contact us today to
        explore how we can transform your business and help you stay ahead of
        the curve.
      </p>
      <h3 className='text-3xl font-semibold py-4'>Contact Information</h3>
      <p className='text-lg py-2'>
        If you have any queries regarding our site, advertisements, or any other
        issues, please feel free to contact us at:
      </p>
      <p className='text-lg py-2'>
        <strong>Email:</strong>{' '}
        <Link href='mailto:mail@evacta.com' className='text-blue-400'>
          mail@evacta.com
        </Link>
      </p>
    </div>
  );
}

export default AboutPage;
