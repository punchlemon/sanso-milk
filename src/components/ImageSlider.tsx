import React, { useEffect, useState, useRef } from 'react';
import type { ImageSliderProps } from '../types/imageSliderTypes';
import useImageSliderAnimation from '../hooks/useImageSliderAnimation';
import useImageSliderNavigation from '../hooks/useImageSliderNavigation';
import { SLIDER_TIMING } from './ImageSlider/ImageSliderConstants';
import DebugOverlay from './ImageSlider/DebugOverlay';

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
  debug = false,
}) => {
  // SLIDER_TIMINGからアニメーションのタイミング設定を取得
  const TIMING = SLIDER_TIMING;

  // デバッグ用のタイマー状態
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [cycleProgress, setCycleProgress] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  // Per-image animation start times
  const imageFadeStartTimes = useRef<Record<number, number>>({});
  const imageZoomStartTimes = useRef<Record<number, number>>({});

  // カスタムフックを使用
  const {
    imageZoomLevels,
    imageOpacityLevels,
    startZoomAnimation,
    animateOpacity,
    resetOpacity
  } = useImageSliderAnimation({ images, timing: TIMING, debug });
  
  const {
    currentImageIndex,
    previousImageIndex,
    goToNextImage,
    goToPreviousImage,
    goToImage,
    isTransitioning,
    pauseAutoPlay,
    resumeAutoPlay
  } = useImageSliderNavigation({ images, timing: TIMING, debug, autoPlay });

  // 画像名取得ヘルパー
  const getImageName = (index: number) => images[index]?.split('/').pop() || '';
  const nextImageIndex = (currentImageIndex + 1) % images.length;
  const nextImageName = getImageName(nextImageIndex);

  // 初回マウント: 全画像の不透明度を0→初期画像をフェードインさせ、ズームを開始
  useEffect(() => {
    // 全画像透明化
    resetOpacity([]);
    // 初期画像フェードイン 0→0
    animateOpacity(0, 0);
    // 初期画像ズーム開始
    startZoomAnimation(0);
    const now = Date.now();
    imageFadeStartTimes.current[0] = now;
    imageZoomStartTimes.current[0] = now;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 画像切り替え時: 新しい画像のズームを開始し、旧→新のフェード
  useEffect(() => {
    if (previousImageIndex === currentImageIndex) return;
    const now = Date.now();
    // 新画像ズーム開始
    startZoomAnimation(currentImageIndex);
    // フェードアウト/イン
    animateOpacity(previousImageIndex, currentImageIndex);
    // record per-image start times
    imageFadeStartTimes.current[currentImageIndex] = now;
    imageZoomStartTimes.current[currentImageIndex] = now;
    // デバッグタイマーリセット
    startTimeRef.current = Date.now();
    setElapsedTime(0);
    setCycleProgress(0);
  }, [currentImageIndex, previousImageIndex, startZoomAnimation, animateOpacity]);

  // デバッグモードの場合、タイマーを更新
  useEffect(() => {
    if (debug) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      
      startTimeRef.current = Date.now();
      
      timerRef.current = setInterval(() => {
        const now = Date.now();
        const elapsed = now - startTimeRef.current;
        setElapsedTime(elapsed);
        setCycleProgress((elapsed % TIMING.TOTAL_DURATION) / TIMING.TOTAL_DURATION * 100);
      }, 100); // 100msごとに更新
      
      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      };
    }
  }, [debug, currentImageIndex, TIMING.TOTAL_DURATION]);

  // Compute debug data for all images
  const nowAll = Date.now();
  const debugData = images.map((_, idx) => {
    const fadeStart = imageFadeStartTimes.current[idx];
    // time since fade-in start, capped to TOTAL_DURATION
    const elapsedMs = fadeStart != null ? Math.min(nowAll - fadeStart, TIMING.TOTAL_DURATION) : 0;
    const time = elapsedMs / 1000;
    const opacity = imageOpacityLevels[idx] ?? 0;
    const zoom = imageZoomLevels[idx] ?? TIMING.ZOOM_START;
    return {
      index: idx,
      name: getImageName(idx),
      time,
      opacity,
      zoom
    };
  });

  return (
    <div
      className={`relative overflow-hidden w-full h-full ${className}`}
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
              zIndex: index === previousImageIndex && isTransitioning ? 2 : index === currentImageIndex ? 1 : 0
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNextImage}
            className="bg-white/30 backdrop-blur-sm p-2 rounded-full hover:bg-white/50 transition-colors disabled:opacity-50 disabled:pointer-events-none"
            disabled={isTransitioning}
            aria-label="次の画像"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
      
      {/* デバッグオーバーレイコンポーネント */}
      {debug && <DebugOverlay debugData={debugData} />}
    </div>
  );
};

export default ImageSlider;