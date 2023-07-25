import type { GlobalButtonSettings } from '@/app/components/shared/button';
import GlobalCard from '@/app/components/shared/card';
import Doc from '@/app/docs/(categories)/templates/doc';
import { GetDataContent, GetSubFolders } from '@/utils/mdx';
import { Metadata } from 'next';
import { join } from 'path';
import { cwd } from 'process';

type PropParams = {
  params: {
    category: string;
  };
};

const docsDirectoryPath = join(cwd(), 'documentation');

export async function generateMetadata(props: PropParams) {
  const MDXFileDirectory = join(
    docsDirectoryPath,
    props.params.category.replace('.mdx', '')
  );
  const MDXFilePath = join(MDXFileDirectory, '_index.mdx');
  const { data } = GetDataContent(join(MDXFilePath));
  const metadata: Metadata = {
    title: data.title,
  };

  return metadata;
}

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

type SubPageData = {
  title: string;
  descrption: string;
};

export default async function Page(props: PropParams) {
  const subPages: Record<string, SubPageData> = {};
  const MDXDirectoryPath = join(
    docsDirectoryPath,
    props.params.category.replace('.mdx', '')
  );
  const MDXFilePath = join(MDXDirectoryPath, '_index.mdx');

  const subPageFiles = GetSubFolders(MDXDirectoryPath);
  subPageFiles.forEach(
    (file: string) =>
      (subPages[file] = {
        title: GetDataContent(join(MDXDirectoryPath, file)).data.title,
        descrption: GetDataContent(join(MDXDirectoryPath, file)).data.excerpt,
      })
  );

  return (
    <Doc
      params={props.params}
      docsDirectoryPath={docsDirectoryPath}
      MDXFilePath={MDXFilePath}>
      <div className='not-prose grid grid-cols-6 gap-4'>
        {Object.keys(subPages)
          .filter((key) => key != '_index.mdx')
          .map((page) => (
            <div className='col-span-6 lg:col-span-3' key={page}>
              <GlobalCard
                verticalLine={false}
                horizontalLine={true}
                subheader={
                  GetDataContent(join(MDXDirectoryPath, page)).data.title
                }
                longDescription={
                  GetDataContent(join(MDXDirectoryPath, page)).data.excerpt
                }
                button={createButton(
                  join(props.params.category, page.replace('.mdx', ''))
                )}
              />
            </div>
          ))}
      </div>
    </Doc>
  );
}
