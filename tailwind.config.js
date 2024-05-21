/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx,vue}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Quicksand', 'Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [ require('daisyui'),],

  daisyui: {
    themes: [
      {
      mytheme: {
        "primary": "#1C82AD",
        "secondary": "#03C988",
        "accent": "#FFC374",
        "neutral": "#3d4451",
        "base-100": "#16213E",
        "base-102": "#2A303C",
      },
    },
      "dim",
    ],
  },
}

