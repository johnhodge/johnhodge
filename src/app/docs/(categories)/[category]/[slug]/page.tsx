import Doc from '@/app/docs/(categories)/templates/doc';
import { readFileSync } from 'fs';
import matter from 'gray-matter';
import { Metadata } from 'next';
import { join } from 'path';
import { cwd } from 'process';

type PropParams = {
  params: {
    slug: string;
    category: string;
  };
};

const docsDirectoryPath = join(cwd(), 'documentation');

export async function generateMetadata(props: PropParams) {
  const MDXFilePath = join(
    docsDirectoryPath,
    props.params.category.replace('.mdx', ''),
    `${props.params.slug}.mdx`
  );
  const fileContents = readFileSync(join(MDXFilePath));
  const { data } = matter(fileContents);
  const metadata: Metadata = {
    title: data.title,
  };

  return metadata;
}

export default function Page(props: PropParams) {
  const MDXFilePath = join(
    docsDirectoryPath,
    props.params.category.replace('.mdx', ''),
    `${props.params.slug}.mdx`
  );
  return (
    <Doc
      params={props.params}
      docsDirectoryPath={docsDirectoryPath}
      MDXFilePath={MDXFilePath}
    />
  );
}
