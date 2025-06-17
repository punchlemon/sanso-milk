import React, { useEffect } from 'react';
import type { ImageSliderProps } from '../types/imageSliderTypes';
import useImageSliderAnimation from '../hooks/useImageSliderAnimation';
import useImageSliderNavigation from '../hooks/useImageSliderNavigation';
import { SLIDER_TIMING } from './ImageSlider/ImageSliderConstants';

/**
 * イメージスライダーコンポーネント
 *
 * 各画像は以下のように表示されます:
 * - フェードイン + ズームアウト (4秒)
 * - ズームアウト継続 (3秒)
 * - フェードアウト + ズームアウト継続 (4秒) + 次の画像フェードイン
 *
 * 全体で11秒のサイクルです。
 * 画像は表示中（11秒間）ずっとズームアウトし続けます。
 */
const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  autoPlay = true,
  showArrows = true,
  showIndicators = true,
  className = '',
  backgroundColor = 'transparent',
  startAnimation = true,
}) => {
  // SLIDER_TIMINGからアニメーションのタイミング設定を取得
  const TIMING = SLIDER_TIMING;

  // カスタムフックを使用
  const {
    imageZoomLevels,
    imageOpacityLevels,
    startZoomAnimation,
    animateOpacity,
    resetOpacity,
  } = useImageSliderAnimation({ images, timing: TIMING });

  const {
    currentImageIndex,
    previousImageIndex,
    goToNextImage,
    goToPreviousImage,
    goToImage,
    isTransitioning,
    pauseAutoPlay,
    resumeAutoPlay,
  } = useImageSliderNavigation({
    images,
    timing: TIMING,
    autoPlay: autoPlay && startAnimation,
  });

  // 初回マウント: 全画像の不透明度を0→初期画像をフェードインさせ、ズームを開始
  useEffect(() => {
    if (!startAnimation) return;

    // 全画像透明化
    resetOpacity([]);
    // 初期画像フェードイン 0→0
    animateOpacity(0, 0);
    // 初期画像ズーム開始
    startZoomAnimation(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startAnimation]);

  // 画像切り替え時: 新しい画像のズームを開始し、旧→新のフェード
  useEffect(() => {
    if (previousImageIndex === currentImageIndex) return;
    // 新画像ズーム開始
    startZoomAnimation(currentImageIndex);
    // フェードアウト/イン
    animateOpacity(previousImageIndex, currentImageIndex);
  }, [
    currentImageIndex,
    previousImageIndex,
    startZoomAnimation,
    animateOpacity,
  ]);

  return (
    <div
      className={`relative overflow-hidden w-full h-full ${className}`}
      style={{ backgroundColor }}
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      {/* 画像表示領域 */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover`}
            style={{
              backgroundImage: `url(${image})`,
              opacity: imageOpacityLevels[index] ?? 0,
              transform: `scale(${imageZoomLevels[index] || TIMING.ZOOM_START})`,
              zIndex:
                index === previousImageIndex && isTransitioning
                  ? 2
                  : index === currentImageIndex
                    ? 1
                    : 0,
            }}
          />
        ))}
      </div>

      {/* 矢印ナビゲーション */}
      {showArrows && (
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={goToPreviousImage}
            className="bg-white/30 backdrop-blur-sm p-2 rounded-full hover:bg-white/50 transition-colors disabled:opacity-50 disabled:pointer-events-none"
            disabled={isTransitioning}
            aria-label="前の画像"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNextImage}
            className="bg-white/30 backdrop-blur-sm p-2 rounded-full hover:bg-white/50 transition-colors disabled:opacity-50 disabled:pointer-events-none"
            disabled={isTransitioning}
            aria-label="次の画像"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}

      {/* インジケーター */}
      {showIndicators && (
        <div className="absolute bottom-4 left-0 right-0 flex justify中心 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentImageIndex
                  ? 'bg-white/90 scale-110'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              disabled={isTransitioning || index === currentImageIndex}
              aria-label={`${index + 1}枚目の画像に移動`}
              aria-current={index === currentImageIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
