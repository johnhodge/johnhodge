import type { Person } from '../types';
import Article from '../templates/article';

export default function Tech(data: Person) {
  return (
    <Article
      id='tech'
      headline='Tech'
      subhead='Let’s see what I use'
      button={false}
      data={data}></Article>
  );
}
