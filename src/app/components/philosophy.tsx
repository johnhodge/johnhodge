import type { Person } from '../types';
import Article from '../templates/article';
import GlobalCard from './shared/card';
import { GlobalButtonSettings } from './shared/button';

export default function Client(data: Person) {
  const button: GlobalButtonSettings = {
    text: 'Read more',
    color: 'primary',
    size: 'small',
    width: 'fit',
  };
  return (
    <Article
      id='philosophy'
      headline='Philosophy'
      subhead='Let’s see what I prioritize'
      button={false}
      data={data}>
      <div className='flex flex-wrap gap-4'>
        {data.philosophy.items.map((philo) => (
          <div
            key={philo.title.replace(' ', '').toLowerCase()}
            className='shrink grow md:basis-1/4'>
            <GlobalCard
              key={philo.title.replace(' ', '').toLowerCase()}
              icon={philo.icon}
              iconAlign='center'
              subheader={philo.title}
              longDescription={philo.headline}
              body={philo.body}
              verticalLine={false}
              horizontalLine={true}
              button={button}
            />
          </div>
        ))}
      </div>
    </Article>
  );
}
