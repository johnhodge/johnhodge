import GlobalCard from '@/app/components/shared/card';
import Article from '@/app/templates/article';
import type { PersonData } from '@/app/types';
import { GlobalButtonSettings } from '@/app/types';

export default function Testimonials(data: PersonData) {
  const openDialog: GlobalButtonSettings = {
    text: 'Read more',
    color: 'primary',
    size: 'small',
    width: 'fit',
    buttonType: 'button',
  };
  return (
    <Article
      id='testimonials'
      headline='Testimonials'
      subhead='See what they’re saying'
      data={data}>
      <div className='flex flex-wrap gap-4'>
        {data.testimonials.items.map((testimonial) => (
          <div
            key={`${testimonial.author.firstName.toLowerCase()}-${testimonial.author.lastName.toLowerCase()}`}
            className='shrink grow lg:basis-1/4'>
            <GlobalCard
              key={`${testimonial.author.firstName.toLowerCase()}-${testimonial.author.lastName.toLowerCase()}`}
              icon={testimonial.author.headshot}
              iconAlign='start'
              subheader={`${testimonial.author.firstName} ${testimonial.author.lastName}`}
              shortDescription={`${testimonial.author.employment.items[0].jobTitle} — ${testimonial.author.employment.items[0].clientsCollection.items[0].name}`}
              longDescription={testimonial.excerpt}
              body={testimonial.body}
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
