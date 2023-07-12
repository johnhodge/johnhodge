import { getPostBySlug, getAllPosts } from '@/utils/api';
import DocLayout from '../components/layout';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { Heading } from '@/pages/components/mdComponent';

const components = { Heading };
export default function Post({ source }: any) {
  console.log(source.compiledSource);
  return (
    <DocLayout>
      <div className='wrapper'>
        <MDXRemote {...source} components={components} />
      </div>
    </DocLayout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};
export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const source = post.content;
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug', 'title', 'section']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
