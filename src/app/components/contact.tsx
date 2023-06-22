import type { Person } from '../types';

export default async function Contact(data: Person) {
  return (
    <div id='contact'>
      <section className='flex min-h-dscreen flex-col justify-center p-4'>
        <h1 className='text-5xl font-display text-primary-600'>
          Contact section
        </h1>
        <p>This area is coming soon, cmon.</p>
      </section>
    </div>
  );
}
