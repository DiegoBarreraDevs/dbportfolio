/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050f0d",
        secondary: "#aaa6c3",
        tertiary: "#102730",
        "black-100": "#0D2026",
        "black-200": "#031626",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('https://live.staticflickr.com/65535/52868055735_a5951b3d9a_h.jpg')",
      },
    },
  },
  plugins: [],
};

