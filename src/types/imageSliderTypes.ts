// ImageSlider関連の型定義

export interface ImageSliderProps {
  images: string[];
  autoPlay?: boolean;
  showArrows?: boolean;
  showIndicators?: boolean;
  className?: string;
  backgroundColor?: string;
  debug?: boolean;
  startAnimation?: boolean;
}

export interface SliderTimingConfig {
  FADE_DURATION: number; // フェードイン/アウト時間 (ms)
  DISPLAY_DURATION: number; // フェード完了後から次フェード開始までの表示時間 (ms)
  ZOOM_DURATION: number; // ズームアウトにかかる時間 (ms)
  ZOOM_START: number; // ズーム開始スケール
  ZOOM_END: number; // ズーム終了スケール
}

export interface ImageAnimationState {
  active: boolean; // アクティブ状態
  startTime: number; // アニメーション開始時間
  zoomStartValue: number; // ズーム開始値
  zoomEndValue: number; // ズーム終了値
}
