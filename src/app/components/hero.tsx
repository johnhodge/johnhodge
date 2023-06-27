import type { MediaImage, Person } from '../types';
import Article from '../templates/article';
import GlobalButton from './shared/button';

export default async function Hero(data: Person) {
  const headshot: MediaImage = {
    url: data.headshot.url,
    title: data.headshot.title,
    description: data.headshot.description,
    width: data.headshot.width,
    height: data.headshot.height,
    contentType: data.headshot.contentType,
  };
  return (
    <Article
      id='hero'
      headline={data.headline}
      subhead={data.subhead}
      headshot={headshot}>
      <div className='flex flex-wrap gap-4'>
        <GlobalButton
          text='Schedule a consultation'
          link='/#contact'
          size='large'
          color='secondary'
          width='fit'
          route={true}
        />
        <GlobalButton
          text='Book me as a speaker'
          link='/speaker-request'
          size='large'
          color='gray'
          width='fit'
          route={true}
        />
      </div>
    </Article>
  );
}
