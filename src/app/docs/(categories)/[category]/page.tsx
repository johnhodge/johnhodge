import { H2, H3 } from '@/app/docs/components/body';
import { readFileSync } from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { join } from 'path';
import { cwd } from 'process';
import { ReactNode } from 'react';

type PropParams = {
  params: {
    category: string;
  };
};

export default function Page(props: PropParams) {
  const realSlug = join(cwd(), 'documentation', props.params.category);
  const fileContents = readFileSync(join(realSlug, `index.mdx`));
  const { data, content } = matter(fileContents);
  return (
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
  );
}
