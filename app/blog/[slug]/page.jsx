import { marked } from 'marked';
import postData from '../../../data/posts.json';
import bannerImgs from '../../../data/banners.json';
import SidebarAd from '@/components/Ads/SidebarAd';
import Link from 'next/link';

export default function BlogPage({ params }) {
  const postSlug = params['slug'];
  const post = postData[postSlug];
  const getMarkdownText = (markdownText) => {
    const rawMarkup = marked(markdownText, { sanitize: true });
    return { __html: rawMarkup };
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url('${
            bannerImgs[Math.floor(Math.random() * bannerImgs.length)]
          }')`,
        }}
        className='relative h-72 bg-cover bg-center'
      >
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <div className='p-4 relative text-center w-full flex flex-col justify-center items-center h-full'>
          <h1 className='text-white text-2xl md:text-4xl font-extrabold'>
            {post.title}
          </h1>
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
          <div>
            <article className='markdown-body shadow-lg min-h-screen p-6'>
              <div dangerouslySetInnerHTML={getMarkdownText(post.content)} />
            </article>

            <div className='p-2'>
              <div class='container px-5 py-24 mx-auto'>
                <div class='flex flex-wrap -m-4'>
                  {Object.keys(postData)
                    .slice(0, 4)
                    .map((postKey, idx) => {
                      if (postKey !== postSlug) {
                        const otherPost = postData[postKey];
                        return (
                          <div class='p-4 lg:w-1/3' key={idx}>
                            <div class=' hover:shadow-lg h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative'>
                              <h2 class='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                                {otherPost.category}
                              </h2>
                              <h1 class='title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3'>
                                {otherPost.title}
                              </h1>
                              <p class='leading-relaxed mb-3'>
                                {otherPost.description}
                              </p>
                              <Link
                                class='text-indigo-500 inline-flex items-center'
                                href={`/blog/${postKey}`}
                              >
                                Learn More
                                <svg
                                  class='w-4 h-4 ml-2'
                                  viewBox='0 0 24 24'
                                  stroke='currentColor'
                                  stroke-width='2'
                                  fill='none'
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                >
                                  <path d='M5 12h14'></path>
                                  <path d='M12 5l7 7-7 7'></path>
                                </svg>
                              </Link>
                            </div>
                          </div>
                        );
                      }
                    })}
                </div>
              </div>
            </div>
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

export async function generateMetadata({params, searchParams}) {
  const slug = params.slug;
  const post = postData[slug];
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords.split(','),
    author: post.author.name
  };
}