import type { MediaImage, Person } from '../types';
import Article from '../templates/article';

export default async function Hero(data: Person) {
  const headshot: MediaImage = {
    url: data.headshot.url,
    title: data.headshot.title,
    description: data.headshot.description,
    width: data.headshot.width,
    height: data.headshot.height,
  };
  return (
    <Article
      headline={data.headline}
      subhead={data.subhead}
      headshot={headshot}
      button
    />
  );
}
