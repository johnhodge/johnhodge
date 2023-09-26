import { ImageLoaderData } from '@/app/types';

// Docs: https://www.contentful.com/developers/docs/references/images-api/
export default function contentfulLoader(props: ImageLoaderData) {
  const url = new URL(props.src.replace('http://', 'https://'));
  url.searchParams.set('fm', 'webp');
  url.searchParams.set('w', props.width.toString());
  url.searchParams.set('q', props.quality.toString() || '75');
  return url.href;
}
