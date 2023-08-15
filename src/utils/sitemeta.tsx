import { SiteMetadata } from '@/app/types';
import { Metadata } from 'next';

export function GetMetadata(param: SiteMetadata): Metadata {
  const siteName = 'John Hodge';
  const title = `${param.pageName} | ${siteName}`;
  return {
    metadataBase: new URL('https://johnhodge.com'),
    title: title,
    description: param.description,
    alternates: {
      canonical: `/${param.path}`,
    },
    openGraph: {
      title: title,
      description: param.description,
      url: `https://www.johnhodge.com`,
      siteName: siteName,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
    },
    robots: {
      index: param.index,
      follow: param.follow,
      nocache: param.cache,
      googleBot: {
        index: param.index,
        follow: param.follow,
        nocache: param.cache,
      },
    },
  };
}
