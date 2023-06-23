import type { Person } from '../types';
import Article from '../templates/article';

export default function Client(data: Person) {
  return (
    <Article
      headline='Tech'
      subhead='Let’s see what I use'
      button={false}
      data={data}></Article>
  );
}
