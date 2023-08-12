'use client';
import {
  TOC2,
  TOC3,
  TOCHome,
} from '@/app/resources/[documentation]/components/body';
import GitHubData from '@/app/resources/[documentation]/components/github';
import { TOCData } from '@/app/types';
import Link from 'next/link';
import { join } from 'path';
import { useState } from 'react';

export default function GlobalTOC(props: TOCData) {
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
      <div className='md:hidden sticky z-10 top-20'>
        <span
          onClick={handleClick}
          className='font-emoji rounded-lg min-w-fit inline-block px-1 text-3xl text-center border border-solid bg-gradient-to-b border-gray-400 from-gray-100 to-gray-50 text-gray-700'>
          📖
        </span>

        <div className='relative z-40 overflow-hidden md:hidden'>
          <nav
            className={`${
              !click ? 'translate-x-full ' : 'translate-x-0 '
            }fixed flex flex-col inset-0 w-full bg-gray-0 py-4 px-2 ease-in-out duration-300 delay-75`}>
            <div className='h-8 relative flex items-center'>
              <svg
                onClick={handleClick}
                className='absolute right-0'
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
              <Link
                href={join('/', props.post.file.rootDirectory)}
                onClick={handleClick}
                className='absolute text-xl font-black'>
                {`${props.post.file.rootDirectory[0].toUpperCase()}${props.post.file.rootDirectory.substring(
                  1
                )}`}
              </Link>
            </div>
            <div className='max-h-full py-6 overflow-y-auto prose z-40 overscroll-none'>
              <span onClick={handleClick}>
                <TOCHome
                  key='documentation-home'
                  header={`${props.rootDocTitle} Home`}
                  base={join(
                    '/',
                    props.post.file.rootDirectory,
                    props.route.params.documentation
                  )}
                  slug='/'
                />
              </span>
              {Object.keys(props.folders).map((dir) => (
                <div key={dir}>
                  <span onClick={handleClick}>
                    <TOC2
                      key={dir}
                      base={join(
                        '/',
                        props.post.file.rootDirectory,
                        props.route.params.documentation,
                        dir
                      )}
                      data={props.folders[dir].root}
                    />
                  </span>

                  {props.folders[dir].subPages.map((subPage) => (
                    <span
                      key={join(subPage.file.fileName)}
                      onClick={handleClick}>
                      <TOC3
                        key={join(subPage.file.fileName)}
                        base={join(
                          '/',
                          props.post.file.rootDirectory,
                          props.route.params.documentation,
                          dir
                        )}
                        slug={subPage.file.fileName}
                        data={subPage}
                      />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
      <aside className='hidden md:block col-span-2'>
        <div className='sticky top-32'>
          <Link
            href={join('/', props.post.file.rootDirectory)}
            className='pb-4 text-xl font-black no-underline hover:text-primary-700 transition-colors ease-in-out duration-50'>
            {`${props.post.file.rootDirectory[0].toUpperCase()}${props.post.file.rootDirectory.substring(
              1
            )}`}
          </Link>
          <div className='max-h-full py-4 overflow-y-auto prose z-40 overscroll-none md:z-auto md:max-h-[calc(75dvh-110px)]'>
            <TOCHome
              key='documentation-home'
              header={`${props.rootDocTitle} Home`}
              base={join(
                '/',
                props.post.file.rootDirectory,
                props.route.params.documentation
              )}
              slug='/'
            />
            {Object.keys(props.folders).map((dir) => (
              <div key={dir}>
                <TOC2
                  key={dir}
                  base={join(
                    '/',
                    props.post.file.rootDirectory,
                    props.route.params.documentation,
                    dir
                  )}
                  data={props.folders[dir].root}
                />

                {props.folders[dir].subPages.map((subPage) => (
                  <TOC3
                    key={join(subPage.file.fileName)}
                    base={join(
                      '/',
                      props.post.file.rootDirectory,
                      props.route.params.documentation,
                      dir
                    )}
                    slug={subPage.file.fileName}
                    data={subPage}
                  />
                ))}
              </div>
            ))}
          </div>
          <GitHubData {...props.post} />
        </div>
      </aside>
    </>
  );
}
