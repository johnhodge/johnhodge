import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { cwd } from 'process';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { H2, H3, TOC2, TOC3 } from '@/app/docs/components/body';
import util from 'util';

const postsDirectory = `${cwd()}/documentation/media`;
const execFile = util.promisify(require('node:child_process').execFile);

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

export default async function Docs({ params }: Params) {
  const realSlug = params.slug.replace(/\.mdx$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const { stdout } = await execFile('src/utils/git-branch.sh');
  const branch = await stdout;

  return (
    <></>
    // <section className='col-span-12 prose max-w-none prose-headings:font-black prose-a:no-underline md:col-span-7'>
    //   <div className='prose prose-zinc prose-headings:font-black'>
    //     <h1>{data.title}</h1>
    //     <MDXRemote
    //       source={content}
    //       components={{
    //         h2: ({ children }: { children?: ReactNode }) => (
    //           <H2 header={children} base={realSlug} />
    //         ),
    //         h3: ({ children }: { children?: ReactNode }) => (
    //           <H3 header={children} base={realSlug} />
    //         ),
    //       }}
    //     />
    //   </div>
    // </section>
  );
}
