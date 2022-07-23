/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        background: '#FAF4EB'
      },
      screens: {
        'xs': '400px'
      }
    },
  },
  plugins: [],
}
