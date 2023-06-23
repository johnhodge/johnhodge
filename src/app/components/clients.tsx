import type { Person } from '../types';
import Article from '../templates/article';
import GlobalCard from './shared/card';

export default function Client(data: Person) {
  return (
    <Article
      headline='Clients'
      subhead="See who I've helped"
      button={false}
      data={data}>
      <div className='flex flex-wrap gap-4'>
        {data.clients.items.map((client) => (
          <div className='shrink grow md:basis-1/3 lg:basis-1/4'>
            <GlobalCard
              key={client.clientsCollection.items[0].name}
              icon={client.clientsCollection.items[0].logo}
              subheader={client.clientsCollection.items[0].name}
              shortDescription={client.headline}
              verticalLine={true}
              horizontalLine={false}
            />
          </div>
        ))}
      </div>
    </Article>
  );
}
