import GlobalCard from '@/app/components/shared/card';
import Doc from '@/app/resources/[documentation]/(categories)/templates/doc';
import {
  BasicPostData,
  DynamicRoute,
  GlobalButtonSettings,
  PostData,
} from '@/app/types';
import { GetDataContent, GetSubFolders } from '@/utils/mdx';
import { Metadata } from 'next';
import { join } from 'path';
import { cwd } from 'process';

const rootDirectory = join(cwd(), 'documentation');

export async function generateMetadata(props: DynamicRoute) {
  const rootDocsDirectory = join(
    rootDirectory,
    props.params.documentation.replace('.mdx', '')
  );
  const MDXFileDirectory = join(
    rootDocsDirectory,
    props.params.category ?? ''.replace('.mdx', '')
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
    href: link,
    text: 'Read more',
    buttonType: 'route',
  };
}

export default async function Page(props: DynamicRoute) {
  const subPages: Record<string, BasicPostData> = {};
  const rootDocsDirectory = join(rootDirectory, props.params.documentation);
  const containingDirectory = join(
    rootDocsDirectory,
    props.params.category ?? ''
  );
  const MDXFilePath: string = join(containingDirectory, `_index.mdx`);
  const { data } = GetDataContent(join(MDXFilePath));
  const post: PostData = {
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    icon: data.icon,
    author: {
      firstName: data.author.firstName,
      lastName: data.author.lastName,
    },
    file: {
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
        title: GetDataContent(join(containingDirectory, file)).data.title,
        excerpt: GetDataContent(join(containingDirectory, file)).data.excerpt,
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
