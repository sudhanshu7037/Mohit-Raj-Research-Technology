/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        houschka: ['"Houschka-Medium"', 'sans-serif'],
      },
    },
  },
  plugins: [ 
    
  ], 
}