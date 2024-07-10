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
        support, or want to discuss potential collaborations, we&apos;re here to
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
    </div>
  );
}

export default ContactUsPage;
