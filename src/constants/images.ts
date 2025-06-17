// サイト全体で使用される画像パスを管理
import { logoLight, logoDark } from '../assets/logo';

export const siteImages = {
  // スライダー画像
  slider: [
    '/images/slider/image1.jpg',
    '/images/slider/image2.jpg',
    '/images/slider/image3.jpg',
    '/images/slider/image4.jpg',
    '/images/slider/image5.jpg',
    '/images/slider/image6.jpg',
  ],

  // コンセプト画像
  concept: ['/images/concept/image1.jpg', '/images/concept/image2.jpg'],

  // 食事画像
  food: ['/images/food/image1.jpg', '/images/food/image2.jpg'],

  // 宿泊施設画像
  lodging: [
    '/images/lodging/header.jpg',
    '/images/lodging/east/main.jpg',
    '/images/lodging/west/main.jpg',
  ],

  // アクセス画像
  access: [
    '/images/access/car_window.jpg',
    '/images/access/map.jpg',
    '/images/access/road.jpg',
    '/images/access/summer_sky.jpg',
  ],

  // プロフィール画像
  profiles: [
    '/images/profiles/milk-logo.jpg',
    '/images/profiles/tetsuhiko-profile.jpg',
  ],

  // ロゴ画像（実際に存在するもののみ）
  logos: [
    logoLight, // 明るい背景用（黒いロゴ）
    logoDark, // 暗い背景用（白いロゴ）
    '/assets/logo/favicon.svg', // ファビコン
  ],
};

// ロゴを用途別に取得する関数
export const getLogoForBackground = (
  backgroundType: 'light' | 'dark',
  size: 'logo' | 'favicon' = 'logo',
): string => {
  if (size === 'logo') {
    return backgroundType === 'light'
      ? logoLight // 明るい背景 → 黒いロゴ
      : logoDark; // 暗い背景 → 白いロゴ
  } else {
    // ファビコンの場合はpublicフォルダから
    return '/assets/logo/favicon.svg';
  }
};

// 特定のページで使用される画像を取得
export const getPageImages = (pageName: string): string[] => {
  switch (pageName) {
    case 'home':
      return [
        ...siteImages.slider,
        ...siteImages.concept,
        ...siteImages.food,
        ...siteImages.profiles,
      ];
    case 'lodging':
      return [...siteImages.lodging];
    case 'access':
      return [...siteImages.access];
    default:
      return [];
  }
};

// 全ての画像パスを取得
export const getAllImages = (): string[] => {
  return [
    ...siteImages.slider,
    ...siteImages.concept,
    ...siteImages.food,
    ...siteImages.lodging,
    ...siteImages.access,
    ...siteImages.profiles,
    ...siteImages.logos,
  ];
};

// 重要な画像（最初に読み込むべき画像）を取得
export const getCriticalImages = (): string[] => {
  return [
    logoLight, // ローディング画面用（明るい背景）
    logoDark, // ダークモード用
    '/assets/logo/favicon.svg', // ファビコン
    ...siteImages.slider.slice(0, 2), // 最初の2枚のみに削減
  ];
};
