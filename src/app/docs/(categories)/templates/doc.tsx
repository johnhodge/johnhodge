import { H2, H3, TOC2, TOC3 } from '@/app/docs/components/body';
import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { join } from 'path';
import { ReactNode } from 'react';
import GlobalTOC from '@/app/docs/components/toc';

type PropParams = {
  params: {
    slug?: string;
    category: string;
  };
  docsDirectoryPath: string;
  MDXFilePath: string;
  children?: ReactNode;
};

export async function generateMetadata(props: PropParams) {
  const fileContents = readFileSync(props.MDXFilePath);
  const { data } = matter(fileContents);
  const metadata: Metadata = {
    title: data.title,
  };

  return metadata;
}

export default function Doc(props: PropParams) {
  type PageData = {
    fileName: string;
    title: string;
  };
  type TOCEnteries = { root: PageData; subPages: PageData[] };

  const folders = readdirSync(props.docsDirectoryPath);
  function getTOC(folders: string[]): Record<string, TOCEnteries> {
    const TOC: Record<string, TOCEnteries> = {};
    folders.forEach(
      (folder: string) =>
        (TOC[folder] = {
          root: {
            fileName: '_index.mdx',
            title: matter(
              readFileSync(join(props.docsDirectoryPath, folder, '_index.mdx'))
            ).data.title,
          },
          subPages: readdirSync(join(props.docsDirectoryPath, folder)).map(
            (page) =>
              page != '_index.mdx'
                ? {
                    fileName: page,
                    title: matter(
                      readFileSync(join(props.docsDirectoryPath, folder, page))
                    ).data.title,
                  }
                : undefined
          ),
        })
    );
    return TOC;
  }
  getTOC(folders);

  const fileContents = readFileSync(props.MDXFilePath);
  const { data, content } = matter(fileContents);
  return (
    <article className='grid grid-cols-12 grid-rows-1 py-16 gap-6'>
      <GlobalTOC
        folders={getTOC(folders)}
        docsDirectoryPath={props.docsDirectoryPath}
        author={data.author.name}
        MDXFilePath={props.MDXFilePath}
      />
      <section className='col-span-12 prose max-w-none prose-headings:font-black prose-a:no-underline md:col-span-7'>
        <h1>{data.title}</h1>
        <MDXRemote
          source={content}
          components={{
            h2: ({ children }: { children?: ReactNode }) => (
              <H2
                header={children}
                base={join(
                  '/docs',
                  props.params.category,
                  props.params.slug ?? ''
                )}
              />
            ),
            h3: ({ children }: { children?: ReactNode }) => (
              <H3
                header={children}
                base={join(
                  '/docs',
                  props.params.category,
                  props.params.slug ?? ''
                )}
              />
            ),
          }}
        />
        {props.children}
      </section>
      <aside className='hidden md:block col-span-3'>
        <div className='sticky top-32'>
          <p className='pb-4 text-xl font-black'>On this page</p>
          <ul className='max-h-[calc(75dvh-110px)] overflow-y-auto prose prose-headings:font-black'>
            <MDXRemote
              source={content}
              components={{
                p: (props) => <span className='hidden' {...props} />,
                ol: (props) => <span className='hidden' {...props} />,
                ul: (props) => <span className='hidden' {...props} />,
                pre: (props) => <span className='hidden' {...props} />,
                h2: ({ children }: { children?: ReactNode }) => (
                  <TOC2
                    header={children}
                    base={join(
                      '/docs',
                      props.params.category,
                      props.params.slug ?? ''
                    )}
                  />
                ),
                h3: ({ children }: { children?: ReactNode }) => (
                  <TOC3
                    header={children}
                    base={join(
                      '/docs',
                      props.params.category,
                      props.params.slug ?? ''
                    )}
                  />
                ),
              }}
            />
          </ul>
        </div>
      </aside>
    </article>
  );
}
