'use client';
import Link from 'next/link';
import { useState } from 'react';
import GlobalButton from './shared/button';

const links = [
  'Clients',
  'Employers',
  'Testimonials',
  'Skills',
  'Tech',
  'Philosophy',
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
        <header className='fixed inset-x-0 flex justify-between items-center px-2 h-16 bg-gradient-to-b from-gray-0 to-gray-100 border-b border-b-gray-300 z-10'>
          <Link className='text-xl font-black' href='/'>
            John Hodge
          </Link>
          <div className='md:hidden'>
            <svg
              onClick={handleClick}
              width='26'
              height='26'
              viewBox='0 0 20 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <circle
                cx='10.2461'
                cy='2.49236'
                r='1.75384'
                className='fill-gray-950'
              />
              <circle
                cx='10.2461'
                cy='12.0001'
                r='1.75384'
                className='fill-gray-950'
              />
              <circle
                cx='10.2461'
                cy='21.5077'
                r='1.75384'
                className='fill-gray-950'
              />
            </svg>
          </div>
          <div className='max-md:hidden'>
            <nav>
              <ul className='flex items-center gap-4'>
                {links.map((link) => (
                  <li key={link.toLowerCase()}>
                    <a href={`/#${link.toLowerCase()}`}>{link}</a>
                  </li>
                ))}
                <li>
                  <GlobalButton
                    size='small'
                    width='fit'
                    color='primary'
                    text='Get on my cal'
                    link='/#contact'
                  />
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
      <div className='relative z-20'>
        <nav
          className={`${
            !click ? 'hidden ' : ''
          }fixed inset-0 w-full bg-gray-0 py-4`}>
          <svg
            className='absolute right-4'
            onClick={handleClick}
            width='30'
            height='30'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g clipPath='url(#clip0_64_6659)'>
              <path
                d='M3 3L27 27M3 27L27 3'
                strokeWidth='4'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='stroke-gray-950'
              />
            </g>
            <defs>
              <clipPath id='clip0_64_6659'>
                <rect width='30' height='30' className='fill-gray-0' />
              </clipPath>
            </defs>
          </svg>

          <ul className='min-h-dscreen flex flex-col justify-evenly p-4'>
            {links.map((link) => (
              <li key={link.toLowerCase()} onClick={handleClick}>
                <a
                  className='text-4xl font-extrabold'
                  href={`/#${link.toLowerCase()}`}>
                  {link}
                </a>
              </li>
            ))}
            <hr className='border-gray-950' />
            <li onClick={handleClick}>
              <GlobalButton
                size='large'
                width='full'
                color='secondary'
                text='Schedule a consultation'
                link='/#contact'
              />
            </li>
            <li onClick={handleClick}>
              <GlobalButton
                size='large'
                width='full'
                color='primary'
                text='Book me as a speaker'
                link='/#contact'
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
