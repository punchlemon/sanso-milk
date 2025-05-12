import { useState, useCallback, useEffect, useRef } from 'react';
import type { SliderTimingConfig } from '../types/imageSliderTypes';

interface UseImageSliderNavigationProps {
  images: string[];
  timing: SliderTimingConfig;
  debug?: boolean;
  autoPlay?: boolean;
}

interface UseImageSliderNavigationReturn {
  currentImageIndex: number;
  previousImageIndex: number;
  goToNextImage: () => void;
  goToPreviousImage: () => void;
  goToImage: (index: number) => void;
  isTransitioning: boolean;
  pauseAutoPlay: () => void;
  resumeAutoPlay: () => void;
}

/**
 * イメージスライダーのナビゲーションを制御するカスタムフック
 */
export const useImageSliderNavigation = ({
  images,
  timing,
  debug = false,
  autoPlay = true
}: UseImageSliderNavigationProps): UseImageSliderNavigationReturn => {
  // 現在表示中の画像インデックス
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 前に表示していた画像インデックス
  const [previousImageIndex, setPreviousImageIndex] = useState(0);
  
  // トランジション中かどうか
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // 自動再生が一時停止されているかどうか
  const [_isPaused, setIsPaused] = useState(false);
  // isTransitioning を ref でも保持（エフェクト内で最新を参照するため）
  const isTransitioningRef = useRef(isTransitioning);
  useEffect(() => { isTransitioningRef.current = isTransitioning; }, [isTransitioning]);

  /**
   * 画像を次に進める
   */
  const goToNextImage = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setPreviousImageIndex(currentImageIndex);
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
    if (debug) console.log(`次の画像に移動: ${currentImageIndex + 1} → ${nextIndex + 1}`);
    // トランジション期間後にフラグをリセット
    setTimeout(() => {
      setIsTransitioning(false);
    }, timing.FADE_DURATION);
  }, [currentImageIndex, images.length, isTransitioning, timing.FADE_DURATION, debug]);

  /**
   * 画像を前に戻す
   */
  const goToPreviousImage = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setPreviousImageIndex(currentImageIndex);
    
    // 前の画像インデックスを計算（最初ならループして最後に戻る）
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
    
    if (debug) {
      console.log(`前の画像に移動: ${currentImageIndex + 1} → ${prevIndex + 1}`);
    }
    
    // トランジション期間後にフラグをリセット
    setTimeout(() => {
      setIsTransitioning(false);
    }, timing.FADE_DURATION);
  }, [currentImageIndex, images.length, isTransitioning, timing.FADE_DURATION, debug]);

  /**
   * 特定の画像に直接移動
   */
  const goToImage = useCallback((index: number) => {
    if (isTransitioning || index === currentImageIndex || index < 0 || index >= images.length) return;
    
    setIsTransitioning(true);
    setPreviousImageIndex(currentImageIndex);
    setCurrentImageIndex(index);
    
    if (debug) {
      console.log(`画像を選択: ${currentImageIndex + 1} → ${index + 1}`);
    }
    
    // トランジション期間後にフラグをリセット
    setTimeout(() => {
      setIsTransitioning(false);
    }, timing.FADE_DURATION);
  }, [currentImageIndex, images.length, isTransitioning, timing.FADE_DURATION, debug]);

  /**
   * 自動再生を一時停止
   */
  const pauseAutoPlay = useCallback(() => {
    setIsPaused(true);
    if (debug) console.log('自動再生を一時停止しました');
  }, [debug]);

  /**
   * 自動再生を再開
   */
  const resumeAutoPlay = useCallback(() => {
    setIsPaused(false);
    if (debug) console.log('自動再生を再開しました');
  }, [debug]);

  // interval ref for continuous auto-play after first transition
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // AUTO PLAY: initial delay of DISPLAY_DURATION, then TOTAL_DURATION interval
  useEffect(() => {
    if (!autoPlay) return;
    // clear any previous
    if (intervalRef.current) clearInterval(intervalRef.current);
    // schedule first transition after display period
    const firstTimeout = setTimeout(() => {
      if (!isTransitioningRef.current) {
        goToNextImage();
      }
      // then schedule recurring transitions every TOTAL_DURATION
      intervalRef.current = setInterval(() => {
        if (!isTransitioningRef.current) {
          goToNextImage();
        }
      }, timing.TOTAL_DURATION);
    }, timing.DISPLAY_DURATION);
    if (debug) console.log(
      `自動再生: 初回 ${timing.DISPLAY_DURATION}ms後、以降${timing.TOTAL_DURATION}ms間隔`
    );
    return () => {
      clearTimeout(firstTimeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, goToNextImage, debug, timing.DISPLAY_DURATION, timing.TOTAL_DURATION]);

  return {
    currentImageIndex,
    previousImageIndex,
    goToNextImage,
    goToPreviousImage,
    goToImage,
    isTransitioning,
    pauseAutoPlay,
    resumeAutoPlay
  };
};

export default useImageSliderNavigation;