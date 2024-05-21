/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx,vue}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Quicksand', 'Nunito', 'sans-serif'],
        // Puedes añadir más fuentes aquí
      },
    },
  },
  plugins: [ require('daisyui'),],

  daisyui: {
    themes: [
      {
      mytheme: {
        "primary": "#a991f7",
        "secondary": "#9EDE43",
        "accent": "#D85251",
        "neutral": "#3d4451",
        "base-100": "#2A303C",
      },
    },
      "dim",
    ],
  },
}

