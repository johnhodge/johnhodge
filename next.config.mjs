import remarkGfm from 'remark-gfm';
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    loader: 'custom',
    loaderFile: './loader.ts',

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/3vwma588lffy/**',
      },
    ],
  },
  async headers() {
    const CSP = `
    report-uri https://hodge.report-uri.com/r/d/csp/reportOnly
    default-src 'none';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com *.hotjar.com *.hs-scripts.com *.hscollectedforms.net *.hscollectedforms.com *.hs-analytics.net *.hs-banner.com *.doubleclick.net analytics.google.com *.cloudflareinsights.com;
    connect-src 'self' *.mixpanel.com analytics.google.com *.doubleclick.net *.g.doubleclick.net *.hscollectedforms.net *.hotjar.com *.hotjar.io *.cloudflareinsights.com;
    font-src 'self';
    style-src-elem 'self';
    style-src 'unsafe-inline';
    img-src 'self' images.ctfassets.net *.hubspot.com *.google.com *.googletagmanager.com forms.hsforms.com data:;
    base-uri 'self';
    form-action 'self';
    `;
    return [
      {
        source: '/',
        headers: [
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Content-Security-Policy-Report-Only',
            value: CSP.replace(/\s{2,}/g, ' ').trim(),
          },
          {
            key: 'Report-To',
            value: `{group: 'default', max_age: 31536000, endpoints: [{ url: 'https://hodge.report-uri.com/a/d/g' }],include_subdomains: true,}`,
          },
          {
            key: 'x-whatcha-looking-for',
            value: 'i see you found the custom headers',
          },
          {
            key: 'x-powered-by',
            value: 'John Hodge',
          },
          {
            key: 'x-resource-docs',
            value: 'https://www.johnhodge.com/resources/docs',
          },
          {
            key: 'x-resource-case-studies',
            value: 'https://www.johnhodge.com/resources/case-studies',
          },
        ],
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
  },
});
export default withMDX(nextConfig);
