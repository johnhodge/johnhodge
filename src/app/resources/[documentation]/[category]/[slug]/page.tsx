import Doc from '@/app/resources/[documentation]/templates/doc';
import { DynamicRoute, PostFileData } from '@/app/types';
import { GetMdxDataContent } from '@/utils/mdx';
import { GetMetadata } from '@/utils/sitemeta';
import { Metadata } from 'next';
import { join } from 'path';
import { cwd } from 'process';

const rootDirectory = 'resources';
const rootDirectoryPath = join(cwd(), rootDirectory);
export async function generateStaticParams() {
  return [
    {
      documentation: 'case-studies',
      category: 'technical',
      slug: 'app-store-data',
    },
  ];
}

export async function generateMetadata(props: DynamicRoute) {
  const rootDocsDirectory = join(rootDirectoryPath, props.params.documentation);
  const MDXFilePath: string = join(
    rootDocsDirectory,
    props.params.category ?? ''.replace('.mdx', ''),
    `${props.params.slug}.mdx`
  );
  const { data } = GetMdxDataContent(join(MDXFilePath));
  const metadata: Metadata = GetMetadata({
    pageName: data.title,
    description: data.excerpt,
    path: join(
      rootDirectory,
      props.params.documentation,
      props.params.category ?? '',
      props.params.slug ?? ''
    ),
    index: false,
    follow: false,
    cache: false,
  });
  return metadata;
}

export default function Page(props: DynamicRoute) {
  const rootDocsDirectory = join(rootDirectoryPath, props.params.documentation);
  const MDXFilePath: string = join(
    rootDocsDirectory,
    props.params.category ?? ''.replace('.mdx', ''),
    `${props.params.slug}.mdx`
  );
  const { data } = GetMdxDataContent(join(MDXFilePath));
  const post: PostFileData = {
    title: data.title,
    subhead: data.subhead,
    excerpt: data.excerpt,
    date: data.date,
    icon: data.icon,
    author: {
      firstName: data.author.firstName,
      lastName: data.author.lastName,
    },
    file: {
      rootDirectory: rootDirectory,
      rootDocsDirectory: rootDocsDirectory,
      containingDirectory: join(rootDocsDirectory, props.params.category ?? ''),
      fileName: `${props.params.slug}.mdx`,
      MDXFilePath: MDXFilePath,
    },
  };
  return <Doc route={props} post={post} />;
}
