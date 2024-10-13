/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'limegreen-950': '#CAFF33',
        'limegreen-900': '#D1FF4C',
        'limegreen-800': '#D8FF66',
        'limegreen-700': '#E5FF99',
        'limegreen-600': '#F2FFCC',
        'limegreen-500': '#F8FFE5',
        'limegreen-400': '#FBFFF0',
        'limegreen-300': '#FEFFFA',
        'grey-950': '#191919',
        'grey-900': '#1C1C1C',
        'grey-800': '#262626',
        'grey-700': '#333333',
        'grey-600': '#4C4C4D',
        'grey-500': '#59595A',
        'grey-400': '#656567',
        'grey-300': '#98989A',
        'grey-200': '#B3B3B3',
        'grey-100': '#BFBFBF',

        'white-1': '#E4E4E7',
        'white-2': '#F1F1F3',
        'white-3': '#F7F7F8',
        'white-4': '#FCFCFD',
      },
      backgroundColor: {
        'limegreen-950': '#CAFF33',
        'limegreen-900': '#D1FF4C',
        'limegreen-800': '#D8FF66',
        'limegreen-700': '#E5FF99',
        'limegreen-600': '#F2FFCC',
        'limegreen-500': '#F8FFE5',
        'limegreen-400': '#FBFFF0',
        'limegreen-300': '#FEFFFA',

        'grey-950': '#191919',
        'grey-900': '#1C1C1C',
        'grey-800': '#262626',
        'grey-700': '#333333',
        'grey-600': '#4C4C4D',
        'grey-500': '#59595A',
        'grey-400': '#656567',
        'grey-300': '#98989A',
        'grey-200': '#B3B3B3',
        'grey-100': '#BFBFBF',

        'white-1': '#E4E4E7',
        'white-2': '#F1F1F3',
        'white-3': '#F7F7F8',
        'white-4': '#FCFCFD',


      },
    },

  },

  plugins: [],
  darkMode: 'class'
};
