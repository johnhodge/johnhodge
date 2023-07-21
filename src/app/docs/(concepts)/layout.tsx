import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { TOC2, TOC3, H2, H3 } from '@/app/docs/components/body';
import { cwd } from 'process';
import { ReactNode } from 'react';
import util from 'util';
import { headers } from 'next/headers';
import { join } from 'path';
import { readFileSync } from 'fs';
import matter from 'gray-matter';

const execFile = util.promisify(require('node:child_process').execFile);
export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { stdout } = await execFile('src/utils/git-branch.sh');
  const branch = await stdout;

  const postsDirectory = 'documentation';
  const headersList = headers();
  const realSlug = headersList
    .get('referer')
    ?.split('/')
    .slice(4)
    .join('/')
    .replace(/\.mdx$/, '');
  console.log(realSlug);
  const fullPath = join(cwd(), postsDirectory, `${realSlug}.mdx`);
  const fileContents = readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);
  {
    return (
      <section className='mx-2 border-b border-b-slate-800'>
        <article className='grid grid-cols-12 grid-rows-1 py-16 gap-6'>
          <aside className='hidden md:block col-span-3'>
            <div className='sticky top-32'>
              <p className='pb-4 text-xl font-black'>Concepts</p>
              <ul className='max-h-[calc(75dvh-110px)] overflow-y-auto prose'>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
                <li>hey there</li>
              </ul>
              <div className='pt-4 border-t bg-gray-0 border-t-gray-200 flex flex-col items-start justify-center'>
                <p>Written by: {data.author.name}</p>
                <Link
                  className='py-2 flex items-center gap-1'
                  title='Edit on GitHub'
                  target='_blank'
                  href={`https://github.com/johnhodge/johnhodge/blob/${
                    process.env.VERCEL_ENV == 'production' ? 'main' : branch
                  }/${fullPath.replace(/.*\/johnhodge\//, '')}`}>
                  <svg
                    className='inline-block'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='https://www.w3.org/2000/svg'>
                    <g clipPath='url(#clip0_195_13624)'>
                      <path
                        className='fill-gray-900'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_195_13624'>
                        <rect width='16' height='16' fill='none' />
                      </clipPath>
                    </defs>
                  </svg>
                  Edit on GitHub ↗
                </Link>
              </div>
            </div>
          </aside>
          <section className='col-span-12 prose max-w-none prose-headings:font-black prose-a:no-underline md:col-span-7'>
            <div className='prose prose-zinc prose-headings:font-black'>
              <h1>{data.title}</h1>
              <MDXRemote
                source={content}
                components={{
                  h2: ({ children }: { children?: ReactNode }) => (
                    <H2 header={children} base={realSlug} />
                  ),
                  h3: ({ children }: { children?: ReactNode }) => (
                    <H3 header={children} base={realSlug} />
                  ),
                }}
              />
            </div>
          </section>

          <aside className='hidden md:block col-span-2'>
            <div className='sticky top-32'>
              <p className='pb-4 text-xl font-black'>On this page</p>
              <ul className='max-h-[calc(75dvh-110px)] overflow-y-auto prose prose-headings:font-black'>
                <MDXRemote
                  source={content}
                  components={{
                    p: (props) => <span className='hidden' {...props} />,
                    ol: (props) => <span className='hidden' {...props} />,
                    ul: (props) => <span className='hidden' {...props} />,
                    pre: (props) => <span className='hidden' {...props} />,
                    h2: ({ children }: { children?: ReactNode }) => (
                      <TOC2 header={children} base={realSlug} />
                    ),
                    h3: ({ children }: { children?: ReactNode }) => (
                      <TOC3 header={children} base={realSlug} />
                    ),
                  }}
                />
              </ul>
            </div>
          </aside>
        </article>
      </section>
    );
  }
}
