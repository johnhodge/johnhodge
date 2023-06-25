import Image from 'next/image';

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
type asset = {
  assetId: string;
};
export default async function GetAsset({ assetId }: asset) {
  const environment = 'staging';
  const url = `https://cdn.contentful.com/spaces/${process.env.PUBLIC_CONTENTFUL_SPACE_ID}/environments/${environment}/assets/${assetId}?access_token=${process.env.PUBLIC_CONTENTFUL_CONTENT_DELIVERY_TOKEN}`;
  const res = await fetch(url);
  const imageData: ImageData = await res.json();

  return (
    <Image
      src={imageData.fields.file.url}
      height={imageData.fields.file.details.image.height}
      width={imageData.fields.file.details.image.width}
      title={imageData.fields.title}
      alt={imageData.fields.description}
      priority={true}
      className='w-full'
    />
  );
}
