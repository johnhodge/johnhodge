import { PostFileData } from '@/app/types';
import Link from 'next/link';
import { join } from 'path';
import { ReactNode } from 'react';

type Header = {
  base: string;
  header?: ReactNode;
  children?: ReactNode;
  data?: PostFileData;
  slug?: string;
};

type LinkedHeaderProps = {
  children: ReactNode;
  href: string;
};

export default function LinkedHeader(props: LinkedHeaderProps) {
  return (
    <Link href={props.href} className='relative font-black group no-underline'>
      <span className='hidden absolute margin-auto -left-4 text-lg z-0 group-hover:md:block'>
        ⌗
      </span>
      {props.children}
    </Link>
  );
}

export function H3(props: Header) {
  const headerAnchor = props.header
    ?.toString()
    .replaceAll(' ', '-')
    .replaceAll('.', '')
    .toLowerCase();
  return (
    <h3 id={headerAnchor} className='scroll-mt-32'>
      <LinkedHeader href={`/${props.base}/#${headerAnchor}`}>
        {props.header}
      </LinkedHeader>
    </h3>
  );
}

export function H2(props: Header) {
  const headerAnchor = props.header
    ?.toString()
    .replaceAll(' ', '-')
    .replaceAll('.', '')
    .toLowerCase();
  return (
    <h2 id={headerAnchor} className='scroll-mt-32'>
      <LinkedHeader href={`/${props.base}/#${headerAnchor}`}>
        {props.header}
      </LinkedHeader>
    </h2>
  );
}

export function TOCHome(props: Header) {
  return (
    <Link
      href={join(props.base, props.slug ?? '')}
      className='no-underline hover:text-primary-700 transition-colors ease-in-out duration-50'>
      <div className='py-2 font-extrabold text-lg'>
        {props.data ? props.data.title : props.header}
      </div>
    </Link>
  );
}
export function TOC2(props: Header) {
  const headerAnchor = props.header
    ?.toString()
    .replaceAll(' ', '-')
    .replaceAll('.', '')
    .toLowerCase();
  return (
    <Link
      href={`${props.base}${
        props.header
          ? `/#${headerAnchor}`
          : props.slug
          ? `/${props.slug?.replace('.mdx', '')}`
          : ''
      }`}
      className='no-underline hover:text-primary-700 transition-colors ease-in-out duration-50'>
      <div id={headerAnchor} className='scroll-mt-16 font-bold py-2'>
        {props.data ? props.data.title : props.header}
      </div>
    </Link>
  );
}
export function TOC3(props: Header) {
  const headerAnchor = props.header
    ?.toString()
    .replaceAll(' ', '-')
    .replaceAll('.', '')
    .toLowerCase();
  return (
    <Link
      href={`${props.base}${
        props.header
          ? `/#${headerAnchor}`
          : props.slug
          ? `/${props.slug?.replace('.mdx', '')}`
          : ''
      }`}
      className='no-underline hover:text-primary-700 transition-colors ease-in-out duration-50'>
      <div id={headerAnchor} className='scroll-mt-16 pl-2'>
        {props.data ? props.data.title : props.header}
      </div>
    </Link>
  );
}
