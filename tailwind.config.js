/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 山荘ミルクのブランドカラーをここで定義
        primary: {
          light: '#8ecae6',
          DEFAULT: '#219ebc', 
          dark: '#023047',
        },
        accent: {
          light: '#ffb703',
          DEFAULT: '#fb8500',
          dark: '#d62828',
        },
        natural: {
          light: '#f7f7f2',
          DEFAULT: '#e6e6da',
          dark: '#606c38',
        }
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
        serif: ['"Noto Serif JP"', 'serif'],
      },
    },
  },
  plugins: [],
}