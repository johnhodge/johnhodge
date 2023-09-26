import type { PersonData } from '@/app/types';
import Article from '@/app/templates/article';
import GlobalCard from '@/app/components/shared/card';

export default function Tech(data: PersonData) {
  return (
    <Article id='tech' headline='Tech' subhead='See what I use' data={data}>
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
