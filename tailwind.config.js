/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            custom: ["CustomFont", "sans-serif"], // Add fallback
          },
      },
    },
    plugins: [require('tailwind-scrollbar-hide')],
  }