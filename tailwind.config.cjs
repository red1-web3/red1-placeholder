/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Aladin", "cursive"],
        second: ["Arima", "cursive"],
        title: ["Bulu-title", "cursive"],
      },
      colors: {
        primary: "#F5E4BC",
      },
    },
  },
  plugins: [],
};
