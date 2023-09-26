import Doc from '@/app/resources/[category]/templates/doc';
import { DynamicRouteData, PostFileData } from '@/app/types';
import { GetMdxData } from '@/utils/mdx';
import { GetMetadata } from '@/utils/sitemeta';
import { readdirSync } from 'fs';
import { Metadata } from 'next';
import { join } from 'path';
import { cwd } from 'process';

const rootDirectory = 'resources';
const rootDirectoryPath = join(cwd(), rootDirectory);
const allRoutes: DynamicRouteData[] = [];
const categoryRoutes = readdirSync(join(rootDirectoryPath)).filter(
  (category) => category != '_index.mdx'
);

export function generateStaticParams() {
  categoryRoutes.forEach((categoryRoute) =>
    readdirSync(join(rootDirectoryPath, categoryRoute))
      .filter((docName) => docName != '_index.mdx')
      .forEach((tagRoute) =>
        readdirSync(join(rootDirectoryPath, categoryRoute, tagRoute))
          .filter((tagName) => tagName != '_index.mdx')
          .forEach((slugRoute) =>
            allRoutes.push({
              category: categoryRoute,
              tag: tagRoute,
              slug: slugRoute.replace('.mdx', ''),
            })
          )
      )
  );
  return allRoutes;
}

export async function generateMetadata({
  params,
}: {
  params: DynamicRouteData;
}) {
  const { category, tag, slug } = params;
  const rootDocsDirectory = join(rootDirectoryPath, category);
  const MDXFilePath: string = join(
    rootDocsDirectory,
    tag ?? ''.replace('.mdx', ''),
    `${slug}.mdx`
  );
  const data = GetMdxData(join(MDXFilePath));
  const metadata: Metadata = GetMetadata({
    pageName: data.title,
    description: data.excerpt,
    path: join(rootDocsDirectory, tag ?? '', slug ?? ''),
    index: false,
    follow: false,
    cache: false,
  });
  return metadata;
}

export default function Page({ params }: { params: DynamicRouteData }) {
  const { category, tag, slug } = params;
  const rootDocsDirectory = join(rootDirectoryPath, category);
  const MDXFilePath: string = join(
    rootDocsDirectory,
    tag ?? ''.replace('.mdx', ''),
    `${slug}.mdx`
  );
  const data = GetMdxData(join(MDXFilePath));
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
      containingDirectory: join(rootDocsDirectory, tag ?? ''),
      fileName: `${slug}.mdx`,
      MDXFilePath: MDXFilePath,
    },
  };
  return <Doc route={params} post={post} />;
}
