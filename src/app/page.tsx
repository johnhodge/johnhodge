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
  const start = 65;
  const end = 100;
  const lowSaturation = 0;
  const highSaturation = 100;
  return (
    <main>
      <Hero {...data} />
      <div
        className={`bg-gradient-to-b from-gray-${lowSaturation} from-${start}% to-primary-${highSaturation} to-${end}%`}>
        <Clients {...data} />
      </div>
      <div
        className={`bg-gradient-to-b from-primary-${highSaturation} from-${start}% to-gray-${highSaturation} to-${end}%`}>
        <Employers {...data} />
      </div>
      <div
        className={`bg-gradient-to-b from-gray-${highSaturation} from-${start}% to-gray-${lowSaturation} to-${end}%`}>
        <Testimonials {...data} />
      </div>
      <div
        className={`bg-gradient-to-b from-gray-${lowSaturation} from-${start}% to-secondary-${highSaturation} to-${end}%`}>
        <Skills {...data} />
      </div>
      <div
        className={`bg-gradient-to-b from-secondary-${highSaturation} from-${start}% to-gray-${highSaturation} to-${end}%`}>
        <Tech {...data} />
      </div>
      <div
        className={`bg-gradient-to-b from-to-gray-100 from-${start}% to-gray-0 to-${end}%`}>
        <Philosophy {...data} />
      </div>
      <div
        className={`bg-gradient-to-b from-gray-0 from-${start}% to-primary-100 to-${end}%`}>
        <Contact {...data} />
      </div>
    </main>
  );
}
