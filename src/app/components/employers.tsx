import type { Person } from '../types';
import Article from '../templates/article';
import GlobalCard from './shared/card';
import { GlobalButtonSettings } from './shared/button';

export default async function Employers(data: Person) {
  const button: GlobalButtonSettings = {
    text: 'Read more',
    color: 'primary',
    size: 'small',
    width: 'fit',
    buttonType: 'route',
    href: '/#contact',
  };
  return (
    <Article
      id='employers'
      headline='Employers'
      subhead="See where I've been"
      data={data}>
      <div className='flex flex-wrap gap-4'>
        {data.employment.items.map((employer) => (
          <div
            key={employer.clientsCollection.items[0].name}
            className='shrink grow md:basis-1/3'>
            <GlobalCard
              key={employer.clientsCollection.items[0].name}
              logo={employer.clientsCollection.items[0].logo}
              header={employer.jobTitle}
              subheader={employer.clientsCollection.items[0].name}
              longDescription={employer.headline}
              body={employer.body}
              verticalLine={false}
              horizontalLine={true}
              button={button}
              cta='Schedule a consultation'
            />
          </div>
        ))}
      </div>
    </Article>
  );
}
