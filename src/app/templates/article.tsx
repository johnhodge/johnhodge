import type { HeaderGroupData } from '@/app/types';
import Image from 'next/image';

export default function Article(props: HeaderGroupData) {
  return (
    <article
      id={props.id}
      className='scroll-mt-16 border-b border-gray-900 py-9 mx-2 lg:mx-3'>
      <div className='flex flex-col-reverse gap-9 md:flex-row'>
        <div
          className={`flex flex-col items-start gap-9 ${
            props.headshot ? 'basis-2/3 grow' : 'min-w-full'
          }`}>
          <hgroup>
            <section className='flex flex-col'>
              <h2
                className='text-5xl font-black pb-6
            lg:text-7xl
            xl:text-8xl'
                dangerouslySetInnerHTML={{ __html: props.headline }}
              />
              <h3
                className='text-2xl font-extrabold
            lg:text-4xl
            xl:text-5xl'
                dangerouslySetInnerHTML={{ __html: props.subhead }}
              />
            </section>
          </hgroup>
          <div className='py-9 w-full'>{props.children}</div>
        </div>
        {props.headshot?.url ? (
          <figure className='basis-1/3'>
            <Image
              src={props.headshot.url}
              height={props.headshot.height}
              width={props.headshot.width}
              title={props.headshot.title}
              alt={props.headshot.description}
              quality={80}
              priority={true}
              unoptimized={
                props.headshot.contentType == 'image/svg+xml' ? true : false
              }
              className='aspect-ratio-1/1'
            />
            <figcaption className='text-xs text-gray-700 bg-gray-50 p-1'>
              {props.headshot.description}
            </figcaption>
          </figure>
        ) : (
          ''
        )}
      </div>
    </article>
  );
}
