/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-brown': '#8B4513',
        'primary-orange': '#FF8C42',
        'primary-cream': '#FFF8DC',
        'water-blue': '#4A90E2',
        'grass-green': '#7CB342',
        'warm-yellow': '#FFD54F',
        'text-dark': '#2C1810',
        'text-light': '#6B5B73',
        'background': '#FDFBF8',
      },
    },
  },
  plugins: [],
};
