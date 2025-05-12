import React from 'react';
import { Link } from 'react-router-dom';
// 型定義をインラインで定義して問題を解決
type ContentType = 'event' | 'service' | 'facility' | 'news' | 'product' | 'activity';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  linkUrl?: string;
  type: ContentType;
  tags?: string[];
  iconSvg?: React.ReactNode;
  date?: string;
  featured?: boolean;
  buttonText?: string;
}

// カードのサイズバリエーション
export type CardSize = 'small' | 'medium' | 'large' | 'horizontal';

// カードコンポーネントのプロップス
interface ContentCardProps {
  item: ContentItem;
  size?: CardSize;
  onClick?: (item: ContentItem) => void;
  className?: string;
  showTags?: boolean;
  showButton?: boolean;
}

// コンテンツタイプに応じたアイコンとカラーの取得
const getContentTypeInfo = (type: ContentType) => {
  switch (type) {
    case 'event':
      return {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        color: 'bg-[#e0e8ed] text-[#506d85]',
        label: 'イベント'
      };
    case 'service':
      return {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        color: 'bg-[#dce6e0] text-[#4d6a5a]',
        label: 'サービス'
      };
    case 'facility':
      return {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
        color: 'bg-[#f0e9d9] text-[#8b6b4d]',
        label: '施設'
      };
    case 'news':
      return {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        ),
        color: 'bg-[#eadad7] text-[#996359]',
        label: 'お知らせ'
      };
    case 'product':
      return {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        ),
        color: 'bg-[#e6ddec] text-[#7e5a95]',
        label: '商品'
      };
    case 'activity':
      return {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        color: 'bg-[#dde1ed] text-[#596686]',
        label: 'アクティビティ'
      };
    default:
      return {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        color: 'bg-[#e5e5e2] text-[#666661]',
        label: 'その他'
      };
  }
};

const ContentCard: React.FC<ContentCardProps> = ({
  item,
  size = 'medium',
  onClick,
  className = '',
  showTags = true,
  showButton = true
}) => {
  const typeInfo = getContentTypeInfo(item.type);
  
  // サイズに応じたスタイル設定
  const sizeStyles = {
    small: 'max-w-xs',
    medium: 'max-w-sm',
    large: 'max-w-md',
    horizontal: 'max-w-2xl flex flex-col md:flex-row'
  };

  // 画像サイズを設定
  const imageStyles = {
    small: 'h-36',
    medium: 'h-48',
    large: 'h-56',
    horizontal: 'h-48 md:h-full md:w-1/3'
  };

  const contentStyles = {
    small: 'p-3',
    medium: 'p-4',
    large: 'p-5',
    horizontal: 'p-4 md:w-2/3'
  };

  // クリックイベントのハンドラー
  const handleClick = () => {
    if (onClick) {
      onClick(item);
    }
  };

  // リンク有無の条件付きラッパー
  const CardWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    if (item.linkUrl && !onClick) {
      return (
        <Link to={item.linkUrl} className={`block ${className}`}>
          {children}
        </Link>
      );
    }
    return <div className={className}>{children}</div>;
  };

  return (
    <CardWrapper>
      <div 
        className={`bg-[#f8f6f1] rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg ${
          onClick || item.linkUrl ? 'hover:-translate-y-1 cursor-pointer' : ''
        } ${sizeStyles[size]}`}
        onClick={handleClick}
      >
        <div className={`flex ${size === 'horizontal' ? 'flex-col md:flex-row' : 'flex-col'}`}>
          {/* 画像エリア */}
          <div className={`relative ${imageStyles[size]}`}>
            {item.imageUrl ? (
              <img
                src={item.imageUrl}
                alt={item.title}
                className={`w-full h-full object-cover ${size === 'horizontal' ? 'md:rounded-l-lg' : ''}`}
              />
            ) : (
              <div className={`w-full h-full bg-[#e8e4da] flex items-center justify-center ${size === 'horizontal' ? 'md:rounded-l-lg' : ''}`}>
                {item.iconSvg || (
                  <span className="text-gray-500 text-4xl">{typeInfo.icon}</span>
                )}
              </div>
            )}
            
            {/* タイプバッジ */}
            <div className={`absolute top-2 left-2 ${typeInfo.color} px-2 py-1 rounded-md text-xs font-medium flex items-center`}>
              <span className="mr-1">{typeInfo.icon}</span>
              <span>{typeInfo.label}</span>
            </div>
            
            {/* 特集バッジ */}
            {item.featured && (
              <div className="absolute top-2 right-2 bg-[#8b6b4d] text-white px-2 py-1 rounded-md text-xs font-bold">
                おすすめ
              </div>
            )}
          </div>

          {/* コンテンツエリア */}
          <div className={contentStyles[size]}>
            {item.date && (
              <p className="text-xs text-gray-500 mb-2">{item.date}</p>
            )}
            
            <h3 className={`font-bold text-[#2a3c30] ${size === 'small' ? 'text-base' : 'text-lg'} mb-2`}>
              {item.title}
            </h3>
            
            <p className={`text-gray-700 ${size === 'small' ? 'text-xs line-clamp-2' : 'text-sm line-clamp-3'} mb-3`}>
              {item.description}
            </p>
            
            {/* タグ表示 */}
            {showTags && item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-3">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#e8e4da] text-gray-700 px-2 py-0.5 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {/* ボタン表示 */}
            {showButton && (item.buttonText || item.linkUrl) && (
              <div className="mt-auto pt-2">
                <button
                  className="text-sm font-medium text-[#2a3c30] hover:text-[#8b6b4d] flex items-center"
                >
                  <span>{item.buttonText || '詳しく見る'}</span>
                  <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default ContentCard;