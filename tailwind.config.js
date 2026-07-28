/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#111111',
        charcoal: '#1a1a1a',
        silver: '#c0c0c0',
        chrome: '#e6e6e6',
        burgundy: '#8b0000',
        crimson: '#660014',
      },
      fontFamily: {
        display: ['"Impact"', '"Arial Black"', 'sans-serif'],
        sans: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      backgroundImage: {
        'metallic': 'linear-gradient(135deg, #c0c0c0 0%, #e6e6e6 50%, #a0a0a0 100%)',
        'metallic-dark': 'linear-gradient(135deg, #888 0%, #c0c0c0 50%, #999 100%)',
        'burgundy-gradient': 'linear-gradient(135deg, #8b0000 0%, #660014 100%)',
      },
      textShadow: {
        'brand': '0 2px 4px rgba(0,0,0,0.5), 0 0 20px rgba(139,0,0,0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}