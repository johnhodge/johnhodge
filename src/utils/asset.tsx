import { AssetData } from '@/app/types';
import Image from 'next/image';

export type ImageData = {
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

export default async function GetAsset(props: AssetData) {
  const url = `https://cdn.contentful.com/spaces/${process.env.PUBLIC_CONTENTFUL_SPACE_ID}/environments/production/assets/${props.assetId}?access_token=${process.env.PUBLIC_CONTENTFUL_CONTENT_DELIVERY_TOKEN}`;
  const res = await fetch(url);
  const imageData: ImageData = await res.json();

  return (
    <figure className={props.size != 'fit' ? 'w-full' : 'w-fit'}>
      <Image
        src={`https:${imageData.fields.file.url}`}
        height={imageData.fields.file.details.image.height}
        width={imageData.fields.file.details.image.width}
        title={imageData.fields.title}
        alt={imageData.fields.description}
        priority={props.priority}
        quality={80}
        unoptimized={
          imageData.fields.file.contentType == 'image/svg+xml' ? true : false
        }
        className='w-full'
      />
      {props.figcaption ? (
        <figcaption className='text-xs text-gray-700 bg-gray-50 p-1'>
          {imageData.fields.description}
        </figcaption>
      ) : (
        ''
      )}
    </figure>
  );
}
