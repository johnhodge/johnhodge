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
    return [
      {
        source: '/',
        headers: [
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
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
