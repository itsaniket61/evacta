import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Privacy Policy - Evacta',
  description:
    "Read Evacta's Privacy Policy to understand how we collect, use, and protect your information. Learn about our commitment to your privacy and data security.",
  keywords:
    'Evacta privacy policy, data protection, information security, user privacy, data collection',
  author: 'Evacta',
};

function PrivacyPolicyPage() {
  return (
    <div className='px-4 py-8 container mx-auto'>
      <h1 className='text-4xl font-semibold py-4'>Privacy Policy for Evacta</h1>
      <p>
        At Evacta, accessible from
        <Link href='https://evacta.com'>
          {' '}<span className='text-blue-400'>https://evacta.com</span>
        </Link>
        , protecting the privacy of our visitors is one of our main priorities.
        This Privacy Policy document outlines the types of information collected
        and recorded by Evacta and how we utilize it.
      </p>
      <p>
        If you have additional questions or require more information about our
        Privacy Policy, do not hesitate to contact us via email at{' '}
        <b>info@evacta.com</b>
      </p>

      <h2 className='text-3xl font-semibold py-4'>Log Files</h2>
      <p>
        Evacta follows a standard procedure for using log files. These files log
        visitors when they visit websites, a common practice among hosting
        companies as part of hosting services' analytics. The information
        collected by log files includes internet protocol (IP) addresses,
        browser type, Internet Service Provider (ISP), date and time stamp,
        referring/exit pages, and possibly the number of clicks. This data is
        not linked to any personally identifiable information. The purpose of
        collecting this information is for analyzing trends, administering the
        site, tracking users' movement on the website, and gathering demographic
        information.
      </p>

      <h2 className='text-3xl font-semibold py-4'>Cookies and Web Beacons</h2>
      <p>
        Like any other website, Evacta uses 'cookies'. These cookies store
        information, including visitors' preferences and the pages on the
        website that the visitor accessed or visited. The information is used to
        optimize the users' experience by customizing our web page content based
        on visitors' browser type and/or other information.
      </p>

      <h2 className='text-3xl font-semibold py-4'>
        Google DoubleClick DART Cookie
      </h2>
      <p>
        Google is one of the third-party vendors on our site. It also uses
        cookies, known as DART cookies, to serve ads to our site visitors based
        upon their visit to www.website.com and other sites on the internet.
        However, visitors may choose to decline the use of DART cookies by
        visiting the Google ad and content network Privacy Policy at the
        following URL –
        <Link
          href='https://policies.google.com/technologies/ads'
          className='text-blue-400'
        >
          https://policies.google.com/technologies/ads
        </Link>
        .
      </p>

      <h2 className='text-3xl font-semibold py-4'>
        Privacy Policies of Advertising Partners
      </h2>
      <p>
        You may consult this list to find the Privacy Policy for each of the
        advertising partners of Evacta.
      </p>
      <p>
        Third-party ad servers or ad networks use technologies like cookies,
        JavaScript, or Web Beacons in their advertisements and links that appear
        on Evacta, which are sent directly to users' browsers. They
        automatically receive your IP address when this occurs. These
        technologies are used to measure the effectiveness of their advertising
        campaigns and/or to personalize the advertising content that you see on
        websites that you visit.
      </p>
      <p>
        Note that Evacta has no access to or control over these cookies that are
        used by third-party advertisers.
      </p>

      <h2 className='text-3xl font-semibold py-4'>
        Third-Party Privacy Policies
      </h2>
      <p>
        Evacta's Privacy Policy does not apply to other advertisers or websites.
        Thus, we are advising you to consult the respective Privacy Policies of
        these third-party ad servers for more detailed information. Their
        policies may include their practices and instructions about how to opt
        out of certain options. You can find a complete list of these Privacy
        Policies and their links here: Privacy Policy Links.
      </p>
      <p>
        You can choose to disable cookies through your individual browser
        options. To know more detailed information about cookie management with
        specific web browsers, it can be found at the browsers' respective
        websites. What Are Cookies?
      </p>

      <h2 className='text-3xl font-semibold py-4'>Children's Information</h2>
      <p>
        Protecting children while using the internet is another part of our
        priority. We encourage parents and guardians to observe, participate in,
        and/or monitor and guide their online activity.
      </p>
      <p>
        Evacta does not knowingly collect any Personal Identifiable Information
        from children under the age of 13. If you think that your child provided
        this kind of information on our website, we strongly encourage you to
        contact us immediately. We will do our best to promptly remove such
        information from our records.
      </p>

      <h2 className='text-3xl font-semibold py-4'>
        Online Privacy Policy Only
      </h2>
      <p>
        This Privacy Policy applies solely to our online activities and is valid
        for visitors to our website with regards to the information that they
        shared and/or collect in Evacta. This policy does not apply to any
        information collected offline or via channels other than this website.
      </p>

      <h2 className='text-3xl font-semibold py-4'>Consent</h2>
      <p>
        By using our website, you hereby consent to our Privacy Policy and agree
        to its Terms and Conditions.
      </p>
    </div>
  );
}

export default PrivacyPolicyPage;
