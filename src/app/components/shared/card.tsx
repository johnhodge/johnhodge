import GlobalButton from '@/app/components/shared/button';
import GlobalDialog from '@/app/components/shared/dialog';
import type { GlobalCardSettings } from '@/app/types';
import GetAsset from '@/utils/asset';
import MarkUp from '@/utils/markup';
import Image from 'next/image';

export default function GlobalCard(props: GlobalCardSettings) {
  return (
    <section
      className={`bg-gradient-to-t to-gray-0 from-gray-100 shadow-md p-8 rounded-3xl flex flex-col gap-4${
        props.height ? ` ${props.height} overflow-auto` : ''
      }`}>
      {props.logo?.url ? (
        <figure>
          <Image
            src={props.logo.url}
            height={props.logo.height}
            width={props.logo.width}
            title={props.logo.title}
            alt={props.logo.description}
            priority={true}
            quality={80}
            unoptimized={
              props.logo.contentType == 'image/svg+xml' ? true : false
            }
            className='h-6'
          />
          <figcaption className='hidden'>{props.logo.description}</figcaption>
        </figure>
      ) : (
        ''
      )}

      <div className='flex flex-col gap-4'>
        <hgroup className='flex gap-2'>
          {props.icon ? (
            <figure
              className={`flex flex-col w-icon min-w-icon justify-${
                props.iconAlign ? props.iconAlign : 'center'
              }`}>
              <Image
                src={props.icon.url}
                height={props.icon.height}
                width={props.icon.width}
                title={props.icon.title}
                alt={props.icon.description}
                quality={80}
                unoptimized={
                  props.icon.contentType == 'image/svg+xml' ? true : false
                }
              />
              <figcaption
                className='hidden'
                dangerouslySetInnerHTML={{ __html: props.icon.description }}
              />
            </figure>
          ) : props.iconId ? (
            <GetAsset
              figcaption={false}
              assetId={props.iconId}
              priority={true}
              size='fit'
            />
          ) : (
            ''
          )}
          {props.subheader || props.shortDescription ? (
            <div
              className={`flex flex-col justify-center gap-4 ${
                props.verticalLine ? 'border-l border-gray-900 pl-2' : ''
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

        {props.horizontalLine ? <hr className='border-gray-900' /> : ''}
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
          <div className='max-h-50-dscreen overflow-scroll'>
            <MarkUp markdown={props.longDescription} />
          </div>
        ) : (
          ''
        )}
        {props.openDialog ? (
          <div className='self-auto'>
            <GlobalDialog card={props} />
          </div>
        ) : (
          ''
        )}
        <div className='flex gap-2'>
          {props.closeDialog ? (
            <div className='self-auto'>
              <GlobalButton {...props.closeDialog} />
            </div>
          ) : (
            ''
          )}
          {props.callToAction ? (
            <div className='self-auto'>
              <GlobalButton {...props.callToAction} />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </section>
  );
}
//
