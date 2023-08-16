import GlobalCard from '@/app/components/shared/card';
import Doc from '@/app/resources/[documentation]/templates/doc';
import { DynamicRoute, GlobalButtonSettings, PostFileData } from '@/app/types';
import { GetMdxData, GetMdxDataContent, GetSubFolders } from '@/utils/mdx';
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
  const MDXFilePath = join(rootDocsDirectory, '_index.mdx');
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

export default async function Page(props: DynamicRoute) {
  const rootDocsDirectory = join(
    '/',
    rootDirectoryPath,
    props.params.documentation
  );
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
      containingDirectory: join(rootDocsDirectory, props.params.category ?? ''),
      fileName: `${props.params.slug}.mdx`,
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
                  join(
                    props.params.documentation,
                    props.params.category ?? '',
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
