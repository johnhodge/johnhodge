import Link from 'next/link';
import { ReactNode } from 'react';

type MdData = {
  title?: string;
  excerpt?: string;
  coverImage?: string;
  date?: string;
  author?: { name: string };
  ogImage?: { url: string };
};

type Props = {
  base: string;
  header?: ReactNode;
  children?: ReactNode;
  data?: MdData;
  slug?: string;
};

type LinkedHeaderProps = {
  children: ReactNode;
  href: string;
};

export default function LinkedHeader(props: LinkedHeaderProps) {
  return (
    <Link href={props.href} className='relative group'>
      <span className='hidden absolute -left-4 font-black text-lg group-hover:md:block'>
        ⌗
      </span>
      {props.children}
    </Link>
  );
}

export function H3(props: Props) {
  const headerAnchor = props.header
    ?.toString()
    .replaceAll(' ', '-')
    .replaceAll('.', '')
    .toLowerCase();
  return (
    <LinkedHeader href={`${props.base}/#${headerAnchor}`}>
      <h3 id={headerAnchor} className='scroll-mt-16 font-black'>
        {props.header}
      </h3>
    </LinkedHeader>
  );
}

export function H2(props: Props) {
  const headerAnchor = props.header
    ?.toString()
    .replaceAll(' ', '-')
    .replaceAll('.', '')
    .toLowerCase();
  return (
    <LinkedHeader href={`${props.base}/#${headerAnchor}`}>
      <h2 id={headerAnchor} className='scroll-mt-16 font-black'>
        {props.header}
      </h2>
    </LinkedHeader>
  );
}

export function TOCHome(props: Props) {
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
      <div id={headerAnchor} className='py-2 font-extrabold text-lg'>
        {props.data ? props.data.title : props.header}
      </div>
    </Link>
  );
}
export function TOC2(props: Props) {
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
export function TOC3(props: Props) {
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
