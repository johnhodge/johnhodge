import './globals.css';
import { Inter } from 'next/font/google';
import { GetSiteMeta } from './graphql.query';
import { Person } from './types';
import { Metadata } from 'next';
import Navigation from './components/navigation';
import GetAsset from './utils/asset';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'], variable: '--inter' });

export type Headers = {
  Authorication: string;
  'Content-Type': string;
};

const headers = {
  Authorization: `Bearer ${process.env.PUBLIC_CONTENTFUL_CONTENT_DELIVERY_TOKEN}`,
  'Content-Type': 'application/json',
};

export async function generateMetadata() {
  const graphql = JSON.stringify({
    query: GetSiteMeta,
    variables: {},
  });
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.PUBLIC_CONTENTFUL_SPACE_ID}/environments/staging`,
    {
      method: 'POST',
      body: graphql,
      headers: headers,
    }
  );
  const json = await response.json();
  const data: Person = json.data.person;

  const metadata: Metadata = {
    title: `${data.firstName} ${data.lastName}`,
    description: data.headline,
    openGraph: {
      type: 'website',
      url: 'https://www.johnhodge.com',
      title: `${data.firstName} ${data.lastName}`,
      description: data.headline,
      siteName: `${data.firstName} ${data.lastName}`,
    },
  };

  return metadata;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='antialiased'>
      <body className={inter.variable}>
        <Navigation />
        {children}
        <footer className='flex justify-between p-2 bg-gray-0'>
          <div>
            ©{new Date().getFullYear()}{' '}
            <Link
              href='/'
              title="Go to John's website"
              className='underline decoration-dotted'>
              John Hodge
            </Link>
          </div>
          <div className={'w-6'}>
            <GetAsset assetId='6rZXb7onE0YWUMdADLDYfW' />
          </div>
        </footer>
      </body>
    </html>
  );
}
