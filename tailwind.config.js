/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "variable-collection-color": "var(--variable-collection-color)",
      },
      fontFamily: {
        "desktop-main-header-h1": "var(--desktop-main-header-h1-font-family)",
      },
    },
  },
  plugins: [],
};