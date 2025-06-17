import React, { useState } from 'react';
import { useImageLoader } from '../hooks/useImageLoader';
import LoadingScreen from './LoadingScreen';

interface ImagePreloaderProps {
  images: string[];
  children: React.ReactNode;
  onLoadComplete?: () => void;
  showLoadingScreen?: boolean;
  priorityImages?: string[];
  timeout?: number;
  loadingScreenProps?: {
    className?: string;
    logoSrc?: string;
    logoAlt?: string;
  };
}

const ImagePreloader: React.FC<ImagePreloaderProps> = ({
  images,
  children,
  onLoadComplete,
  showLoadingScreen = true,
  priorityImages = [],
  timeout = 10000,
  loadingScreenProps = {},
}) => {
  const [showContent, setShowContent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleLoadComplete = () => {
    console.log('🎯 ImagePreloader: All images loaded, starting fade out');
    // ローディング完了後、少し待ってからフェードアウト開始
    setTimeout(() => {
      setFadeOut(true);
      // フェードアウト完了後にコンテンツ表示
      setTimeout(() => {
        setShowContent(true);
        console.log('🎯 ImagePreloader: Content now visible');
        onLoadComplete?.();
      }, 500); // フェードアウト時間
    }, 300); // ローディング完了表示時間
  };

  const { isLoading, loadingProgress, loadedImages, totalImages } =
    useImageLoader({
      images,
      priorityImages,
      timeout,
      onLoadComplete: handleLoadComplete,
    });

  console.log('🎯 ImagePreloader state:', {
    isLoading,
    showContent,
    fadeOut,
    loadingProgress,
    loadedImages,
    totalImages,
  });

  if ((isLoading || !showContent) && showLoadingScreen) {
    return (
      <LoadingScreen
        progress={loadingProgress}
        fadeOut={fadeOut}
        {...loadingScreenProps}
      />
    );
  }

  return <>{children}</>;
};

export default ImagePreloader;
