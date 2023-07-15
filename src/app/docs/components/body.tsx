import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  header?: ReactNode;
  base: string;
};

export default function H2(props: Props) {
  const headerAnchor = props.header
    ?.toString()
    .replaceAll(' ', '-')
    .replaceAll('.', '')
    .toLowerCase();
  return (
    <Link href={`${props.base}/#${headerAnchor}`}>
      <h2 id={headerAnchor} className='scroll-mt-16 font-black'>
        {props.header}
      </h2>
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
    <Link href={`${props.base}/#${headerAnchor}`}>
      <h3 id={headerAnchor} className='scroll-mt-16 font-black'>
        {props.header}
      </h3>
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
    <Link href={`${props.base}/#${headerAnchor}`} className='no-underline'>
      <li id={headerAnchor} className='scroll-mt-16 font-bold'>
        {props.header}
      </li>
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
    <Link href={`${props.base}/#${headerAnchor}`} className='no-underline'>
      <li id={headerAnchor} className='scroll-mt-16 pl-2'>
        {props.header}
      </li>
    </Link>
  );
}
