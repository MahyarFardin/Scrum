/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      vs: "430px",
      sm: "480px",
      ns: "675px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      lightGray: "#cccccc",
      darkGray: "#1a1a1a",
      gray: "#6b7280",
      blue: "#3D00F5",
      lightPurple: "#855CFF",
      black: "#0D0D0D",
      white: "#F5F5F5",
    },
    extend: {},
  },
  plugins: [],
};
