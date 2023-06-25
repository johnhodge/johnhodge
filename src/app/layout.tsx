import './globals.css';
import { Inter } from 'next/font/google';
import { GetSiteMeta } from './graphql.query';
import { Person } from './types';
import { Metadata } from 'next';
import Navigation from './components/navigation';
import GetAsset from './utils/asset';
import Link from 'next/link';
import Script from 'next/script';
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
      <Script id='google-tag-manager' strategy='afterInteractive'>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P34JZK')`}
      </Script>
      <body className={inter.variable}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-P34JZK"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              ></iframe>`,
          }}
        />
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
