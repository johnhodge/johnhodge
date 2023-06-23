import type { Person } from '../types';
import Article from '../templates/article';

export default function Client(data: Person) {
  return (
    <Article
      headline='Employers'
      subhead='Let’s see where I’ve been'
      button={false}
      data={data}></Article>
  );
}
