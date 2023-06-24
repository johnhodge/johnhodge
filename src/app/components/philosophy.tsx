import type { Person } from '../types';
import Article from '../templates/article';

export default function Client(data: Person) {
  return (
    <Article
      id='philosophy'
      headline='Philosophy'
      subhead='Let’s see what I prioritize'
      button={false}
      data={data}></Article>
  );
}
