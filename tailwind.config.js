/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 山荘ミルクのブランドカラー - 自然派デザインに合わせてアースカラーを中心に再定義
        primary: {
          light: '#a7c4bc', // 明るいセージグリーン
          DEFAULT: '#5f7161', // モスグリーン
          dark: '#3c4b37', // 深い森のグリーン
        },
        accent: {
          light: '#e9dccd', // クリーム色
          DEFAULT: '#dda15e', // ハニーイエロー
          dark: '#bc6c25', // アンバー
        },
        natural: {
          light: '#f4f1ea', // オフホワイト
          DEFAULT: '#e6e1d5', // ベージュ
          dark: '#605c4e', // こげ茶
        }
      },
      fontFamily: {
        // 源暎こぶり明朝をデフォルトフォントとして設定
        sans: ['"GEN EI Koburi Mincho"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        serif: ['"GEN EI Koburi Mincho"', 'Georgia', '"Times New Roman"', 'serif'],
        mincho: ['"GEN EI Koburi Mincho"', 'serif'],
        maru: ['"GEN EI Koburi Mincho"', 'serif'],
        // 源暎こぶり明朝専用クラス
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