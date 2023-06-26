/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    unoptimized: true,
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
    return [
      {
        source: '/',
        headers: [
          {
            key: 'x-whatcha-looking-for',
            value: 'i see you found the custom headers',
          },
          {
            key: 'x-brand-standards',
            value: 'https://brand.johnhodge.com',
          },
          {
            key: 'x-about-this-website',
            value: 'https://www.johnhodge.com/about-this-website',
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
