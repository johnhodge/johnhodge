import ContactForm from '@/app/components/form';
import Article from '@/app/templates/article';
import type { Person } from '@/app/types';
import GetAsset from '@/utils/asset';

export default async function Contact(data: Person) {
  return (
    <Article
      id='contact'
      headline='Consultation'
      subhead='Let’s work together'
      data={data}>
      <div className='grid grid-cols-6 gap-9 items-start'>
        <div className='col-span-6 md:col-span-4'>
          <ContactForm />
        </div>
        <div className='max-md:hidden md:col-span-2'>
          <GetAsset
            assetId='6wRH4f00UFPfaFHrWp8g2Z'
            figcaption={false}
            priority={false}
          />
        </div>
      </div>
    </Article>
  );
}
