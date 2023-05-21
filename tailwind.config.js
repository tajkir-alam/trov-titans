/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-sales': "url('./src/assets/gallery7.jpg')"
      },
    },
  },
  plugins: [require("daisyui")],
}

