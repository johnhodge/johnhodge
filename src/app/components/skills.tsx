import type { Person } from '../types';

export default async function Skills(data: Person) {
  return (
    <div id='skills'>
      <section className='flex min-h-dscreen flex-col justify-center p-4'>
        <h1 className='text-5xl font-black text-primary-600'>Skills section</h1>
        <p>This area is coming soon, cmon.</p>
      </section>
    </div>
  );
}
