'use client';
import GlobalButton from '@/app/components/shared/button';
import Link from 'next/link';
import { useState } from 'react';

const links = [
  'Clients',
  'Employers',
  'Testimonials',
  'Philosophy',
  'Skills',
  'Tech',
];

export default function Navigation() {
  const [click, setClick] = useState(false);

  function handleClick() {
    if (!click) {
      setClick(true);
    } else {
      setClick(false);
    }
  }
  return (
    <div className='relative font-bold'>
      <div className='relative h-16'>
        <header className='fixed inset-x-0 flex justify-between items-center px-2 h-16 bg-gradient-to-b from-gray-0 to-gray-100 border-b border-b-gray-300 lg:px-3 z-10'>
          <Link className='text-xl font-black' href='/'>
            John Hodge
          </Link>
          <div className='md:hidden flex items-center'>
            <GlobalButton
              size='small'
              width='fit'
              color='primary'
              text='Get on my cal'
              href='/#contact'
              buttonType='route'
            />
            <svg
              className='ml-6 mr-2'
              onClick={handleClick}
              width='26'
              height='26'
              viewBox='0 0 20 24'
              fill='none'
              xmlns='https://www.w3.org/2000/svg'>
              <circle
                cx='10.2461'
                cy='2.49236'
                r='1.75384'
                className='fill-gray-900'
              />
              <circle
                cx='10.2461'
                cy='12.0001'
                r='1.75384'
                className='fill-gray-900'
              />
              <circle
                cx='10.2461'
                cy='21.5077'
                r='1.75384'
                className='fill-gray-900'
              />
            </svg>
          </div>
          <div className='max-md:hidden flex gap-4 items-center'>
            <nav>
              <ul className='flex items-center gap-4'>
                {links.map((link) => (
                  <li key={link.toLowerCase()}>
                    <Link href={`/#${link.toLowerCase()}`}>{link}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <GlobalButton
              size='small'
              width='fit'
              color='primary'
              text='Get on my cal'
              href='/#contact'
              buttonType='route'
            />
          </div>
        </header>
      </div>
      <div className='relative overflow-hidden md:hidden z-20'>
        <nav
          className={`${
            !click ? 'translate-x-full ' : 'translate-x-0 '
          }fixed inset-0 w-full bg-gray-0 py-4 ease-in-out duration-300 delay-75`}>
          <svg
            className='absolute right-4'
            onClick={handleClick}
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
          <div className='min-h-dscreen p-4 landscape:grid landscape:grid-flow-col landscape:grid-cols-2'>
            <ul className='min-h-[45dvh] flex flex-col justify-evenly landscape:col-span-1'>
              {links.map((link) => (
                <li key={link.toLowerCase()} onClick={handleClick}>
                  <Link
                    className='text-4xl font-extrabold block'
                    href={`/#${link.toLowerCase()}`}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className='min-h-[45dvh] flex flex-col justify-evenly landscape:col-span-1'>
              <li className='landscape:hidden'>
                <hr className='border-gray-900' />
              </li>
              <li onClick={handleClick}>
                <GlobalButton
                  size='large'
                  width='full'
                  color='secondary'
                  text='Schedule a consultation'
                  href='/#contact'
                  buttonType='route'
                />
              </li>
              <li onClick={handleClick}>
                <GlobalButton
                  size='large'
                  width='full'
                  color='gray'
                  text='Book me as a speaker'
                  href='/speaker-request'
                  buttonType='route'
                />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
