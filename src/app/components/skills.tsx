import type { Person } from '../types';
import Article from '../templates/article';

export default function Client(data: Person) {
  return (
    <Article
      id='skills'
      headline='Skills'
      subhead='Let’s see what I know'
      button={false}
      data={data}></Article>
  );
}
