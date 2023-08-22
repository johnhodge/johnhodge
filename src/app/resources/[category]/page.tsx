import GlobalCard from '@/app/components/shared/card';
import Doc from '@/app/resources/[category]/templates/doc';
import { DynamicRoute, GlobalButtonSettings, PostFileData } from '@/app/types';
import { GetMdxData, GetMdxDataContent, GetSubFolders } from '@/utils/mdx';
import { GetMetadata } from '@/utils/sitemeta';
import { readdirSync } from 'fs';
import { Metadata } from 'next';
import { join } from 'path';
import { cwd } from 'process';
const rootDirectory = 'resources';
const rootDirectoryPath = join(cwd(), rootDirectory);
const allRoutes: DynamicRoute[] = [];
const categoryRoutes = readdirSync(join(rootDirectoryPath)).filter(
  (category) => category != '_index.mdx'
);
export function generateStaticParams() {
  categoryRoutes.forEach((categoryRoute) =>
    allRoutes.push({
      category: categoryRoute,
    })
  );

  return allRoutes;
}

export async function generateMetadata({ params }: { params: DynamicRoute }) {
  const rootDocsDirectory = join(
    rootDirectoryPath,
    params.category.replace('.mdx', '')
  );
  const MDXFilePath = join(rootDocsDirectory, '_index.mdx');
  const { data } = GetMdxDataContent(join(MDXFilePath));
  const metadata: Metadata = GetMetadata({
    pageName: data.title,
    description: data.excerpt,
    path: join(
      rootDirectory,
      params.category,
      params.tag ?? '',
      params.slug ?? ''
    ),
    index: false,
    follow: false,
    cache: false,
  });

  return metadata;
}

type SubPageData = {
  filename: string;
  title: string;
  excerpt: string;
  icon: string;
};

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

export default async function Page({ params }: { params: DynamicRoute }) {
  const rootDocsDirectory = join('/', rootDirectoryPath, params.category);
  const MDXFilePath = join(rootDocsDirectory, '_index.mdx');
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
      containingDirectory: join(rootDocsDirectory, params.category ?? ''),
      fileName: `${params.slug}.mdx`,
      MDXFilePath: MDXFilePath,
    },
  };

  const subPages: Record<string, SubPageData> = {};
  const subPageDirs = GetSubFolders(rootDocsDirectory);
  subPageDirs
    .filter((file: string) => file != '_index.mdx')
    .map((subPageDir: string) =>
      GetSubFolders(join(rootDocsDirectory, subPageDir))
        .filter((page) => page == '_index.mdx')
        .map(
          (subPage) =>
            (subPages[subPageDir] = {
              filename: subPage,
              ...GetMdxData(join(rootDocsDirectory, subPageDir, subPage)),
            })
        )
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
                  join(
                    params.category,
                    params.tag ?? '',
                    page.replace('.mdx', '')
                  )
                )}
              />
            </div>
          ))}
      </div>
    </Doc>
  );
}
