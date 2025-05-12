import React from 'react';

// 矢印ボタン用のProps
interface ArrowButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  className?: string;
}

// 矢印ボタンコンポーネント
export const ArrowButton: React.FC<ArrowButtonProps> = ({ 
  direction, 
  onClick, 
  className = '' 
}) => {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/30 hover:bg-white/50 rounded-full
        transition-colors duration-300 ${direction === 'left' ? 'left-4' : 'right-4'} ${className}`}
      aria-label={`${direction === 'left' ? '前の' : '次の'}画像へ`}
    >
      {direction === 'left' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      )}
    </button>
  );
};

// インジケーター用のProps
interface SliderIndicatorsProps {
  totalImages: number;
  currentIndex: number;
  onSelect: (index: number) => void;
}

// インジケーターコンポーネント
export const SliderIndicators: React.FC<SliderIndicatorsProps> = ({ 
  totalImages, 
  currentIndex, 
  onSelect 
}) => {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
      {Array.from({ length: totalImages }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`w-3 h-3 rounded-full transition-colors duration-300
            ${currentIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/70'}`}
          aria-label={`画像${index + 1}へ移動`}
          aria-current={currentIndex === index}
        />
      ))}
    </div>
  );
};

// デバッグ表示用のProps
interface DebugOverlayProps {
  elapsedTime: number;
  cycleProgress: number;
  currentImageIndex: number;
  totalImages: number;
  imageRatios: string[];
}

// デバッグ表示コンポーネント
export const DebugOverlay: React.FC<DebugOverlayProps> = ({
  elapsedTime,
  cycleProgress,
  currentImageIndex,
  totalImages,
  imageRatios
}) => {
  return (
    <div className="absolute top-0 left-0 bg-black/70 text-white p-2 z-20 text-xs font-mono">
      <div>経過時間: {(elapsedTime / 1000).toFixed(1)}s</div>
      <div>進行度: {cycleProgress.toFixed(1)}%</div>
      <div>現在の画像: {currentImageIndex + 1} / {totalImages}</div>
      <div>縦横比: {imageRatios[currentImageIndex]}</div>
    </div>
  );
};