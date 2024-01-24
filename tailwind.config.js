/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
        'white': '#F1F1F1',
        'zinc': '#282828',
        'zinc-text': '#575757',
        'red-text': '#F56565',
        'bg-task': '#201F1F',
        'black': '#00000040%'
    },
  },
  plugins: [],
}

