/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "red": {
        DEFAULT: "#FF494D",
        100: "##F5E7E3",
        200: "#F8A1A3",
        300: "#D9CED8",
        400: "#b91c1c",
      },
      "slate": {
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#F2F4F5",
        400: "#ECEEF0",
        500: "#64748b",
        600: "#475569",
        700: "#cbd5e1",
        800: "#94a3b8",
      },
      "gray": {
        DEFAULT: "#9DAFBD",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#A9A9A9",
        800: "#B3B7B8",
      },
      "purple": "#391D38",
      "white" : "#ffffff",
      "black" : {
        DEFAULT: "#000000",
        100: "#391D38",
        200: "#212121",
        300: "#283646",
      }
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif', ...defaultTheme.fontFamily.sans],
      'rubik': ['Rubik', 'sans-serif'],
    },
    backgroundImage : {
      'signUp' : "url('/images/ver.jpg')",
    },
  },
  plugins: [
  ],
}
