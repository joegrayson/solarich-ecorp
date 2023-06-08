/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["CustomFont", "sans-serif"],
      },
    },
  },

  plugins: [require("daisyui")],
};
