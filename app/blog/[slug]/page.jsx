import { marked } from 'marked';
import postData from '../../../data/posts.json';
import Head from 'next/head';
import SidebarAd from '@/components/Ads/SidebarAd';
import Link from 'next/link';
import FooterSection from '@/components/Sections/FooterSection';

export default function BlogPage({ params }) {
  const postSlug = params['slug'];
  const post = postData[postSlug];
    const getMarkdownText = (markdownText) => {
      const rawMarkup = marked(markdownText, { sanitize: true });
      return { __html: rawMarkup };
    };

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name='description' content={post.description} />
        <meta property='og:title' content={post.title} />
        <meta property='og:description' content={post.description} />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content={`https://evacta.com/blog/${postSlug}`}
        />
        <meta property='og:image' content={post.image} />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content={`https://evacta.com/blog/${postSlug}`}
        />
        <meta property='twitter:title' content={post.title} />
        <meta property='twitter:description' content={post.description} />
        <meta name='keywords' content={post.keywords} />
        <title>{post.title}</title>
      </Head>
      <div
        style={{ backgroundImage: "url('/images/Blog Banner.png')" }}
        className='relative h-72 bg-cover bg-center'
      >
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <div className='p-4 relative text-center w-full flex flex-col justify-center items-center h-full'>
          <h1 className='text-white text-4xl font-extrabold'>{post.title}</h1>
          <h3 className='mt-2 text-gray-50'>
            <Link href={post.author.href}>
              <i>{post.author.name}</i>
            </Link>
          </h3>
        </div>
      </div>

      <div className='flex flex-wrap lg:flex-nowrap'>
        <div className='flex-grow'>
          <div className='sticky top-0'>
            <SidebarAd adId='sidebar320' />
          </div>
        </div>
        <div className='flex-grow w-full'>
          <div className='shadow-lg min-h-screen p-6'>
            <article className='markdown-body'>
              <div dangerouslySetInnerHTML={getMarkdownText(post.content)} />
            </article>
          </div>
        </div>
        <div className='flex-grow'>
          <div className='sticky top-0'>
            <SidebarAd adId='sidebar320' />
          </div>
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(postData).map((slug) => ({
    slug,
  }));
}
