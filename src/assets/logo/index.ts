// ロゴファイルのインポート
import logoLight from './logo-light.svg';
import logoDark from './logo-dark.svg';

export { logoLight, logoDark };

// 背景タイプに応じてロゴを取得する関数
export const getLogoForBackground = (
  backgroundType: 'light' | 'dark',
): string => {
  return backgroundType === 'light' ? logoLight : logoDark;
};
