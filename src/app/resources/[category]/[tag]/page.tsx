import GlobalCard from '@/app/components/shared/card';
import Doc from '@/app/resources/[category]/templates/doc';
import {
  BasicPostData,
  DynamicRouteData,
  GlobalButtonSettings,
  PostFileData,
} from '@/app/types';
import { GetMdxBasicData, GetMdxData, GetSubFolders } from '@/utils/mdx';
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
        allRoutes.push({
          category: categoryRoute,
          tag: tagRoute,
        })
      )
  );
  return allRoutes;
}

export async function generateMetadata({
  params,
}: {
  params: DynamicRouteData;
}) {
  const rootDocsDirectory = join(
    rootDirectoryPath,
    params.category.replace('.mdx', '')
  );
  const MDXFileDirectory = join(
    rootDocsDirectory,
    params.tag ?? ''.replace('.mdx', '')
  );
  const MDXFilePath = join(MDXFileDirectory, '_index.mdx');
  const data = GetMdxData(join(MDXFilePath));
  const metadata: Metadata = GetMetadata({
    pageName: data.title,
    description: data.excerpt,
    path: join(rootDocsDirectory, params.tag ?? '', params.slug ?? ''),
    index: false,
    follow: false,
    cache: false,
  });

  return metadata;
}

function createButton(link: string): GlobalButtonSettings {
  return {
    size: 'small',
    width: 'fit',
    color: 'primary',
    href: link,
    text: 'Read more',
    buttonType: 'route',
  };
}
export default async function Page({ params }: { params: DynamicRouteData }) {
  const subPages: Record<string, BasicPostData> = {};
  const rootDocsDirectory = join(rootDirectoryPath, params.category);
  const containingDirectory = join(rootDocsDirectory, params.tag ?? '');
  const MDXFilePath: string = join(containingDirectory, `_index.mdx`);
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
      containingDirectory: join(rootDocsDirectory, params.category ?? ''),
      fileName: `${params.slug}.mdx`,
      MDXFilePath: MDXFilePath,
    },
  };

  const subPageFiles = GetSubFolders(containingDirectory);
  subPageFiles.forEach(
    (file: string) =>
      (subPages[file] = {
        ...GetMdxBasicData(join(containingDirectory, file)),
      })
  );

  return (
    <Doc route={params} post={post}>
      <div className='not-prose grid grid-cols-6 gap-4'>
        {Object.keys(subPages)
          .filter((key) => key != '_index.mdx')
          .map((page) => (
            <div className='col-span-6 lg:col-span-3' key={page}>
              <GlobalCard
                verticalLine={false}
                horizontalLine={true}
                subheader={subPages[page].title}
                longDescription={subPages[page].excerpt}
                callToAction={createButton(
                  join(params.tag ?? '', page.replace('.mdx', ''))
                )}
              />
            </div>
          ))}
      </div>
    </Doc>
  );
}
