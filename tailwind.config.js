/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fffbf0',
          100: '#fff8e6',
          200: '#ffecc2',
          300: '#ffe0a3',
          400: '#ffd966',
          500: '#ffcc00',
          600: '#e6b800',
          700: '#b38a00',
          800: '#805c00',
          900: '#4d3600',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c3d66',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
        farsi: ['Vazirmatn', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
