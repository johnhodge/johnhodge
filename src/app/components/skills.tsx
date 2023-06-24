import type { Person } from '../types';
import Article from '../templates/article';
import GlobalCard from './shared/card';

export default function Client(data: Person) {
  return (
    <Article
      id='skills'
      headline='Skills'
      subhead='Let’s see what I know'
      button={false}
      data={data}>
      <div className='flex flex-wrap gap-4'>
        {data.skills.items.map((skill) => (
          <div
            key={skill.title.replace(' ', '').toLowerCase()}
            className='shrink grow md:basis-1/3 xl:basis-1/4'>
            <GlobalCard
              key={skill.title.replace(' ', '').toLowerCase()}
              icon={skill.icon}
              iconAlign='center'
              subheader={skill.title}
              longDescription={skill.headline}
              verticalLine={false}
              horizontalLine={true}
            />
          </div>
        ))}
      </div>
    </Article>
  );
}
