import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { cwd } from 'process';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

import H2, { H3, TOC2, TOC3 } from '../components/body';
const postsDirectory = `${cwd()}/documentation`;

// const components = {
//   h1: 'h1',
//   h2: 'h1',
//   h3: 'h1',
// };

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const realSlug = params.slug.replace(/\.mdx$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    title: data.title,
  };
}

export default function Docs({ params }: Params) {
  const realSlug = params.slug.replace(/\.mdx$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return (
    <section className='mx-2 border-b border-b-slate-800'>
      <article className='grid grid-cols-12 grid-rows-1 py-16 gap-4'>
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
            <Link
              href={`https://github.com/johnhodge/johnhodge/documentation/zello-world.mdx.tsx`}
              className='pt-4 border-t bg-gray-0 block border-t-slate-200'>
              Edit on GitHub
            </Link>
          </div>
        </aside>
        <section className='col-span-12 prose max-w-none prose-headings:font-black prose-a:no-underline md:col-span-7'>
          <div className='prose prose-zinc prose-headings:font-black'>
            <h1>{data.title}</h1>
            <p>Last updated by: {data.author.name}</p>
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
