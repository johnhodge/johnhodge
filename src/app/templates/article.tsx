import GlobalButton from '../components/shared/button';
import Image from 'next/image';
import type { MediaImage, Person } from '@/app/types';
type Hgroup = {
  id: string;
  headline: string;
  subhead: string;
  data?: Person;
  headshot?: MediaImage;
  children?: React.ReactNode;
};
export default function Article(props: Hgroup) {
  return (
    <article
      id={props.id}
      className='scroll-mt-16 mx-2 py-9 border-b border-gray-950'>
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
              className='aspect-ratio-1/1'
            />
            <figcaption className='text-gray-700 bg-gray-50 px-2'>
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
