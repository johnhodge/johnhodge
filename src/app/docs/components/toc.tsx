'use client';
import type { TOCEnteries } from '@/app/docs/(categories)/templates/doc';
import { TOC2, TOC3, TOCHome } from '@/app/docs/components/body';
import Link from 'next/link';
import { join } from 'path';
import { useState } from 'react';

type PropData = {
  docsDirectoryPath: string;
  folders: Record<string, TOCEnteries>;
  author: string;
  MDXFilePath: string;
};

export default function GlobalTOC(props: PropData) {
  const homeData = { title: 'Docs Home' };
  const [click, setClick] = useState(false);
  function handleClick() {
    if (!click) {
      setClick(true);
    } else {
      setClick(false);
    }
  }
  return (
    <>
      <div className='md:hidden sticky z-30 top-20'>
        <span
          onClick={handleClick}
          className='font-emoji rounded-lg min-w-fit inline-block px-1 text-3xl text-center border border-solid bg-gradient-to-b border-gray-400 from-gray-100 to-gray-50 text-gray-700 '>
          📖
        </span>

        <div className='relative z-40 overflow-hidden'>
          <div
            className={`${
              !click ? 'translate-x-full ' : 'translate-x-0 '
            }fixed inset-0 w-full bg-gray-0 py-4 px-2 ease-in-out duration-300 delay-75`}>
            <svg
              onClick={handleClick}
              className='absolute right-4'
              width='30'
              height='30'
              viewBox='0 0 30 30'
              fill='none'
              xmlns='https://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0_64_6659)'>
                <path
                  d='M3 3L27 27M3 27L27 3'
                  strokeWidth='4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='stroke-gray-900'
                />
              </g>
              <defs>
                <clipPath id='clip0_64_6659'>
                  <rect width='30' height='30' className='fill-gray-0' />
                </clipPath>
              </defs>
            </svg>
            <p className='pb-4 text-xl font-black'>Contents</p>
            <div className='max-h-full py-4 overflow-y-auto prose z-40 overscroll-none md:z-auto md:max-h-[calc(75dvh-110px)]'>
              <TOCHome
                key='docs-home'
                base={join('/', 'docs')}
                slug='/'
                data={homeData}
              />
              {Object.keys(props.folders).map((dir) => (
                <div key={dir}>
                  <span onClick={handleClick}>
                    <TOC2
                      key={dir}
                      base={join('/', 'docs', dir)}
                      data={props.folders[dir].root}
                    />
                  </span>

                  {props.folders[dir].subPages.map((subPage) => (
                    <span key={join(subPage.fileName)} onClick={handleClick}>
                      <TOC3
                        key={join(subPage.fileName)}
                        base={join('/', 'docs', dir)}
                        slug={subPage.fileName}
                        data={subPage}
                      />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <aside className='hidden md:block col-span-2'>
        <div className='sticky top-32'>
          <p className='pb-4 text-xl font-black'>Contents</p>
          <div className='max-h-full py-4 overflow-y-auto prose z-40 overscroll-none md:z-auto md:max-h-[calc(75dvh-110px)]'>
            <TOCHome
              key='docs-home'
              base={join('/', 'docs')}
              slug='/'
              data={homeData}
            />
            {Object.keys(props.folders).map((dir) => (
              <div key={dir}>
                <TOC2
                  key={dir}
                  base={join('/', 'docs', dir)}
                  data={props.folders[dir].root}
                />

                {props.folders[dir].subPages.map((subPage) => (
                  <TOC3
                    key={join(subPage.fileName)}
                    base={join('/', 'docs', dir)}
                    slug={subPage.fileName}
                    data={subPage}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className='pt-4 border-t border-t-gray-300 flex flex-col items-start justify-center'>
            <p>Written by: {props.author}</p>
            <Link
              className='py-2 flex items-center gap-1'
              target='_blank'
              href={`https://github.com/johnhodge/johnhodge/blob/canary/${props.MDXFilePath.replace(
                /.*\/documentation\//,
                'documentation/'
              )}`}>
              <svg
                className='inline-block'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='https://www.w3.org/2000/svg'>
                <g clipPath='url(#clip0_195_13624)'>
                  <path
                    className='fill-gray-900'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_195_13624'>
                    <rect width='16' height='16' fill='none' />
                  </clipPath>
                </defs>
              </svg>
              Edit on GitHub ↗
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
