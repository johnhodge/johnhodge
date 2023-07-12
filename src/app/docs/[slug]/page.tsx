import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { cwd } from 'process';
import Article from '@/app/templates/article';

type Params = {
  params: {
    slug: string;
  };
};
export default function Docs({ params }: Params) {
  const postsDirectory = `${cwd()}/_docs`;
  const realSlug = params.slug.replace(/\.mdx$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return (
    <section className='prose prose-headings:font-black'>
      <MDXRemote source={content} />
    </section>
  );
}
