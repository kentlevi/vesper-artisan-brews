/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./*.vue",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0C0806',
          surface: '#1A1410',
          surfaceLight: '#2D241E',
          gold: '#C5A059',
          goldHover: '#A38448',
          text: '#F5E6D3',
          muted: '#8B7D71'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
