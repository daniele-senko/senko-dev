/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {    
      colors: {
      'coldpurple': {
        '50': '#f8f7fb',
        '100': '#f0f0f7',
        '200': '#e4e3f1',
        '300': '#d0cde5',
        '400': '#b6afd6',
        '500': '#a89ecc',
        '600': '#8574b3',
        '700': '#75629f',
        '800': '#625285',
        '900': '#50446e',
        '950': '#332c49',
      },
    },
   },
  },
  plugins: [],
}

