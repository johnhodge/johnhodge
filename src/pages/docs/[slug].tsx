import { getPostBySlug, getAllPosts } from '@/utils/api';
import DocLayout from '../components/layout';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
// import { MDXProvider } from '@next/mdx';
import { Heading } from '@/pages/components/mdComponent';

// type Author = {
//   name: string;
//   picture: string;
// };
// type PostType = {
//   slug: string;
//   title: string;
//   date: string;
//   coverImage: string;
//   author: Author;
//   excerpt: string;
//   ogImage: {
//     url: string;
//   };
//   content: string;
// };
// type Props = {
//   source: PostType;
// morePosts: PostType[];
// preview?: boolean;
// };
// const components = {
//   h1: Heading.H1,
//   h2: Heading.H2,
//   h3: Heading.H3
//   p: Text,
//   code: Pre,
//   inlineCode: Code,
// };
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

// export async function getStaticProps({ params }: Params) {
//   const post = getPostBySlug(params.slug, [
//     'title',
//     'date',
//     'slug',
//     'author',
//     'content',
//     'ogImage',
//     'coverImage',
//   ]);

//   return {
//     props: {
//       post: {
//         ...post,
//       },
//     },
//   };
// }

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

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
