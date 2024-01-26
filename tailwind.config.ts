import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        html: ['Montserrat, sans-serif'],
      },
      colors: {
        main: '#ec7a28',
        mainLight: '#f5934c',
        second: '#707070',
        transparent: 'transparent',
        white: 'white',
        black: '#272727',
        beige: '#e0e0e0',
        orange: {
          400: '#facc15',
          500: '#eab308',
          600: '#d97706',
        },
        green: {
          400: 'rgb(163 230 530);',
          500: 'rgb(132 204 22)',
          600: 'rgb(101 163 13)',
        },
        gray: {
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
        },
      },
      screens: {
        '2k': { min: '1439px' },
        // => @media (min-width: 1440px) { ... }

        '2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        lg: { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        md: { max: '773px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '639px' },
        // => @media (max-width: 639px) { ... }
        lp: { max: '320px' },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
