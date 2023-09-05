import Navigation from '@/app/components/navigation';
import '@/app/globals.css';
import GetAsset from '@/utils/asset';
import { Fira_Code, Inter } from 'next/font/google';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from '@/app/components/loading';

const inter = Inter({ subsets: ['latin'], variable: '--inter' });
const firaCode = Fira_Code({ subsets: ['latin-ext'], variable: '--firaCode' });
export const metadata: Metadata = {
  metadataBase: new URL('https://johnhodge.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${firaCode.variable} antialiased`}>
      <Script id='google-tag-manager' strategy='afterInteractive'>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P34JZK')`}
      </Script>
      <body>
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
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <footer className='flex justify-between items-center p-4 bg-gray-0 gap-2'>
          <div>
            ©{new Date().getFullYear()}{' '}
            <Link href='/' title='Go to John’s website'>
              John Hodge
            </Link>
          </div>
          <div className={'w-4'}>
            <Link href='/'>
              <GetAsset
                assetId='6rZXb7onE0YWUMdADLDYfW'
                figcaption={false}
                priority={false}
              />
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
