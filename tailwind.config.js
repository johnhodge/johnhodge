/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        emoji: [
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        mono: ['var(--firaCode)'],
        sans: ['var(--inter)'],
      },
      spacing: {
        icon: '3rem',
      },
      minHeight: {
        dscreen: '100dvh',
      },
      maxHeight: {
        dscreen: '100dvh',
        '50-dscreen': '50dvh',
        '50-screen': '50vh',
      },
      minWidth: {
        icon: '3rem',
      },
      maxWidth: {
        icon: '3rem',
      },
      colors: {
        gray: {
          0: '#ffffff',
          50: colors.slate['50'],
          100: colors.slate['100'],
          200: colors.slate['200'],
          300: colors.slate['300'],
          400: colors.slate['400'],
          500: colors.slate['500'],
          600: colors.slate['600'],
          700: colors.slate['700'],
          800: colors.slate['800'],
          900: colors.slate['900'],
          950: colors.slate['950'],
          1000: '#000000',
        },
        primary: colors.blue,
        secondary: colors.orange,
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
