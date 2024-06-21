/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      body:["Roboto Mono", "monospace"],
      logo: ["Volkhov", "serif"],
      hero1:["Roboto", "sans-serif"]
    }
  },
  plugins: [],
}

