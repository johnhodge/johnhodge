'use client';

import GlobalButton from '@/app/components/shared/button';
import '@/app/globals.css';
import Article from '@/app/templates/article';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Article id='error' headline='Error' subhead='Something went wrong'>
      <div className='flex flex-col gap-4'>
        <GlobalButton
          text='Try again'
          size='small'
          color='gray'
          width='fit'
          buttonType='button'
          onClick={() => reset()}
        />
      </div>
    </Article>
  );
}
