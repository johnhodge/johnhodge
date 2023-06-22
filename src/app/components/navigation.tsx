'use client';
import Link from 'next/link';
import { useState } from 'react';

const links = [
  'Clients',
  'Employment',
  'Testimonials',
  'Skills',
  'Technology',
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
  console.log(click);
  return (
    <div className='relative'>
      <div className='relative'>
        <header className='fixed inset-x-0 flex justify-between p-4 bg-white-0'>
          <Link href='/'>John Hodge</Link>
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
                className='fill-black-950'
              />
              <circle
                cx='10.2461'
                cy='12.0001'
                r='1.75384'
                className='fill-black-950'
              />
              <circle
                cx='10.2461'
                cy='21.5077'
                r='1.75384'
                className='fill-black-950'
              />
            </svg>
          </div>
          <div className='max-md:hidden'>
            <nav>
              <ul className='flex gap-4'>
                {links.map((link) => (
                  <a href={`/#${link.toLowerCase()}`}>
                    <li>{link}</li>
                  </a>
                ))}
              </ul>
            </nav>
          </div>
        </header>
      </div>
      <div className='relative'>
        <nav
          className={`${!click ? 'hidden ' : ''}fixed inset-0 p-4  bg-white-0`}>
          <svg
            className='absolute right-4'
            onClick={handleClick}
            width='30'
            height='30'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g clip-path='url(#clip0_64_6659)'>
              <path
                d='M3 3L27 27M3 27L27 3'
                stroke-width='4'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='stroke-black-950'
              />
            </g>
            <defs>
              <clipPath id='clip0_64_6659'>
                <rect width='30' height='30' fill='white' />
              </clipPath>
            </defs>
          </svg>

          <ul className='min-h-dscreen flex flex-col justify-evenly absolute'>
            {links.map((link) => (
              <a href={`/#${link.toLowerCase()}`}>
                <li onClick={handleClick}>{link}</li>
              </a>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
