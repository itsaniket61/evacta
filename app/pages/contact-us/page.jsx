import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Contact Us - Evacta',
  description:
    'Get in touch with Evacta for any inquiries, support, or business opportunities. Reach out via email, phone, or social media for prompt assistance.',
  keywords:
    'Evacta contact, customer support, business inquiries, technology solutions, Evacta phone, Evacta email',
  author: 'Evacta',
};

function ContactUsPage() {
  return (
    <div className='container py-8 px-4 mx-auto min-h-screen'>
      <h2 className='text-4xl font-semibold py-4'>Contact Us at Evacta</h2>
      <p className='text-lg py-2'>
        We value your feedback and are here to assist you with any inquiries or
        issues you may have. Whether you have questions about our services, need
        support, or want to discuss potential collaborations, we're here to
        help.
      </p>
      <p className='text-lg py-2'>
        For any inquiries regarding our website, advertising, or other issues,
        please reach out to us at:
      </p>
      <p className='text-lg py-2'>
        <strong>Email:</strong>{' '}
        <Link href='mailto:info@evacta.com' className='text-blue-400'>
          info@evacta.com
        </Link>
      </p>
      <p className='text-lg py-2'>
        <strong>Phone:</strong> +1-800-123-4567 (Mon-Fri, 9 AM - 6 PM EST)
      </p>
      <p className='text-lg py-2'>
        <strong>Address:</strong> 123 Evacta Lane, Tech City, Innovate State,
        12345
      </p>
      <h3 className='text-3xl font-semibold py-4'>Customer Support</h3>
      <p className='text-lg py-2'>
        Our dedicated customer support team is available to answer your
        questions and provide assistance. We strive to respond to all inquiries
        within 24 hours.
      </p>
      <h3 className='text-3xl font-semibold py-4'>Business Inquiries</h3>
      <p className='text-lg py-2'>
        For business-related questions or partnership opportunities, please
        contact us at:
        <Link href='mailto:business@evacta.com' className='text-blue-400'>
          {' '}
          business@evacta.com
        </Link>
      </p>
      <h3 className='text-3xl font-semibold py-4'>Follow Us</h3>
      <p className='text-lg py-2'>
        Stay connected with us through our social media channels:
      </p>
      <ul className='list-disc list-inside'>
        <li>
          <Link href='https://facebook.com/evacta' className='text-blue-400'>
            Facebook
          </Link>
        </li>
        <li>
          <Link href='https://twitter.com/evacta' className='text-blue-400'>
            Twitter
          </Link>
        </li>
        <li>
          <Link
            href='https://linkedin.com/company/evacta'
            className='text-blue-400'
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link href='https://instagram.com/evacta' className='text-blue-400'>
            Instagram
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ContactUsPage;
