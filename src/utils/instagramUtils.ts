/**
 * Instagram関連のユーティリティ関数
 */

export interface InstagramAccount {
  username: string;
  url: string;
  displayName: string;
  profileImageUrl?: string;
}

/**
 * Instagramアカウント情報
 */
export const INSTAGRAM_ACCOUNTS: InstagramAccount[] = [
  {
    username: 'milk.tsunagu',
    url: 'https://www.instagram.com/milk.tsunagu/',
    displayName: '山荘ミルク',
    // 実際のプロフィール画像URL
    profileImageUrl: '/images/profiles/milk-logo.jpg',
  },
  {
    username: 'tetsuhiko._.nomago',
    url: 'https://www.instagram.com/tetsuhiko._.nomago/',
    displayName: 'テツヒコ',
    // 実際のプロフィール画像URL
    profileImageUrl: '/images/profiles/tetsuhiko-profile.jpg',
  },
];

/**
 * Instagram プロフィール画像のプレースホルダー
 */
export const getInstagramProfilePlaceholder = (username: string): string => {
  // プロフィール画像が取得できない場合のプレースホルダー
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(username)}&background=405DE6&color=fff&size=80&font-size=0.33`;
};
