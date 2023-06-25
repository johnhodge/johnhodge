import type { Person } from '../types';
import Article from '../templates/article';
import ContactForm from './components/form';
import GetAsset from '../utils/asset';

export default async function Client(data: Person) {
  return (
    <Article
      id='request'
      headline='Speech request'
      subhead='Let’s talk about it'
      data={data}>
      <div className='grid grid-cols-6 gap-9 items-start'>
        <div className='col-span-6 md:col-span-4'>
          <ContactForm />
        </div>
        <div className='max-md:hidden md:col-span-2'>
          <GetAsset assetId='27lFnY64G3wcXxrR1mv2dA' />
        </div>
      </div>
    </Article>
  );
}
