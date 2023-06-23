import { Metadata } from 'next';
import { GetSiteMeta, GetWebsiteData } from './graphql.query';
import type { PersonMeta, Person } from './types';
import Hero from './components/hero';
import Clients from './components/clients';
import Employers from './components/employers';
import Testimonials from './components/testimonials';
import Skills from './components/skills';
import Tech from './components/tech';
import Philosophy from './components/philosophy';
import Contact from './components/contact';

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
    `https://graphql.contentful.com/content/v1/spaces/${process.env.PUBLIC_CONTENTFUL_SPACE_ID}/environments/staging`,
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
  const lowSaturation = 0;
  const highSaturation = 50;
  return (
    <main>
      <Hero {...data} />
      <div
        className={`bg-gradient-to-b from-gray-${lowSaturation} ${start} to-primary-${highSaturation} ${end}`}>
        <Clients {...data} />
      </div>
      <div
        className={`bg-gradient-to-b from-primary-${highSaturation} ${start} to-gray-${highSaturation} ${end}`}>
        <Employers {...data} />
      </div>
      <div
        className={`bg-gradient-to-b from-gray-${highSaturation} ${start} to-gray-${lowSaturation} ${end}`}>
        <Testimonials {...data} />
      </div>
      <div
        className={`bg-gradient-to-b from-gray-${lowSaturation} ${start} to-secondary-${highSaturation} ${end}`}>
        <Skills {...data} />
      </div>
      <div
        className={`bg-gradient-to-b from-secondary-${highSaturation} ${start} to-gray-${highSaturation} ${end}`}>
        <Tech {...data} />
      </div>
      <div
        className={`bg-gradient-to-b from-to-gray-100 ${start} to-gray-0 ${end}`}>
        <Philosophy {...data} />
      </div>
      <div
        className={`bg-gradient-to-b from-gray-0 ${start} to-primary-100 ${end}`}>
        <Contact {...data} />
      </div>
    </main>
  );
}
