module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#002042',
        twitter: '#1DA1F2',
        'primary-1': '#4F46E5',
        'primary-2': '#FFBF19',
        'primary-3': '#002042',
        'primary-4': 'rgba(0, 32, 66, 0.9)',
        'neutral-1': '#E5E7EB',
        'neutral-2': '#6b7280',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
