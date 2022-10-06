/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "xs":"280px",
      "sm": "360px",
      "md": "410px",
      "lg": "760px",
      "xl": "1024px",
      "2xl": "1280px"
    },
    extend: {},
  },
  plugins: [],
}
