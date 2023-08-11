import GlobalCard from '@/app/components/shared/card';
import Article from '@/app/templates/article';
import { GlobalButtonSettings } from '@/app/types';
import { GetDataContent, GetSubFolders } from '@/utils/mdx';
import { Metadata } from 'next';
import { join } from 'path';
import { cwd } from 'process';

const rootDirectory = 'resources';
const rootDirectoryPath = join(cwd(), rootDirectory);

export async function generateMetadata() {
  const rootDocsDirectory = join(rootDirectoryPath);
  const MDXFilePath = join(rootDocsDirectory, '_index.mdx');
  const { data } = GetDataContent(join(MDXFilePath));
  const metadata: Metadata = {
    title: data.title,
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        nocache: true,
      },
    },
  };

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

export default async function Page() {
  const rootDocsDirectory = join(rootDirectoryPath);
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
              title: GetDataContent(
                join(rootDocsDirectory, subPageDir, subPage)
              ).data.title,
              excerpt: GetDataContent(
                join(rootDocsDirectory, subPageDir, subPage)
              ).data.excerpt,
              icon: GetDataContent(join(rootDocsDirectory, subPageDir, subPage))
                .data.icon,
            })
        )
    );

  return (
    <div className='bg-gradient-to-b from-gray-0 from-60% to-secondary-50 to-100%'>
      <Article
        id='resources'
        headline={
          GetDataContent(join(rootDocsDirectory, '_index.mdx')).data.title
        }
        subhead={
          GetDataContent(join(rootDocsDirectory, '_index.mdx')).data.subhead
        }>
        <div className='grid grid-cols-6 gap-4'>
          {Object.keys(subPages).map((page) => (
            <div
              className='col-span-6 lg:col-span-3 xl:col-span-2'
              key={subPages[page].icon}>
              <GlobalCard
                verticalLine={false}
                horizontalLine={true}
                iconId={subPages[page].icon}
                subheader={subPages[page].title}
                longDescription={subPages[page].excerpt}
                callToAction={createButton(join('resources', page))}
              />
            </div>
          ))}
        </div>
      </Article>
    </div>
  );
}
