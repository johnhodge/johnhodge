import type { Person } from '../types';

export default async function Philosophy(data: Person) {
  return (
    <div id='philosophy'>
      <section className='flex min-h-dscreen flex-col justify-center p-4'>
        <h1 className='text-5xl font-display text-primary-600'>
          Philosophy section
        </h1>
        <p>This area is coming soon, cmon.</p>
      </section>
    </div>
  );
}
