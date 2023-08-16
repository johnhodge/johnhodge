import GlobalCard from '@/app/components/shared/card';
import Doc from '@/app/resources/[documentation]/templates/doc';
import {
  BasicPostData,
  DynamicRoute,
  GlobalButtonSettings,
  PostFileData,
} from '@/app/types';
import {
  GetMdxBasicData,
  GetMdxData,
  GetMdxDataContent,
  GetSubFolders,
} from '@/utils/mdx';
import { GetMetadata } from '@/utils/sitemeta';
import { Metadata } from 'next';
import { join } from 'path';
import { cwd } from 'process';

const rootDirectory = 'resources';
const rootDirectoryPath = join(cwd(), rootDirectory);

export async function generateMetadata(props: DynamicRoute) {
  const rootDocsDirectory = join(
    rootDirectoryPath,
    props.params.documentation.replace('.mdx', '')
  );
  const MDXFileDirectory = join(
    rootDocsDirectory,
    props.params.category ?? ''.replace('.mdx', '')
  );
  const MDXFilePath = join(MDXFileDirectory, '_index.mdx');
  const { data } = GetMdxDataContent(join(MDXFilePath));
  const metadata: Metadata = GetMetadata({
    pageName: data.title,
    description: data.excerpt,
    path: join(
      rootDirectory,
      props.params.documentation,
      props.params.category ?? '',
      props.params.slug ?? ''
    ),
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

export default async function Page(props: DynamicRoute) {
  const subPages: Record<string, BasicPostData> = {};
  const rootDocsDirectory = join(rootDirectoryPath, props.params.documentation);
  const containingDirectory = join(
    rootDocsDirectory,
    props.params.category ?? ''
  );
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
      containingDirectory: join(rootDocsDirectory, props.params.category ?? ''),
      fileName: `${props.params.slug}.mdx`,
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
    <Doc route={props} post={post}>
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
                  join(props.params.category ?? '', page.replace('.mdx', ''))
                )}
              />
            </div>
          ))}
      </div>
    </Doc>
  );
}
