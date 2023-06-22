import type { Person } from '../types';

export default async function Clients(data: Person) {
  return (
    <div id='clients'>
      <section className='flex min-h-dscreen flex-col justify-center p-4'>
        <h1 className='text-5xl font-black text-primary-600'>
          Clients section
        </h1>
        <p>This area is coming soon, cmon.</p>
      </section>
    </div>
  );
}
