/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      white: colors.white,
      gray: colors.gray,
      fuchsia: "#E74B7E",
      navy_blue: "#1a253b",
      light_blue: "#54c6ff",
      blue: "#316bf4",
      green: "#0a3105",
    },
    extend: {},
  },
  plugins: [],
}

