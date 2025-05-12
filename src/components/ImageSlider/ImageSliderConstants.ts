import type { SliderTimingConfig } from '../../types/imageSliderTypes';

// イメージスライダーのアニメーションタイミング設定
export const SLIDER_TIMING: SliderTimingConfig = {
  ZOOM_DURATION: 7000,      // ズームアウトにかかる時間 (ms)
  FADE_DURATION: 3190,        // フェードイン/アウト時間 (ms)
  DISPLAY_DURATION: 3000, // フェード完了後から次フェード開始までの表示時間 (ms)
  ZOOM_START: 1.06,           // ズーム開始スケール
  ZOOM_END: 1.0,              // ズーム終了スケール
};