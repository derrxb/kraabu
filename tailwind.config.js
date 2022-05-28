module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#002042',
        twitter: '#1DA1F2',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
