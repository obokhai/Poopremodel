/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  theme: {
    colors: {
      'lightgreen' : '#f1fef4',
      'white': '#ffffff',
      'neon': '#00ed63',
      'linkcolor' : '#16DB32',
      'darkblue' : '#134468',
      'altblue' : "#022B69",
      'grey' :'#6c6c6c',
      'lightgrey':'#F7F7F7',
      'darkgrey':'#006772'
    }
  },
  plugins: [],
};
