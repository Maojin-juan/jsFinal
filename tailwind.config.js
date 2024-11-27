/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {},

      fontSize: {},

      colors: {},

      fontFamily: {
        sans: ["Noto Sans TC", "sans-serif"],
      },

      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1600px",
      },

      container: {
        center: true,
        padding: "24px",
        screens: {
          sm: "564px",
          md: "744px",
          lg: "984px",
          xl: "1164px",
          "2xl": "1344px",
        },
      },
    },
  },
  plugins: [],
};
