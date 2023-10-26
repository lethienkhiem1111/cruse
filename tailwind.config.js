/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C1C1C',
        'text1': '#091E42',
        'text2': '#505F79',
        'text3': '#B3BAC5',
        'neutral1': '#FAFBFC',
        'neutral2': '#F4F5F7',
        'neutral3': '#EBECF0',
        'neutral4': '#DFE1E6',
        'neutral5': '#C1C7D0',
        'error': '#BF2600',
        'warning': '#FF8B00',
        'success': '#36B37E',
        'infor': '#0065FF',

      }
    },
  },
  plugins: [],
}
