import {
  H2,
  H3,
  TOC2,
  TOC3,
} from '@/app/resources/[documentation]/components/body';
import GlobalCallout from '@/app/resources/[documentation]/components/callouts';
import GlobalTOC from '@/app/resources/[documentation]/components/toc';
import { DynamicTemplate, TOCEnteries } from '@/app/types';
import { GetMdxData, GetMdxDataContent, GetSubFolders } from '@/utils/mdx';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { join } from 'path';
import { ReactNode } from 'react';

export async function generateMetadata(props: DynamicTemplate) {
  const { data } = GetMdxDataContent(props.post.file.MDXFilePath);
  const metadata: Metadata = {
    title: data.title,
  };
  return metadata;
}

export default function Doc(props: DynamicTemplate) {
  const rootDir = props.post.file.rootDocsDirectory;
  const folders = GetSubFolders(rootDir).filter(
    (folder) => folder != '_index.mdx'
  );

  function getTOC(folders: string[]): Record<string, TOCEnteries> {
    const TOCItems: Record<string, TOCEnteries> = {};

    folders.forEach(
      (folder: string) =>
        (TOCItems[folder] = {
          root: {
            ...GetMdxData(join(rootDir, folder, '_index.mdx')),
            file: {
              rootDirectory: props.post.file.rootDirectory,
              rootDocsDirectory: rootDir,
              containingDirectory: join(rootDir, folder),
              fileName: '_index.mdx',
              MDXFilePath: join(rootDir, folder, '_index.mdx'),
            },
          },

          subPages: GetSubFolders(join(rootDir, folder))
            .filter((subPage) => subPage != '_index.mdx')
            .map((page) => ({
              ...GetMdxData(join(rootDir, folder, page)),
              file: {
                rootDirectory: props.post.file.rootDirectory,
                rootDocsDirectory: rootDir,
                containingDirectory: join(
                  rootDir,
                  folder,
                  page.replace('.mdx', '')
                ),
                fileName: page,
                MDXFilePath: join(rootDir, folder, page),
              },
            })),
        })
    );

    return TOCItems;
  }
  getTOC(folders);

  const { data, content } = GetMdxDataContent(props.post.file.MDXFilePath);
  const rootDocTitle = GetMdxDataContent(
    join(props.post.file.rootDocsDirectory, '_index.mdx')
  ).data.title;

  return (
    <article className='grid grid-cols-12 grid-rows-1 py-16 gap-6 border-b border-b-slate-800'>
      <GlobalTOC
        folders={getTOC(folders)}
        post={props.post}
        route={props.route}
        rootDocTitle={rootDocTitle}
      />
      <section className='col-span-12 prose max-w-none prose-headings:font-black prose-a:decoration-dotted hover:prose-a:decoration-solid before:prose-code:hidden after:prose-code:hidden md:col-span-7 prose-pre:shadow-lg prose-pre:rounded-md prose-img:shadow-lg prose-img:rounded-md'>
        <h1>{data.title}</h1>
        <MDXRemote
          source={content}
          components={{
            h2: ({ children }: { children?: ReactNode }) => (
              <H2
                header={children}
                base={join(
                  'resources',
                  props.route.params.documentation,
                  props.route.params.category ?? '',
                  props.route.params.slug ?? ''
                )}
              />
            ),
            h3: ({ children }: { children?: ReactNode }) => (
              <H3
                header={children}
                base={join(
                  'resources',
                  props.route.params.documentation,
                  props.route.params.category ?? '',
                  props.route.params.slug ?? ''
                )}
              />
            ),
            GlobalCallout: (props) => <GlobalCallout {...props} />,
            img: (props) => (
              <img src={props.src} alt={props.alt} title={props.alt} />
            ),
          }}
        />
        {props.children}
      </section>
      <aside className='hidden md:block col-span-3'>
        <div className='sticky top-32'>
          <p className='pb-4 text-xl font-black'>On this page</p>
          {/* the 81px is to make up for the height of the github section in the GlobalTOC */}
          <div className='max-h-[calc((75dvh-110px)+81px)] overflow-y-auto prose prose-headings:font-black'>
            <MDXRemote
              source={content}
              components={{
                a: () => null,
                blockquote: () => null,
                br: () => null,
                code: () => null,
                em: () => null,
                h1: () => null,
                h2: ({ children }: { children?: ReactNode }) => (
                  <TOC2
                    header={children}
                    base={join(
                      '/resources',
                      props.route.params.documentation,
                      props.route.params.category ?? '',
                      props.route.params.slug ?? ''
                    )}
                  />
                ),
                h3: ({ children }: { children?: ReactNode }) => (
                  <TOC3
                    header={children}
                    base={join(
                      '/resources',
                      props.route.params.documentation,
                      props.route.params.category ?? '',
                      props.route.params.slug ?? ''
                    )}
                  />
                ),
                h4: () => null,
                h5: () => null,
                h6: () => null,
                hr: () => null,
                img: () => null,
                li: () => null,
                ol: () => null,
                p: () => null,
                pre: () => null,
                strong: () => null,
                ul: () => null,
                GlobalCallout: () => null,
              }}
            />
          </div>
        </div>
      </aside>
    </article>
  );
}
