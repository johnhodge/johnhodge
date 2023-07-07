/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    loader: 'custom',
    loaderFile: './loader.js',

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
    script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com *.hotjar.com *.hs-scripts.com *.hscollectedforms.net *.hscollectedforms.com *.hs-analytics.net *.hs-banner.com *.doubleclick.net analytics.google.com;
    connect-src 'self' *.mixpanel.com analytics.google.com *.hscollectedforms.net;
    font-src 'self';
    style-src-elem 'self';
    style-src 'unsafe-inline';
    img-src 'self' images.ctfassets.net *.hubspot.com *.google.com forms.hsforms.com data:;
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
        ],
      },
    ];
  },
};

module.exports = nextConfig;
