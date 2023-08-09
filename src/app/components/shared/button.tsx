import { GlobalButtonSettings } from '@/app/types';
import Link from 'next/link';

export default function GlobalButton(props: GlobalButtonSettings) {
  const rootStyle =
    'inline-block border border-solid bg-gradient-to-b text-center font-bold group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 outline-blue-600 hover:scale-105 ease-in-out duration-150';
  const sizeStyle = {
    small: 'text-sm p-2 rounded-lg',
    large: 'text-xl px-9 py-6 rounded-3xl',
  };
  const widthStyle = { fit: 'w-fit', full: 'w-full' };
  const colorStyle = {
    primary:
      'border-primary-400 from-primary-100 to-primary-50 text-primary-700',
    secondary:
      'border-secondary-400 from-secondary-100 to-secondary-50 text-secondary-700',
    gray: 'border-gray-400 from-gray-100 to-gray-50 text-gray-700',
  };

  return props.buttonType === 'link' ? (
    <a
      className={`${rootStyle} ${sizeStyle[props.size]} ${
        widthStyle[props.width]
      } ${colorStyle[props.color]}`}
      href={props.href}>
      {props.text}
    </a>
  ) : props.buttonType === 'route' ? (
    <Link
      className={`${rootStyle} ${sizeStyle[props.size]} ${
        widthStyle[props.width]
      } ${colorStyle[props.color]}`}
      href={props.href}>
      {props.text}
    </Link>
  ) : props.buttonType === 'button' ? (
    <button
      className={`${rootStyle} ${sizeStyle[props.size]} ${
        widthStyle[props.width]
      } ${colorStyle[props.color]}`}
      onClick={props.onClick}>
      {props.text}
    </button>
  ) : (
    ''
  );
}
