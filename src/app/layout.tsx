import './globals.css';
import { Inter } from 'next/font/google';
import { GetSiteMeta } from './graphql.query';
import { Person } from './types';
import { Metadata } from 'next';
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
    <html lang='en'>
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
