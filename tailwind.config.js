/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c2a673",
        secondary: "#0e0e0d",
        third : "#eee"
      },
      fontFamily: {
        lato: ["Lato", "sans-seri"],
      },
    },
  },
  plugins: [],
};
