import React, { useState } from 'react';
import type { InstagramAccount } from '../utils/instagramUtils';
import { getInstagramProfilePlaceholder } from '../utils/instagramUtils';

interface InstagramProfileButtonProps {
  account: InstagramAccount;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const InstagramProfileButton: React.FC<InstagramProfileButtonProps> = ({
  account,
  className = '',
  size = 'md',
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 md:w-12 md:h-12',
    lg: 'w-12 h-12 md:w-16 md:h-16',
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
  };

  const profileImageUrl =
    account.profileImageUrl || getInstagramProfilePlaceholder(account.username);

  return (
    <a
      href={account.url}
      className={`relative group transition-all duration-300 hover:scale-110 ${className}`}
      aria-label={`Instagram ${account.displayName}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={`${sizeClasses[size]} relative overflow-hidden rounded-full border-2 border-transparent group-hover:border-pink-400 transition-all duration-300 shadow-md group-hover:shadow-lg`}
      >
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 animate-pulse rounded-full" />
        )}
        <img
          src={profileImageUrl}
          alt={`${account.displayName} プロフィール画像`}
          className={`w-full h-full object-cover rounded-full transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        {/* Instagram グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-pink-500/20 to-orange-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Instagram アイコンオーバーレイ */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            className="w-4 h-4 text-white drop-shadow-lg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </div>
      </div>

      {/* アカウント名ツールチップ */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        @{account.username}
      </div>
    </a>
  );
};

export default InstagramProfileButton;
