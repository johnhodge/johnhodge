import type { Person } from '../types';
import Article from '../templates/article';
import GlobalCard from './shared/card';

export default function Client(data: Person) {
  return (
    <Article
      id='skills'
      headline='Skills'
      subhead='See what I know'
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
              horizontalLine={false}
            />
          </div>
        ))}
      </div>
    </Article>
  );
}
