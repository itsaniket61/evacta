import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'DMCA Disclaimer - Evacta',
  description:
    "Read Evacta's DMCA Disclaimer. Learn about our policy on copyright infringement and how to contact us if you believe your content has been used without permission.",
  keywords:
    'Evacta DMCA, copyright infringement, intellectual property rights, DMCA process, Evacta contact',
  author: 'Evacta',
};

function DisclaimerPage() {
  return (
    <div className='container py-8 px-4 mx-auto min-h-screen'>
      <h2 className='text-4xl font-semibold py-4'>DMCA Disclaimer</h2>
      <p className='text-lg py-2'>
        At <strong>Evacta</strong>, we respect the intellectual property rights
        of others and expect our users to do the same. If we have inadvertently
        added content that belongs to you or your organization, we sincerely
        apologize for the oversight and assure you that this will not be
        repeated in the future.
      </p>
      <p className='text-lg py-2'>
        If you are the rightful owner of any content used on our website and
        believe it has been used without your permission, please contact us
        immediately. Kindly provide the following information in your email:
      </p>
      <ul className='list-disc list-inside py-2'>
        <li>Your Name</li>
        <li>Organization Name</li>
        <li>Contact Details</li>
        <li>URL of the allegedly infringing content</li>
        <li>Proof of Copyright (URL or Legal Document)</li>
      </ul>
      <p className='text-lg py-2'>
        Please send this information to:{' '}
        <Link href='mailto:info@evacta.com' className='text-blue-400'>
          info@evacta.com
        </Link>
      </p>
      <p className='text-lg py-2'>
        We assure you that we will take prompt action to remove the infringing
        content within 48 hours of receiving your notice and verifying your
        claim.
      </p>
      <h3 className='text-3xl font-semibold py-4'>Contact Information</h3>
      <p className='text-lg py-2'>
        If you have any queries regarding the DMCA process, please feel free to
        contact us at:
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

export default DisclaimerPage;
