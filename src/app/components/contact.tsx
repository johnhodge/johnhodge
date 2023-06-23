import type { Person } from '../types';
import Article from '../templates/article';

export default function Client(data: Person) {
  return (
    <Article
      headline='Consultation'
      subhead='Let’s work together'
      button={false}
      data={data}></Article>
  );
}
