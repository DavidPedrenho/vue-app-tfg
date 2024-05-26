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
        "checkedLocal": "#08aa74",
        "accent": "#e5e089",
        "neutral": "#3d4451",
        "base-100": "#101931",
        "base-102": "#2A303C",
      },
    },
      "dim",
    ],
  },
}

