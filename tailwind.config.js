/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'RoxoPadrao': '#8257E5',
      "Roxo1": '#4e348a',
      "Roxo2": '#2d1f4e',
      'Cinza1': '#121214',
      'Cinza2': '#202024',
      'white': '#fff',
      'black': 'black',
      'BordaHeader': '#585858',
      'LinksHeader': "#8f8d8d",
    }
  },
  plugins: [],
}
