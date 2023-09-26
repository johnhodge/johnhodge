import GlobalCard from '@/app/components/shared/card';
import Article from '@/app/templates/article';
import { GlobalButtonSettings, SubPageData } from '@/app/types';
import { GetMdxBasicData, GetMdxData, GetSubFolders } from '@/utils/mdx';
import { GetMetadata } from '@/utils/sitemeta';
import { Metadata } from 'next';
import { join } from 'path';
import { cwd } from 'process';

const rootDirectory = 'resources';
const rootDirectoryPath = join(cwd(), rootDirectory);

export async function generateMetadata() {
  const rootDocsDirectory = join(rootDirectoryPath);
  const MDXFilePath = join(rootDocsDirectory, '_index.mdx');
  const data = GetMdxData(join(MDXFilePath));
  const metadata: Metadata = GetMetadata({
    pageName: data.title,
    description: data.excerpt,
    path: 'resources',
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
              ...GetMdxData(join(rootDocsDirectory, subPageDir, subPage)),
            })
        )
    );

  return (
    <div className='bg-gradient-to-b from-gray-0 from-60% to-secondary-50 to-100%'>
      <Article
        id='resources'
        headline={GetMdxBasicData(join(rootDocsDirectory, '_index.mdx')).title}
        subhead={
          GetMdxBasicData(join(rootDocsDirectory, '_index.mdx')).subhead
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
