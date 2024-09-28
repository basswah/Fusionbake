/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c2a673",
        secondary: "#0e0e0d",
        lightCololr: "#eee",
        cardBg: "#1a1a1a",
      },
      fontFamily: {
        lato: ["Lato", "sans-seri"],
      },
    },
  },
  plugins: [],
};
