import GlobalButton from '@/app/components/shared/button';
import Article from '@/app/templates/article';
import type { MediaImageData, PersonData } from '@/app/types';

export default async function Hero(data: PersonData) {
  const headshot: MediaImageData = {
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
          href='/#contact'
          size='large'
          color='secondary'
          width='fit'
          buttonType='route'
        />
        <GlobalButton
          text='Book me as a speaker'
          href='/speaker-request'
          size='large'
          color='gray'
          width='fit'
          buttonType='route'
        />
      </div>
    </Article>
  );
}
