import { GlobalButtonSettings } from '@/app/components/shared/button';
import GlobalCard from '@/app/components/shared/card';
import Article from '@/app/templates/article';
import { GetDataContent, GetSubFolders } from '@/utils/mdx';
import { Metadata } from 'next';
import { join } from 'path';
import { cwd } from 'process';

const docsDirectoryPath = join(cwd(), 'documentation');
export async function generateMetadata() {
  const MDXFilePath = join(docsDirectoryPath, '_index.mdx');
  const { data } = GetDataContent(join(MDXFilePath));
  const metadata: Metadata = {
    title: data.title,
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
    link: link,
    text: 'Read more',
    route: true,
  };
}

export default async function Page() {
  const subPages: Record<string, SubPageData> = {};
  const subPageDirs = GetSubFolders(docsDirectoryPath);
  subPageDirs
    .filter((file: string) => file != '_index.mdx')
    .map((subPageDir: string) =>
      GetSubFolders(join(docsDirectoryPath, subPageDir))
        .filter((page) => page == '_index.mdx')
        .map(
          (subPage) =>
            (subPages[subPageDir] = {
              filename: subPage,
              title: GetDataContent(
                join(docsDirectoryPath, subPageDir, subPage)
              ).data.title,
              excerpt: GetDataContent(
                join(docsDirectoryPath, subPageDir, subPage)
              ).data.excerpt,
              icon: GetDataContent(join(docsDirectoryPath, subPageDir, subPage))
                .data.icon,
            })
        )
    );

  return (
    <div className='bg-gradient-to-b from-gray-0 from-60% to-secondary-100 to-100%'>
      <Article
        id={'docs'}
        headline={
          GetDataContent(join(docsDirectoryPath, '_index.mdx')).data.title
        }
        subhead={
          GetDataContent(join(docsDirectoryPath, '_index.mdx')).data.excerpt
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
                button={createButton(join('/docs', page))}
              />
            </div>
          ))}
        </div>
      </Article>
    </div>
  );
}
