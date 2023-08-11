import GlobalCard from '@/app/components/shared/card';
import Doc from '@/app/resources/[documentation]/(categories)/templates/doc';
import { DynamicRoute, GlobalButtonSettings, PostData } from '@/app/types';
import { GetDataContent, GetSubFolders } from '@/utils/mdx';
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

export default async function Page(props: DynamicRoute) {
  const rootDocsDirectory = join(
    '/',
    rootDirectoryPath,
    props.params.documentation
  );
  const MDXFilePath = join(rootDocsDirectory, '_index.mdx');
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
