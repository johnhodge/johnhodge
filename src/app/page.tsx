import Clients from '@/app/components/clients';
import Contact from '@/app/components/contact';
import Employers from '@/app/components/employers';
import Hero from '@/app/components/hero';
import Philosophy from '@/app/components/philosophy';
import Skills from '@/app/components/skills';
import Tech from '@/app/components/tech';
import Testimonials from '@/app/components/testimonials';
import { GetWebsiteData } from '@/app/graphql.query';
import type { Person } from '@/app/types';
import { GetMetadata } from '@/utils/sitemeta';
import { Metadata } from 'next';

export const metadata: Metadata = GetMetadata({
  pageName: 'Product professional and adtech nerd.',
  description:
    'John is a product professional and full stack advertising expert with relevant experience in media buying, media strategy, adtech solutions, architecture, integrations, programmatic tech, and connected-TV.',
  path: '',
  index: true,
  follow: true,
  cache: true,
});

export type Headers = {
  Authorication: string;
  'Content-Type': string;
};

const headers = {
  Authorization: `Bearer ${process.env.PUBLIC_CONTENTFUL_CONTENT_DELIVERY_TOKEN}`,
  'Content-Type': 'application/json',
};

export default async function Home() {
  const graphql = JSON.stringify({
    query: GetWebsiteData,
    variables: {},
  });
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.PUBLIC_CONTENTFUL_SPACE_ID}/environments/production`,
    {
      method: 'POST',
      body: graphql,
      headers: headers,
    }
  );
  const json = await response.json();
  const data: Person = json.data.person;
  const start = 'from-60%';
  const end = 'to-100%';
  return (
    <main>
      <Hero {...data} />
      <div
        className={`bg-gradient-to-b from-gray-0 ${start} to-primary-50 ${end}`}>
        <Clients {...data} />
      </div>
      <div
        className={`bg-gradient-to-b from-primary-50 from-60% to-gray-50 to-100%`}>
        <Employers {...data} />
      </div>
      <div
        className={`bg-gradient-to-b from-gray-50 ${start} to-gray-0 ${end}`}>
        <Testimonials {...data} />
      </div>
      <div
        className={`bg-gradient-to-b from-gray-0 ${start} to-secondary-50 ${end}`}>
        <Philosophy {...data} />
      </div>
      <div
        className={`bg-gradient-to-b from-secondary-50 ${start} to-gray-50 ${end}`}>
        <Tech {...data} />
      </div>
      <div
        className={`bg-gradient-to-b from-gray-50 ${start} to-gray-0 ${end}`}>
        <Skills {...data} />
      </div>
      <div
        className={`bg-gradient-to-b from-gray-0 ${start} to-primary-50 ${end}`}>
        <Contact {...data} />
      </div>
    </main>
  );
}
