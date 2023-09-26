import GlobalCard from '@/app/components/shared/card';
import Article from '@/app/templates/article';
import type { PersonData } from '@/app/types';
import { GlobalButtonSettings } from '@/app/types';

export default function Philosophy(data: PersonData) {
  const openDialog: GlobalButtonSettings = {
    text: 'Read more',
    color: 'primary',
    size: 'small',
    width: 'fit',
    buttonType: 'button',
  };
  return (
    <Article
      id='philosophy'
      headline='Philosophy'
      subhead='See what I prioritize'
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
              openDialog={openDialog}
            />
          </div>
        ))}
      </div>
    </Article>
  );
}
