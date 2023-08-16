import ContactForm from '@/app/speaker-request/components/form';
import Article from '@/app/templates/article';
import GetAsset from '@/utils/asset';
import { GetMetadata } from '@/utils/sitemeta';
import { Metadata } from 'next';

export const metadata: Metadata = GetMetadata({
  pageName: 'Speaker request',
  description: 'Book John as a speaker at your next event.',
  path: 'speaker-request',
  index: true,
  follow: true,
  cache: true,
});

export default async function SpeakerRequest() {
  return (
    <Article
      id='request'
      headline='Speaker request'
      subhead='Let’s talk about it'>
      <div className='grid grid-cols-6 gap-9 items-start'>
        <div className='col-span-6 md:col-span-4'>
          <ContactForm />
        </div>
        <div className='max-md:hidden md:col-span-2'>
          <GetAsset
            assetId='27lFnY64G3wcXxrR1mv2dA'
            figcaption={true}
            priority={true}
          />
        </div>
      </div>
    </Article>
  );
}
