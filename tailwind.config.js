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
        display: ['var(--inter)', { fontVariationSettings: '"wght" 900' }],
      },
      minHeight: {
        dscreen: '100dvh',
      },
    },
    colors: {
      white: {
        0: '#ffffff',
        50: colors.slate['50'],
        100: colors.slate['100'],
        200: colors.slate['200'],
        300: colors.slate['300'],
        400: colors.slate['400'],
      },
      black: {
        500: colors.slate['500'],
        600: colors.slate['600'],
        700: colors.slate['700'],
        800: colors.slate['800'],
        900: colors.slate['900'],
        950: colors.slate['950'],
        1000: '#000000',
      },
      primary: colors.emerald,
      secondary: colors.orange,
    },
  },
  plugins: [],
};
