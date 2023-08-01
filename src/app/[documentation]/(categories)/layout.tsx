import { Metadata } from 'next';

export async function generateMetadata() {
  const metadata: Metadata = {
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        nocache: true,
      },
    },
  };

  return metadata;
}

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  {
    return <section className='px-2 md:px-3'>{children}</section>;
  }
}
