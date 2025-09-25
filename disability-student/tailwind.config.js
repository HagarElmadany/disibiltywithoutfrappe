/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // مهم عشان يقرأ Vue + TSX
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF555D",   // مثال للـ color الأساسي
        secondary: "#074667",
        accent: "#F0DE7D",
        info: "#2A93D1",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
}
