/**
 * サイト全体で使用する色の定数
 * Tailwind CSS のクラス名を指定
 */

// セクションタイプの型定義
export type SectionType = 'dark' | 'light';

// ダークセクション用の色設定（背景が濃い）
export const DARK_SECTION = {
  // 背景色
  BG: {
    PRIMARY: "bg-primary",
    PRIMARY_DARK: "bg-primary-dark",
    PRIMARY_LIGHT: "bg-primary-light", 
  },
  // 文字色
  TEXT: {
    DEFAULT: "text-natural-light",
    MUTED: "text-natural-light/70",
    SEMI_MUTED: "text-natural-light/80",
    SLIGHT_MUTED: "text-natural-light/90",
  },
  // アクセント色
  ACCENT: {
    DEFAULT: "text-accent",
    HOVER: "hover:text-accent-light",
    BG: "bg-accent",
    BG_HOVER: "hover:bg-accent-light",
  },
  // 第二アクセント色を追加
  ACCENT2: {
    DEFAULT: "text-accent2",
    HOVER: "hover:text-accent2-light",
    BG: "bg-accent2",
    BG_HOVER: "hover:bg-accent2-light",
  },
  // オーバーレイ
  OVERLAY: {
    LIGHT: "bg-black/30",
    DARK: "bg-black/80",
  },
  // グラデーション
  GRADIENT: {
    HERO: "bg-gradient-to-t from-black/80 via-black/20 to-transparent",
  }
};

// ライトセクション用の色設定（背景が薄い）
export const LIGHT_SECTION = {
  // 背景色
  BG: {
    PRIMARY: "bg-natural-light",
    PRIMARY_DARK: "bg-natural",
    PRIMARY_LIGHT: "bg-white", 
  },
  // 文字色
  TEXT: {
    DEFAULT: "text-primary-dark",
    MUTED: "text-primary/70",
    SEMI_MUTED: "text-primary/80",
    SLIGHT_MUTED: "text-primary/90",
  },
  // アクセント色
  ACCENT: {
    DEFAULT: "text-accent-dark",
    HOVER: "hover:text-accent",
    BG: "bg-accent-dark",
    BG_HOVER: "hover:bg-accent",
  },
  // 第二アクセント色を追加
  ACCENT2: {
    DEFAULT: "text-accent2-dark",
    HOVER: "hover:text-accent2",
    BG: "bg-accent2-dark",
    BG_HOVER: "hover:bg-accent2",
  },
  // オーバーレイ
  OVERLAY: {
    LIGHT: "bg-primary/20",
    DARK: "bg-primary/40",
  },
  // グラデーション
  GRADIENT: {
    HERO: "bg-gradient-to-t from-primary/50 via-primary/20 to-transparent",
  }
};

// デフォルトの色設定（互換性のため残しておく）
export const COLORS = DARK_SECTION;

// セクションタイプに基づいて色を取得する関数
export const getSectionColors = (type: SectionType) => {
  return type === 'dark' ? DARK_SECTION : LIGHT_SECTION;
};

/**
 * フォント関連の定数
 */
export const FONTS = {
  SERIF: "font-serif",
  SANS: "font-sans",
  MINCHO: "font-mincho",
  MARU: "font-maru",
  GENEIKOBURI: "font-geneikoburi"
};

/**
 * セクションに基づいたスタイルの取得
 * @param type セクションタイプ
 */
export const getSectionStyles = (type: SectionType) => {
  const colors = getSectionColors(type);
  
  return {
    HEADING: {
      PRIMARY: `${FONTS.SERIF} ${colors.TEXT.DEFAULT} leading-relaxed tracking-wider`,
      SECONDARY: `${FONTS.SERIF} ${colors.TEXT.DEFAULT} mb-6 lg:mb-8 leading-relaxed tracking-wider`
    },
    SUBTITLE: `${colors.TEXT.MUTED} mb-2 tracking-wider`,
    PARAGRAPH: `${colors.TEXT.SLIGHT_MUTED} leading-relaxed`,
    BUTTON: {
      PRIMARY: `${colors.ACCENT.BG} ${colors.ACCENT.BG_HOVER} ${colors.TEXT.DEFAULT} transition-colors shadow-lg px-8 py-3`,
      SECONDARY: `${colors.BG.PRIMARY} hover:${colors.BG.PRIMARY_LIGHT} ${colors.TEXT.DEFAULT} transition-colors shadow-lg px-8 py-3`
    }
  };
};

// デフォルトのスタイル（互換性のため残しておく）
export const STYLES = getSectionStyles('dark');