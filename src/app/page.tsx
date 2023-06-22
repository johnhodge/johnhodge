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

  return (
    <main className='pt-20'>
      <Hero {...data} />
      <Clients {...data} />
      <Employers {...data} />
      <Testimonials {...data} />
      <Skills {...data} />
      <Tech {...data} />
      <Philosophy {...data} />
      <Contact {...data} />
    </main>
  );
}
