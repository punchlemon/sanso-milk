/**
 * 画像の縦横比を計算する関数
 * 
 * @param width 画像の幅
 * @param height 画像の高さ
 * @returns フォーマットされた縦横比の文字列 (例: "16:9")
 */
export const calculateAspectRatio = (width: number, height: number): string => {
  // 最大公約数を計算
  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };
  
  const divisor = gcd(width, height);
  return `${width / divisor}:${height / divisor}`;
};

/**
 * アニメーションの進行度（%）を計算する
 * 
 * @param elapsedTime 経過時間（ミリ秒）
 * @param cycleDuration 1サイクルの時間（ミリ秒）
 * @returns 0-100の間の進行度
 */
export const calculateProgress = (elapsedTime: number, cycleDuration: number): number => {
  return (elapsedTime % cycleDuration) / cycleDuration * 100;
};

/**
 * 現在表示すべき画像のインデックスを決定する
 * 
 * @param progress アニメーションの進行度（%）
 * @param totalImages 画像の総数
 * @returns 表示すべき画像のインデックス
 */
export const determineImageIndex = (progress: number, totalImages: number): number => {
  // 各画像に均等に時間を割り当てる
  const segmentSize = 100 / totalImages;
  return Math.floor(progress / segmentSize);
};

/**
 * スライドアニメーションのスタイルを生成する
 * 
 * @param currentIndex 現在の画像インデックス
 * @param totalImages 画像の総数
 * @returns CSSのtransform属性用の文字列
 */
export const generateSlideStyle = (currentIndex: number, totalImages: number): string => {
  // スライドの横移動量を計算（-100%は1枚分の左移動）
  return `translateX(-${currentIndex * 100}%)`;
};