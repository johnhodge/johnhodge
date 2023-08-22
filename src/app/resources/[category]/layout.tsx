export const dynamicParams = false;
export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  {
    return <section className='px-2 md:px-3'>{children}</section>;
  }
}
