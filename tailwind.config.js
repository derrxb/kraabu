import forms from '@tailwindcss/forms';
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx, mdx}',
    './ui/**/*.{js,jsx,ts,tsx, mdx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', ...fontFamily.sans],
        serif: ['Raleway', ...fontFamily.serif],
      },
      colors: {
        brand: '#002042',
        twitter: '#1DA1F2',
        'primary-1': '#4F46E5',
        'primary-2': '#FFBF19',
        'primary-3': '#002042',
        'primary-4': 'rgba(0, 32, 66, 0.9)',
        'neutral-1': '#E5E7EB',
        'neutral-2': '#6b7280',
        'ekyash-1': '#39ae49',
        'ekyash-2': '#2d8b3a',
        'digi-1': '#CF2C1E',
        'digi-2': '#B2261A',
      },
    },
  },
  plugins: [forms],
};
