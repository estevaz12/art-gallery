/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-outfit)'],
        heading: ['var(--font-shoulders)'],
      },
      colors: {
        gold: '#D5966C',
        black: '#151515',
        grey: '#444444',
        white: '#FFFFFF',
      },
      lineHeight: {
        88: '5.5rem',
        70: '4.375rem',
        50: '3.125rem',
      },
    },
  },
  plugins: [],
};
