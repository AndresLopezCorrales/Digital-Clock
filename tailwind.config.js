/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fnaf-4-bg': "url('./src/assets/fnaf-4-bg.jpg')",
      }

    },
  },
  plugins: [],
}
