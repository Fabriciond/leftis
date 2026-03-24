/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#101720",
        secondary: "#a4d8ff",
      },
      fontFamily: {
        sans: ['"Open Sans"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
