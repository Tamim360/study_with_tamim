/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroBg: "url('https://tailwindcss.com/_next/static/media/hero@75.b2469a49.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
}
