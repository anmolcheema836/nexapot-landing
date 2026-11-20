/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FDFBF7', // Warm cream off-white
        primary: '#2C1E16',    // Deep espresso brown
        secondary: '#5C4A3D',  // Medium mocha brown
        accent: '#D4A373',     // Warm latte tan
        surface: '#F5EFE6',    // Soft beige
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}