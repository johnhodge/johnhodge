import type { Person } from '../types';
import Article from '../templates/article';

export default function Client(data: Person) {
  return (
    <Article
      id='testimonials'
      headline='Testimonials'
      subhead='Let’s see what they’re saying'
      button={false}
      data={data}></Article>
  );
}
