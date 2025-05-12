import { useState, useRef, useCallback, useEffect } from 'react';
import type { SliderTimingConfig, ImageAnimationState } from '../types/imageSliderTypes';

interface UseImageSliderAnimationProps {
  images: string[];
  timing: SliderTimingConfig;
  debug?: boolean;
}

interface UseImageSliderAnimationReturn {
  imageZoomLevels: Record<number, number>;
  imageOpacityLevels: Record<number, number>;
  startZoomAnimation: (imageIndex: number) => () => void;
  animateOpacity: (fromIndex: number, toIndex: number) => void;
  resetOpacity: (exceptIndices?: number[]) => void;
  updateOpacity: (index: number, opacity: number) => void;
}

/**
 * イメージスライダーのアニメーション（ズーム・不透明度）を制御するカスタムフック
 */
const useImageSliderAnimation = ({
  images,
  timing,
  debug = false
}: UseImageSliderAnimationProps): UseImageSliderAnimationReturn => {
  // 各画像のズーム率
  const [imageZoomLevels, setImageZoomLevels] = useState<Record<number, number>>(
    images.reduce((acc, _, index) => ({ ...acc, [index]: timing.ZOOM_START }), {})
  );
  
  // 各画像の不透明度
  const [imageOpacityLevels, setImageOpacityLevels] = useState<Record<number, number>>(
    images.reduce((acc, _, index) => ({ ...acc, [index]: 1 }), {})
  );

  // アニメーション用のリファレンス
  const animationFrameRef = useRef<Record<number, number | null>>({});
  const fadeAnimationFrameRef = useRef<number | null>(null);
  const animationStateRef = useRef<Record<number, ImageAnimationState>>({});

  // コンポーネント解除時にすべてのアニメーションをクリーンアップ
  useEffect(() => {
    // キャプチャした参照のみをクリーンアップ
    const frameRefs = animationFrameRef.current;
    const fadeFrameId = fadeAnimationFrameRef.current;
    return () => {
      Object.values(frameRefs).forEach(frameId => {
        if (frameId !== null) {
          cancelAnimationFrame(frameId);
        }
      });
      if (fadeFrameId) {
        cancelAnimationFrame(fadeFrameId);
      }
    };
  }, []);

  /**
   * 指定されたインデックス以外の画像の不透明度をリセットする
   */
  const resetOpacity = useCallback((exceptIndices: number[] = []) => {
    setImageOpacityLevels(prev => {
      const resetOpacity = { ...prev };
      Object.keys(resetOpacity).forEach(key => {
        const index = parseInt(key);
        if (!exceptIndices.includes(index)) {
          resetOpacity[index] = 0;
        }
      });
      return resetOpacity;
    });
  }, []);

  /**
   * 特定の画像のズームアニメーションを開始する
   * 画像は表示中ずっとズームアウトし続けます
   */
  const startZoomAnimation = useCallback((imageIndex: number) => {
    // 既存のアニメーションフレームをキャンセル
    if (animationFrameRef.current[imageIndex]) {
      cancelAnimationFrame(animationFrameRef.current[imageIndex]!);
      animationFrameRef.current[imageIndex] = null;
    }
    
    // アニメーション状態を設定
    animationStateRef.current[imageIndex] = {
      active: true,
      startTime: Date.now(),
      zoomStartValue: timing.ZOOM_START,
      zoomEndValue: timing.ZOOM_END
    };
    
    // 初期ズーム値を設定
    setImageZoomLevels(prev => ({
      ...prev,
      [imageIndex]: timing.ZOOM_START
    }));
    
    // アニメーションフレーム関数
    const animate = () => {
      const state = animationStateRef.current[imageIndex];
      if (!state || !state.active) return;
      
      const now = Date.now();
      const elapsed = now - state.startTime;
      
      // 全表示期間でズームアウトするよう計算
      const progress = Math.min(elapsed / timing.ZOOM_DURATION, 1);
      // apply ease-out quadratic easing for deceleration
      const easedProgress = progress * (2 - progress);
      const zoomLevel = state.zoomStartValue - (easedProgress * (state.zoomStartValue - state.zoomEndValue));
      
      setImageZoomLevels(prev => ({
        ...prev,
        [imageIndex]: zoomLevel
      }));
      
      // アニメーションが完了したかチェック
      if (progress < 1) {
        // まだ完了していなければ次のフレームを要求
        animationFrameRef.current[imageIndex] = requestAnimationFrame(animate);
      } else {
        // 完了したら状態をリセット
        if (debug) {
          console.log(`画像 ${imageIndex + 1} のズームアニメーション完了`);
        }
        // イメージスライダーのサイクルは連続するので、完了後も最終値を維持
        setImageZoomLevels(prev => ({
          ...prev,
          [imageIndex]: state.zoomEndValue
        }));
      }
    };
    
    // アニメーション開始
    if (debug) {
      console.log(`画像 ${imageIndex + 1} のズームアニメーション開始`);
    }
    animationFrameRef.current[imageIndex] = requestAnimationFrame(animate);
    
    // 非表示になったときのクリーンアップ用関数を返す
    return () => {
      if (animationFrameRef.current[imageIndex]) {
        cancelAnimationFrame(animationFrameRef.current[imageIndex]!);
        animationFrameRef.current[imageIndex] = null;
      }
      animationStateRef.current[imageIndex] = {
        ...animationStateRef.current[imageIndex],
        active: false
      };
    };
  }, [timing.ZOOM_DURATION, timing.ZOOM_START, timing.ZOOM_END, debug]);

  /**
   * 不透明度のアニメーション（フェードイン/アウト）
   */
  const animateOpacity = useCallback((fromIndex: number, toIndex: number) => {
    // 他の画像の不透明度をリセットし、対象の2つのみ表示
    resetOpacity([fromIndex, toIndex]);
    // 既存のフェードアニメーションをクリア
    if (fadeAnimationFrameRef.current) {
      cancelAnimationFrame(fadeAnimationFrameRef.current);
      fadeAnimationFrameRef.current = null;
    }
    
    // アニメーション開始時間を記録
    const startTime = Date.now();
    
    // フェードアニメーション関数
    const animateFade = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / timing.FADE_DURATION, 1);
      
      // 前の画像はフェードアウト、新しい画像はフェードイン
      setImageOpacityLevels(prev => ({
        ...prev,
        [fromIndex]: 1 - progress,
        [toIndex]: progress
      }));
      
      if (progress < 1) {
        // アニメーションが完了していなければ継続
        fadeAnimationFrameRef.current = requestAnimationFrame(animateFade);
      } else {
        // アニメーション完了したら、前の画像の不透明度を0に設定
        setImageOpacityLevels(prev => ({
          ...prev,
          [fromIndex]: 0,
          [toIndex]: 1
        }));
        
        if (debug) {
          console.log(`フェードアニメーション完了: ${fromIndex + 1} → ${toIndex + 1}`);
        }
      }
    };
    
    // アニメーション開始
    if (debug) {
      console.log(`フェードアニメーション開始: ${fromIndex + 1} → ${toIndex + 1}`);
    }
    fadeAnimationFrameRef.current = requestAnimationFrame(animateFade);
  }, [timing.FADE_DURATION, debug, resetOpacity]);

  /**
   * 特定の画像の不透明度を更新する
   */
  const updateOpacity = useCallback((index: number, opacity: number) => {
    setImageOpacityLevels(prev => ({
      ...prev,
      [index]: opacity
    }));
  }, []);

  return {
    imageZoomLevels,
    imageOpacityLevels,
    startZoomAnimation,
    animateOpacity,
    resetOpacity,
    updateOpacity
  };
};

export default useImageSliderAnimation;