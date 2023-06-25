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
      id='testimonials'
      headline='Testimonials'
      subhead='Let’s see what they’re saying'
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
              button={button}
            />
          </div>
        ))}
      </div>
    </Article>
  );
}
