import React from 'react';
import './LoadingScreen.css';
import { logoLight } from '../assets/logo';

interface LoadingScreenProps {
  progress?: number;
  className?: string;
  fadeOut?: boolean;
  logoSrc?: string;
  logoAlt?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  progress = 0,
  className = '',
  fadeOut = false,
  logoSrc = logoLight, // 明るい背景用の黒いロゴをデフォルトに
  logoAlt = '山荘ミルク',
}) => {
  // 円周プログレスの計算
  const circumference = 2 * Math.PI * 50; // 半径50の円
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      } ${className}`}
    >
      {/* ロゴと円周プログレス */}
      <div className="relative flex items-center justify-center mb-8">
        {/* 円周プログレス（背景） */}
        <svg className="w-36 h-36 transform -rotate-90" viewBox="0 0 120 120">
          {/* 背景の円 */}
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            className="text-gray-200"
          />
          {/* プログレス円 */}
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="text-primary loading-progress-circle"
          />
        </svg>

        {/* 中央のロゴ */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={logoSrc}
            alt={logoAlt}
            className="w-20 h-20 object-contain loading-logo"
          />
        </div>
      </div>

      {/* パーセント表示 */}
      <div className="text-lg text-gray-700 font-medium mb-2">
        {Math.round(progress)}%
      </div>

      {/* シンプルなメッセージ */}
      <div className="text-sm text-gray-500">読み込み中...</div>
    </div>
  );
};

export default LoadingScreen;
