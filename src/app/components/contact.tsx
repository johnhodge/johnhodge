import type { Person } from '../types';
import Article from '../templates/article';
import ContactForm from './form';
import GetAsset from '../utils/asset';

type ImageData = {
  metadata: {
    tags: Array<string>;
  };
  sys: {
    space: {
      sys: {
        type: 'Link';
        linkType: 'Tag';
        id: 'string';
      };
    };
    id: string;
    type: 'Asset';
    createdAt: string;
    updatedAt: string;
    environment: {
      sys: {
        id: 'staging' | 'main';
        type: 'Link';
        linkType: 'Environment';
      };
    };
    revision: 1;
    locale: string;
  };
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
};

const assetId = '6wRH4f00UFPfaFHrWp8g2Z';
const environment = 'staging';
const url = `https://cdn.contentful.com/spaces/${process.env.PUBLIC_CONTENTFUL_SPACE_ID}/environments/${environment}/assets/${assetId}?access_token=${process.env.PUBLIC_CONTENTFUL_CONTENT_DELIVERY_TOKEN}`;

export default async function Client(data: Person) {
  const res = await fetch(url);
  const imageData: ImageData = await res.json();
  return (
    <Article
      id='contact'
      headline='Consultation'
      subhead='Let’s work together'
      button={false}
      data={data}>
      <div className='grid grid-cols-6 gap-9 items-start'>
        <div className='col-span-6 md:col-span-3 lg:col-span-4'>
          <ContactForm />
        </div>
        <div className='max-md:hidden md:w-full md:col-span-3 lg:col-span-2'>
          <GetAsset assetId='6wRH4f00UFPfaFHrWp8g2Z' />
        </div>
      </div>
    </Article>
  );
}
