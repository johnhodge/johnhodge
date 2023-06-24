import type { Person } from '../types';
import Article from '../templates/article';
import GlobalCard from './shared/card';

export default function Tech(data: Person) {
  return (
    <Article
      id='tech'
      headline='Tech'
      subhead='Let’s see what I use'
      button={false}
      data={data}>
      <div className='flex flex-wrap gap-4'>
        {data.technology.items.map((tech) => (
          <div
            key={tech.title.replace(' ', '').toLowerCase()}
            className='shrink grow md:basis-1/3 xl:basis-1/4'>
            <GlobalCard
              key={tech.title.replace(' ', '').toLowerCase()}
              logo={tech.icon}
              iconAlign='center'
              header={tech.title}
              longDescription={tech.headline}
              verticalLine={false}
              horizontalLine={false}
            />
          </div>
        ))}
      </div>
    </Article>
  );
}
