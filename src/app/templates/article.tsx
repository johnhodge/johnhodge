import Button from '../components/shared/button';
import Image from 'next/image';
import type { MediaImage, Person } from '@/app/types';
type Hgroup = {
  headline: string;
  subhead: string;
  button: boolean;
  data?: Person;
  headshot?: MediaImage;
  children?: React.ReactNode;
};
export default function Article(props: Hgroup) {
  return (
    <article className='px-2 py-9'>
      <div className='flex flex-col md:flex-row gap-9'>
        <hgroup className='basis-2/3 grow flex flex-col items-start gap-9'>
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
          {props.button ? (
            <Button
              size='large'
              color='secondary'
              link='/#contact'
              width='fit'
              text='Schedule a consultation'
            />
          ) : (
            ''
          )}
        </hgroup>
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
            <figcaption className='text-primary-700 bg-primary-50 px-2'>
              {props.headshot.description}
            </figcaption>
          </figure>
        ) : (
          ''
        )}
      </div>
      {props.children}
    </article>
  );
}
