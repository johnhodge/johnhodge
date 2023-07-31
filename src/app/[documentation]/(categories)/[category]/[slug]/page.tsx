import Doc from '@/app/[documentation]/(categories)/templates/doc';
import { DynamicRoute, PostData } from '@/app/types';
import { GetDataContent } from '@/utils/mdx';
import { Metadata } from 'next';
import { join } from 'path';
import { cwd } from 'process';

const rootDirectory = join(cwd(), 'documentation');

export async function generateMetadata(props: DynamicRoute) {
  const rootDocsDirectory = join(rootDirectory, props.params.documentation);
  const MDXFilePath: string = join(
    rootDocsDirectory,
    props.params.category ?? ''.replace('.mdx', ''),
    `${props.params.slug}.mdx`
  );
  const { data } = GetDataContent(join(MDXFilePath));
  const metadata: Metadata = {
    title: data.title,
  };
  return metadata;
}

export default function Page(props: DynamicRoute) {
  const rootDocsDirectory = join(rootDirectory, props.params.documentation);
  const MDXFilePath: string = join(
    rootDocsDirectory,
    props.params.category ?? ''.replace('.mdx', ''),
    `${props.params.slug}.mdx`
  );
  const { data } = GetDataContent(join(MDXFilePath));
  const post: PostData = {
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    icon: data.icon,
    author: {
      firstName: data.author.firstName,
      lastName: data.author.lastName,
    },
    file: {
      rootDocsDirectory: rootDocsDirectory,
      containingDirectory: join(rootDocsDirectory, props.params.category ?? ''),
      fileName: `${props.params.slug}.mdx`,
      MDXFilePath: MDXFilePath,
    },
  };
  return <Doc route={props} post={post} />;
}
