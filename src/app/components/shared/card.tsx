import Image from 'next/image';
import type { MediaImage } from '@/app/types';
import GlobalPopover from './popover';
import { GlobalButtonSettings } from './button';
import MarkUp from '@/app/utils/markup';

export type GlobalCardSettings = {
  logo?: MediaImage;
  icon?: MediaImage;
  header?: string;
  subheader?: string;
  shortDescription?: string;
  longDescription?: string;
  body?: string;
  button?: GlobalButtonSettings;
  verticalLine: boolean;
  horizontalLine: boolean;
};

export default function GlobalCard(props: GlobalCardSettings) {
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
              <figcaption
                className='hidden'
                dangerouslySetInnerHTML={{ __html: props.icon.description }}
              />
            </figure>
          ) : (
            ''
          )}
          {props.subheader || props.shortDescription ? (
            <div
              className={`flex flex-col justify-center gap-4 ${
                props.verticalLine ? 'border-l border-gray-950 pl-2' : ''
              }`}>
              {props.subheader ? (
                <h3
                  className='text-2xl font-extrabold
                  lg:text-4xl
                  xl:text-5xl'
                  dangerouslySetInnerHTML={{ __html: props.subheader }}
                />
              ) : (
                ''
              )}
              {props.shortDescription ? (
                <p
                  dangerouslySetInnerHTML={{ __html: props.shortDescription }}
                />
              ) : (
                ''
              )}
            </div>
          ) : (
            ''
          )}
        </hgroup>

        {props.horizontalLine ? <hr className='border-gray-950' /> : ''}
        {props.header ? (
          <h2
            className='text-2xl font-black
            lg:text-4xl
            xl:text-5xl'
            dangerouslySetInnerHTML={{ __html: props.header }}
          />
        ) : (
          ''
        )}
        {props.longDescription ? (
          <MarkUp markdown={props.longDescription} />
        ) : (
          ''
        )}
        {props.button ? (
          <div className='self-auto'>
            <GlobalPopover
              button={props.button}
              card={props}
              body={props.body}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    </section>
  );
}
//
