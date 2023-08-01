import { GlobalButtonSettings } from '@/app/components/shared/button';
import GlobalCard from '@/app/components/shared/card';
import Article from '@/app/templates/article';
import { GetDataContent, GetSubFolders } from '@/utils/mdx';
import { Metadata } from 'next';
import { join } from 'path';
import { cwd } from 'process';
import { DynamicRoute } from '../types';

const rootDirectory = join(cwd(), 'documentation');

export async function generateMetadata(props: DynamicRoute) {
  const rootDocsDirectory = join(
    rootDirectory,
    props.params.documentation.replace('.mdx', '')
  );
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
    link: link,
    text: 'Read more',
    route: true,
  };
}

export default async function Page(props: DynamicRoute) {
  console.log(props);
  const rootDocsDirectory = join(
    '/',
    rootDirectory,
    props.params.documentation
  );
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
    <div className='bg-gradient-to-b from-gray-0 from-60% to-secondary-100 to-100%'>
      <Article
        id={props.params.documentation}
        headline={
          GetDataContent(join(rootDocsDirectory, '_index.mdx')).data.title
        }
        subhead={
          GetDataContent(join(rootDocsDirectory, '_index.mdx')).data.excerpt
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
                buttonType='button'
                button={createButton(join(props.params.documentation, page))}
              />
            </div>
          ))}
        </div>
      </Article>
    </div>
  );
}
