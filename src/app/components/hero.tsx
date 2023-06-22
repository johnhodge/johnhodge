import type { Person } from '../types';

export default async function Hero(data: Person) {
  return (
    <section className='flex min-h-dscreen flex-col justify-center p-4'>
      <h1 className='text-5xl font-display text-primary-600'>
        {data.firstName} {data.lastName}
      </h1>
      <p>New website coming soon.</p>
    </section>
  );
}
