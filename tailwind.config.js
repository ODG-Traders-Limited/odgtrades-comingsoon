/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandGold: '#F3A92C',
        brandDark: '#050505',
        brandCard: '#121212',
      }
    },
  },
  plugins: [],
}
