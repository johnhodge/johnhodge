import GlobalCard from '@/app/components/shared/card';
import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';
import { Metadata } from 'next';
import { join } from 'path';
import { cwd } from 'process';
import Article from '../templates/article';
import { GlobalButtonSettings } from '../components/shared/button';

const docsDirectoryPath = join(cwd(), 'documentation');
export async function generateMetadata() {
  const MDXFilePath = join(docsDirectoryPath, '_index.mdx');
  const fileContents = readFileSync(join(MDXFilePath));
  const { data } = matter(fileContents);
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
  const subPageDirs = readdirSync(docsDirectoryPath);
  subPageDirs
    .filter((file: string) => file != '_index.mdx')
    .map((subPageDir: string) =>
      readdirSync(join(docsDirectoryPath, subPageDir))
        .filter((page) => page == '_index.mdx')
        .map(
          (subPage) =>
            (subPages[subPageDir] = {
              filename: subPage,
              title: matter(
                readFileSync(
                  join(docsDirectoryPath, subPageDir, subPage),
                  'utf-8'
                )
              ).data.title,
              excerpt: matter(
                readFileSync(
                  join(docsDirectoryPath, subPageDir, subPage),
                  'utf-8'
                )
              ).data.excerpt,
              icon: matter(
                readFileSync(
                  join(docsDirectoryPath, subPageDir, subPage),
                  'utf-8'
                )
              ).data.icon,
            })
        )
    );

  return (
    <div className='bg-gradient-to-b from-gray-0 from-60% to-secondary-100 to-100%'>
      <Article
        id={'docs'}
        headline={
          matter(readFileSync(join(docsDirectoryPath, '_index.mdx'))).data.title
        }
        subhead={
          matter(readFileSync(join(docsDirectoryPath, '_index.mdx'))).data
            .excerpt
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
