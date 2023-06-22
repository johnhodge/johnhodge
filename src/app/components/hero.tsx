import type { Person } from '../types';
import Image from 'next/image';
import Button from './shared/button';

export default async function Hero(data: Person) {
  return (
    <article className='flex flex-col gap-4 px-4 md:flex-row xl:px-24 xl:gap-12'>
      <section className='basis-1/2 flex flex-col justify-evenly items-start'>
        <h1
          className='text-5xl font-black  xl:text-7xl'
          dangerouslySetInnerHTML={{ __html: data.headline }}
        />
        <h2 className='text-2xl font-extrabold py-4'>{data.subhead}</h2>
        <Button
          size='large'
          color='secondary'
          link='/#contact'
          width='fit'
          text='Schedule a consultation'
        />
      </section>

      <figure className='basis-1/2'>
        <Image
          src={data.headshot.url}
          height={data.headshot.height}
          width={data.headshot.width}
          title={data.headshot.title}
          alt={data.headshot.description}
          className='aspect-ratio-1/1'
        />
        <figcaption className='text-primary-700 bg-primary-50 px-2'>
          {data.headshot.description}
        </figcaption>
      </figure>
    </article>
  );
}
