import type { Person } from '../types';

export default async function Tech(data: Person) {
  return (
    <div id='tech'>
      <section className='flex min-h-dscreen flex-col justify-center p-4'>
        <h1 className='text-5xl font-display text-primary-600'>Tech section</h1>
        <p>This area is coming soon, cmon.</p>
      </section>
    </div>
  );
}
