import type { Person } from '../types';
import Article from '../templates/article';
import GlobalCard from './shared/card';
import type { ButtonSettings } from './shared/button';

export default function Client(data: Person) {
  const button: ButtonSettings = {
    text: 'Read more',
    size: 'small',
    width: 'fit',
    color: 'gray',
    link: '/#contact',
  };
  return (
    <Article
      headline='Clients'
      subhead="See who I've helped"
      button={false}
      data={data}>
      <GlobalCard
        logo={data.technology.items[0].icon}
        icon={data.skills.items[0].icon}
        header='Header'
        subheader='Subheader'
        shortDescription='Try to keep headline under 30 characters.'
        longDescription='Try to keep headline under 60 characters.'
        button={button}
        verticalLine={true}
        horizontalLine={true}
      />
    </Article>
  );
}
