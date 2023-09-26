import { SiteMetadata } from '@/app/types';
import { Metadata } from 'next';

const domain =
  process.env.VERCEL_ENV === 'development'
    ? `http://192.168.0.19:${process.env.PORT || 8800}`
    : `https://${process.env.VERCEL_URL}`;
export function GetMetadata(param: SiteMetadata): Metadata {
  const siteName = 'John Hodge';
  const title = `${param.pageName} | ${siteName}`;
  return {
    metadataBase: new URL(
      domain ?? `http://192.168.0.19:${process.env.PORT || 8800}`
    ),
    title: title,
    description: param.description,
    alternates: {
      canonical: `/${param.path}`,
    },
    openGraph: {
      title: title,
      description: param.description,
      url: domain,
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
    manifest: `${domain}/manifest.json`,
  };
}
