import { useState, useEffect, useCallback } from 'react';

interface UseImageLoaderProps {
  images: string[];
  onLoadComplete?: () => void;
  priorityImages?: string[]; // 優先して読み込む画像
  timeout?: number; // タイムアウト時間（ミリ秒）
}

interface UseImageLoaderReturn {
  loadedImages: number;
  totalImages: number;
  isLoading: boolean;
  loadingProgress: number;
  preloadImages: () => void;
}

export const useImageLoader = ({
  images,
  onLoadComplete,
  priorityImages = [],
  timeout = 10000, // デフォルト10秒
}: UseImageLoaderProps): UseImageLoaderReturn => {
  const [loadedImages, setLoadedImages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const totalImages = images.length;

  const loadingProgress =
    totalImages > 0 ? (loadedImages / totalImages) * 100 : 0;

  const preloadImages = useCallback(() => {
    console.log(`🚀 Starting image preload. Total images: ${images.length}`);
    console.log('📋 Images to load:', images);

    if (images.length === 0) {
      console.log('✅ No images to load');
      setIsLoading(false);
      onLoadComplete?.();
      return;
    }

    setLoadedImages(0);
    setIsLoading(true);

    let loadedCount = 0;

    // タイムアウトの設定
    const timeoutId = setTimeout(() => {
      console.warn(
        `⏰ Image loading timeout after ${timeout}ms. Loaded ${loadedCount}/${totalImages} images.`,
      );
      console.warn(
        '⏰ Consider increasing timeout or checking network connection',
      );
      setIsLoading(false);
      onLoadComplete?.();
    }, timeout);

    const handleImageComplete = () => {
      loadedCount++;
      setLoadedImages(loadedCount);
      console.log(
        `📊 Progress: ${loadedCount}/${totalImages} images loaded (${Math.round((loadedCount / totalImages) * 100)}%)`,
      );

      if (loadedCount === totalImages) {
        clearTimeout(timeoutId);
        console.log('🎉 All images loaded successfully!');
        setIsLoading(false);
        onLoadComplete?.();
      }
    };

    // 優先画像を先に読み込み、その他を後で読み込む
    const priorityUrls = priorityImages.filter((url) => images.includes(url));
    const nonPriorityUrls = images.filter(
      (url) => !priorityImages.includes(url),
    );
    const orderedImages = [...priorityUrls, ...nonPriorityUrls];

    console.log('🔥 Priority images:', priorityUrls);
    console.log('📦 Regular images:', nonPriorityUrls);

    orderedImages.forEach((imageSrc, index) => {
      const img = new Image();
      const startTime = Date.now();

      // 優先画像にはpreloadヒントを設定
      if (priorityImages.includes(imageSrc)) {
        img.loading = 'eager';
      }

      img.onload = () => {
        const loadTime = Date.now() - startTime;
        console.log(`✅ Successfully loaded (${loadTime}ms): ${imageSrc}`);
        handleImageComplete();
      };

      img.onerror = (error) => {
        const loadTime = Date.now() - startTime;
        console.error(
          `❌ Failed to load after ${loadTime}ms: ${imageSrc}`,
          error,
        );
        handleImageComplete(); // エラーでも完了として扱う
      };

      console.log(
        `🔄 Starting to load (${index + 1}/${orderedImages.length}): ${imageSrc}`,
      );
      img.src = imageSrc;
    });

    // クリーンアップ関数を返す
    return () => {
      clearTimeout(timeoutId);
    };
  }, [images, totalImages, onLoadComplete, priorityImages, timeout]);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  return {
    loadedImages,
    totalImages,
    isLoading,
    loadingProgress,
    preloadImages,
  };
};
