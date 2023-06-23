import type { Person } from '../types';
import Article from '../templates/article';

export default function Client(data: Person) {
  return (
    <Article
      headline='Clients'
      subhead="See who I've helped"
      button={false}
      data={data}>
      <p>Hey this needs to be under the main hgroup</p>
    </Article>
  );
}
