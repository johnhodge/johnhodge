import Image from 'next/image';
import type { MediaImage } from '@/app/types';
import Button from './button';
import { ButtonSettings } from './button';

type GlobalCard = {
  logo?: MediaImage;
  icon?: MediaImage;
  header?: string;
  subheader?: string;
  shortDescription?: string;
  longDescription?: string;
  button?: ButtonSettings;
  verticalLine: boolean;
  horizontalLine: boolean;
};

export default function GlobalCard(props: GlobalCard) {
  return (
    <section className='bg-gradient-to-t to-gray-0 from-gray-100 shadow-md p-8 rounded-3xl flex flex-col gap-4'>
      {props.logo?.url ? (
        <figure>
          <Image
            src={props.logo.url}
            height={props.logo.height}
            width={props.logo.width}
            title={props.logo.title}
            alt={props.logo.description}
            className='h-6'
          />
          <figcaption className='hidden'>{props.logo.description}</figcaption>
        </figure>
      ) : (
        ''
      )}

      <div className='flex flex-col gap-4'>
        <hgroup className='flex gap-2'>
          {props.icon?.url ? (
            <figure className='flex flex-col justify-center'>
              <Image
                src={props.icon.url}
                height={props.icon.height}
                width={props.icon.width}
                title={props.icon.title}
                alt={props.icon.description}
              />
              <figcaption className='hidden'>
                {props.icon.description}
              </figcaption>
            </figure>
          ) : (
            ''
          )}
          {props.subheader && props.shortDescription ? (
            <div
              className={`flex flex-col justify-center gap-4 ${
                props.verticalLine ? 'border-l border-gray-950 pl-2' : ''
              }`}>
              {props.subheader ? (
                <h3
                  className='text-2xl font-extrabold
              lg:text-4xl
              xl:text-5xl'>
                  {props.subheader}
                </h3>
              ) : (
                ''
              )}
              {props.shortDescription ? <p>{props.shortDescription}</p> : ''}
            </div>
          ) : (
            ''
          )}
        </hgroup>

        {props.horizontalLine ? <hr className='border-gray-950' /> : ''}
        {props.header ? (
          <h2
            className='text-5xl font-black 
        lg:text-7xl
        xl:text-8xl'>
            {props.header}
          </h2>
        ) : (
          ''
        )}
        {props.longDescription ? <p>{props.longDescription}</p> : ''}
        {props.button ? (
          <div className='self-auto'>
            <Button
              text={props.button.text}
              size={props.button.size}
              color={props.button.color}
              width={props.button.width}
              link={props.button.link}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    </section>
  );
}
