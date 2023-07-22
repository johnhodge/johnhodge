export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  {
    return (
      <section className='mx-2 border-b border-b-slate-800'>{children}</section>
    );
  }
}
