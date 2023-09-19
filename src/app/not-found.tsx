import GlobalButton from './components/shared/button';
import Article from './templates/article';

export default function NotFound() {
  return (
    <Article id='error-404' headline='404' subhead='Resource not found'>
      <div className='flex flex-col gap-4'>
        <p>
          We can’t find the resource you requested. Please double check the URL
          and try again.
        </p>
        <div className='flex gap-4'>
          <GlobalButton
            text='Schedule a consultation'
            href='/#contact'
            size='small'
            color='primary'
            width='fit'
            buttonType='route'
          />
          <GlobalButton
            text='Return home'
            href='/'
            size='small'
            color='gray'
            width='fit'
            buttonType='link'
          />
        </div>
      </div>
    </Article>
  );
}
