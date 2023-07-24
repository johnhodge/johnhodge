export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  {
    return (
      <section className='px-2 bg-gradient-to-b from-gray-0 from-60% to-primary-100 to-100%'>
        {children}
      </section>
    );
  }
}
