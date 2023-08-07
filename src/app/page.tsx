import { Metadata } from 'next';
import { GetWebsiteData } from './graphql.query';
import type { Person } from './types';
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

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
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
