import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        'primary': '#ffb900',
        'primary-light': '#E9CE5D', // Seems the same as primary, adjust if needed
        'primary-dark': '#c4981f8e',
      
        'secondary-light': '#ffb900', // Seems the same as primary, adjust if necessary
        'secondary-dark': '#111122',
        'transparent-dark':'#0f0f23b3',
        'tertiary-light': '#2998ff',
        'tertiary-dark': '#5643fa',
        'green ': '#E9CE5D',

        'grey-light-1': '#a9a9b7',
        'grey-light-2': '#eee',
 
        'grey-dark': '#777',
        'grey-dark-2': '#999',
        'grey-dark-3': '#333',
 
        'white': '#fff',
        'black': '#000', 
        'my-green' :'#008000'
      },
      minWidth: ({ theme }) => ({
        ...theme('width'),
      }),
      maxWidth: ({ theme }) => ({
        ...theme('width'),
      }),
      minHeight: ({ theme }) => ({
        ...theme('height'),
      }),
      maxHeight: ({ theme }) => ({
        ...theme('height'),
      }),
      fontFamily: {
        'dancing-script': ['"Dancing Script"', 'cursive'],
        'itner': ['"Inter"', 'sans-serif'],

      },
    },
  },
  plugins: [],
}

export default config;
