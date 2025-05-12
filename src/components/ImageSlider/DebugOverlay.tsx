import React from 'react';

interface DebugOverlayProps {
  debugData: Array<{
    index: number;
    name: string;
    time: number;    // seconds since fade-in start (or until TOTAL_DURATION)
    opacity: number;
    zoom: number;
  }>;
}

/**
 * イメージスライダーのデバッグ情報を表示するオーバーレイコンポーネント
 */
const DebugOverlay: React.FC<DebugOverlayProps> = ({ debugData }) => {
  return (
    <div className="absolute bottom-0 left-0 bg-black/70 text-white p-2 text-xs font-mono z-50 max-w-sm">
      {debugData.map(({ index, name, time, opacity, zoom }) => (
        <div key={index} className="mb-2">
          <div>#{index + 1} ({name})</div>
          <div>  時間: {time.toFixed(1)}秒</div>
          <div>  透過率: {opacity.toFixed(2)}</div>
          <div>  ズーム率: {zoom.toFixed(3)}</div>
        </div>
      ))}
    </div>
  );
};

export default DebugOverlay;