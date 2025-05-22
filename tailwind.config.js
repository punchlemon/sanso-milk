const colors = require('tailwindcss/colors');
const Color = require('color');

/** 
 * 色のバリエーションを自動生成する関数
 * @param {string} baseColor - ベースカラー（HEXコード）
 */
function generateColorVariants(baseColor) {
  const base = Color(baseColor);
  return {
    DEFAULT: baseColor,
    light: base.lighten(0.2).hex(),
    dark: base.darken(0.2).hex(),
  };
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ベースカラーだけを定義し、バリエーションは自動生成
        primary: generateColorVariants('#15120d'),
        accent: generateColorVariants('#391812'),
        accent2: generateColorVariants('#967858'),
        natural: generateColorVariants('#fff3d2'),
      },
      fontFamily: {
        sans: ['"GEN EI Koburi Mincho"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        serif: ['"GEN EI Koburi Mincho"', 'Georgia', '"Times New Roman"', 'serif'],
        mincho: ['"GEN EI Koburi Mincho"', 'serif'],
        maru: ['"GEN EI Koburi Mincho"', 'serif'],
        geneikoburi: ['"GEN EI Koburi Mincho"', 'serif'],
      },
      boxShadow: {
        'natural': '0 4px 14px -2px rgba(96, 92, 78, 0.1)',
        'natural-md': '0 6px 18px -2px rgba(96, 92, 78, 0.15)',
      },
      backgroundImage: {
        'natural-pattern': "url('/images/natural-pattern.png')",
        'paper-texture': "url('/images/paper-texture.png')",
      }
    },
  },
  plugins: [],
}