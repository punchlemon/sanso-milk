import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItemCount } from '../store/slices/cartSlice';

const Header: React.FC = () => {
  const cartItemCount = useSelector(selectCartItemCount);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-serif font-bold text-primary-dark">
          <Link to="/" className="hover:text-primary transition-colors">山の民宿 木香</Link>
        </div>
        
        {/* モバイルメニューボタン */}
        <button 
          className="md:hidden text-gray-600 hover:text-primary focus:outline-none" 
          onClick={toggleMenu}
          aria-label="メニュー"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
        
        {/* デスクトップナビゲーション */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-700 hover:text-primary transition-colors">ホーム</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">民宿について</Link>
            </li>
            <li>
              <Link to="/facilities" className="text-gray-700 hover:text-primary transition-colors">施設案内</Link>
            </li>
            <li>
              <Link to="/wedding" className="text-gray-700 hover:text-primary transition-colors">山の結婚式</Link>
            </li>
            <li>
              <Link to="/products" className="text-gray-700 hover:text-primary transition-colors">手作り特産品</Link>
            </li>
            <li>
              <Link to="/access" className="text-gray-700 hover:text-primary transition-colors">アクセス</Link>
            </li>
          </ul>
        </nav>
        
        {/* カートアイコン */}
        <div className="flex items-center">
          <Link to="/cart" className="text-gray-700 hover:text-primary relative p-2" aria-label="カートを見る">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 mt-4">
          <ul className="flex flex-col">
            <li>
              <Link to="/" 
                className="block py-3 px-4 text-gray-700 hover:bg-natural-light"
                onClick={() => setIsMenuOpen(false)}
              >
                ホーム
              </Link>
            </li>
            <li>
              <Link to="/about" 
                className="block py-3 px-4 text-gray-700 hover:bg-natural-light"
                onClick={() => setIsMenuOpen(false)}
              >
                民宿について
              </Link>
            </li>
            <li>
              <Link to="/facilities" 
                className="block py-3 px-4 text-gray-700 hover:bg-natural-light"
                onClick={() => setIsMenuOpen(false)}
              >
                施設案内
              </Link>
            </li>
            <li>
              <Link to="/wedding" 
                className="block py-3 px-4 text-gray-700 hover:bg-natural-light"
                onClick={() => setIsMenuOpen(false)}
              >
                山の結婚式
              </Link>
            </li>
            <li>
              <Link to="/products" 
                className="block py-3 px-4 text-gray-700 hover:bg-natural-light"
                onClick={() => setIsMenuOpen(false)}
              >
                手作り特産品
              </Link>
            </li>
            <li>
              <Link to="/access" 
                className="block py-3 px-4 text-gray-700 hover:bg-natural-light"
                onClick={() => setIsMenuOpen(false)}
              >
                アクセス
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;