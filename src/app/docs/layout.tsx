export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='bg-gradient-to-b from-gray-0 from-60% to-primary-100 to-100%'>
      <article className='grid grid-cols-12 grid-rows-1 gap-4 py-16 mx-2 md:mx-3 border-b border-gray-950'>
        <aside className='hidden md:block col-span-3'>
          <div className='sticky top-32'>
            <p className='pb-4 text-xl font-black'>Concepts</p>
            {/* TODO: Get list of mdx files in the docs file to list out here by concept*/}
            <ul className='max-h-[calc(100dvh-(172px))] overflow-y-auto prose'>
              <li className='font-black pb-2'>Concept 1</li>
              <li>Page 1: Here's something that's important</li>
              <li>Page 2: Something else to consider</li>
              <li>Page 3: Another thing</li>
              <li>Page 4: More stuff about this one</li>
              <li className='font-black pb-2'>Concept 2</li>
              <li>Page 1: Here's something that's important</li>
              <li>Page 2: Something else to consider</li>
              <li>Page 3: Another thing</li>
              <li>Page 4: More stuff about this one</li>
              <li className='font-black pb-2'>Concept 3</li>
              <li>Page 1: Here's something that's important</li>
              <li>Page 2: Something else to consider</li>
              <li>Page 3: Another thing</li>
              <li>Page 4: More stuff about this one</li>
              <li className='font-black pb-2'>Concept 4</li>
              <li>Page 1: Here's something that's important</li>
              <li>Page 2: Something else to consider</li>
              <li>Page 3: Another thing</li>
              <li>Page 4: More stuff about this one</li>
              <li className='font-black pb-2'>Concept 5</li>
              <li>Page 1: Here's something that's important</li>
              <li>Page 2: Something else to consider</li>
              <li>Page 3: Another thing</li>
              <li>Page 4: More stuff about this one</li>
            </ul>
          </div>
        </aside>
        <section className='col-span-12 prose max-w-none prose-headings:font-black prose-a:no-underline md:col-span-7'>
          {children}
        </section>
        <aside className='hidden md:block col-span-2'>
          <div className='sticky top-32'>
            {/* TODO: Get list of h2/h3 in thecurrent mdx file and list here as toc*/}

            <p className='pb-4 text-xl font-black'>On this page</p>
            <ul className='max-h-[calc(100dvh-(172px))] overflow-y-auto prose'>
              <li className='font-semibold'>This is a header</li>
              <li className='text-sm pl-4'>Here's something else</li>
              <li className='text-sm pl-4'>
                This is another sub header about it
              </li>
              <li className='text-sm pl-4'>Let's not forget this</li>
              <li className='text-sm pl-4'>An lastly we got one of these</li>
              <li className='font-semibold'>
                This is another header over here
              </li>
              <li className='text-sm pl-4'>Let's not forget this</li>
              <li className='text-sm pl-4'>An lastly we got one of these</li>
              <li className='font-semibold'>This is a header</li>
              <li className='text-sm pl-4'>Here's something else</li>
              <li className='text-sm pl-4'>
                This is another sub header about it
              </li>
              <li className='text-sm pl-4'>Let's not forget this</li>
              <li className='text-sm pl-4'>An lastly we got one of these</li>
              <li className='font-semibold'>
                This is another header over here
              </li>
              <li className='text-sm pl-4'>Let's not forget this</li>
              <li className='text-sm pl-4'>An lastly we got one of these</li>
              <li className='font-semibold'>This is a header</li>
              <li className='text-sm pl-4'>Here's something else</li>
              <li className='text-sm pl-4'>
                This is another sub header about it
              </li>
              <li className='text-sm pl-4'>Let's not forget this</li>
              <li className='text-sm pl-4'>An lastly we got one of these</li>
              <li className='font-semibold'>
                This is another header over here
              </li>
              <li className='text-sm pl-4'>Let's not forget this</li>
              <li className='text-sm pl-4'>An lastly we got one of these</li>
              <li className='font-semibold'>This is a header</li>
              <li className='text-sm pl-4'>Here's something else</li>
              <li className='text-sm pl-4'>
                This is another sub header about it
              </li>
              <li className='text-sm pl-4'>Let's not forget this</li>
              <li className='text-sm pl-4'>An lastly we got one of these</li>
              <li className='font-semibold'>
                This is another header over here
              </li>
              <li className='text-sm pl-4'>Let's not forget this</li>
              <li className='text-sm pl-4'>An lastly we got one of these</li>
            </ul>
          </div>
        </aside>
      </article>
    </section>
  );
}
