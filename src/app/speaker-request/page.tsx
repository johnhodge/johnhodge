import Article from '../templates/article';
import ContactForm from './components/form';
import GetAsset from '../utils/asset';

export default async function Client() {
  return (
    <Article
      id='request'
      headline='Speaker request'
      subhead='Let’s talk about it'>
      <div className='grid grid-cols-6 gap-9 items-start'>
        <div className='col-span-6 md:col-span-4'>
          <ContactForm />
        </div>
        <div className='max-md:hidden md:col-span-2'>
          <GetAsset assetId='27lFnY64G3wcXxrR1mv2dA' figcaption={true} />
        </div>
      </div>
    </Article>
  );
}
