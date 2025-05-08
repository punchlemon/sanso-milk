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
    <header className="bg-natural-light bg-paper-texture bg-repeat py-4 shadow-natural sticky top-0 z-50 border-b border-natural">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-serif font-bold text-primary-dark">
          <Link to="/" className="hover:text-primary transition-colors flex items-center">
            <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6.5C12 6.5 9 3.5 5.5 3.5C2.5 3.5 1 5.8 1 8.5C1 11.4 3 13 6 13C9 13 12 10 12 10" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 6.5C12 6.5 15 3.5 18.5 3.5C21.5 3.5 23 5.8 23 8.5C23 11.4 21 13 18 13C15 13 12 10 12 10" stroke="currentColor" strokeWidth="1.5" />
              <path d="M19 8.5C19 12.5 17 16.5 12 20.5C7 16.5 5 12.5 5 8.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span>山荘ミルク</span>
          </Link>
        </div>
        
        {/* モバイルメニューボタン */}
        <button 
          className="md:hidden text-primary hover:text-primary-dark focus:outline-none" 
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
              <Link to="/" className="text-primary-dark hover:text-accent-dark transition-colors font-medium">ホーム</Link>
            </li>
            <li className="relative group">
              <button className="text-primary-dark hover:text-accent-dark transition-colors flex items-center font-medium">
                施設・サービス
                <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 w-48 mt-2 py-2 bg-natural-light bg-paper-texture bg-repeat rounded-md shadow-natural-md hidden group-hover:block z-50 border border-natural">
                <Link to="/about" className="block px-4 py-2 text-primary-dark hover:text-accent-dark hover:bg-natural transition-colors">施設について</Link>
                <Link to="/facilities" className="block px-4 py-2 text-primary-dark hover:text-accent-dark hover:bg-natural transition-colors">施設案内</Link>
                <Link to="/lodging" className="block px-4 py-2 text-primary-dark hover:text-accent-dark hover:bg-natural transition-colors">宿泊施設</Link>
                <Link to="/dogrun" className="block px-4 py-2 text-primary-dark hover:text-accent-dark hover:bg-natural transition-colors">ドッグラン</Link>
                <Link to="/wedding" className="block px-4 py-2 text-primary-dark hover:text-accent-dark hover:bg-natural transition-colors">結婚式</Link>
                <Link to="/food-club" className="block px-4 py-2 text-primary-dark hover:text-accent-dark hover:bg-natural transition-colors">食の会</Link>
              </div>
            </li>
            <li>
              <Link to="/products" className="text-primary-dark hover:text-accent-dark transition-colors font-medium">特産品</Link>
            </li>
            <li className="relative group">
              <button className="text-primary-dark hover:text-accent-dark transition-colors flex items-center font-medium">
                ご案内
                <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 w-48 mt-2 py-2 bg-natural-light bg-paper-texture bg-repeat rounded-md shadow-natural-md hidden group-hover:block z-50 border border-natural">
                <Link to="/access" className="block px-4 py-2 text-primary-dark hover:text-accent-dark hover:bg-natural transition-colors">アクセス</Link>
                <Link to="/monthly-schedule" className="block px-4 py-2 text-primary-dark hover:text-accent-dark hover:bg-natural transition-colors">営業カレンダー</Link>
                <Link to="/contact" className="block px-4 py-2 text-primary-dark hover:text-accent-dark hover:bg-natural transition-colors">お問い合わせ</Link>
              </div>
            </li>
          </ul>
        </nav>
        
        {/* カートアイコン */}
        <div className="flex items-center">
          <Link to="/cart" className="text-primary-dark hover:text-accent-dark relative p-2" aria-label="カートを見る">
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
        <nav className="md:hidden bg-natural-light bg-paper-texture bg-repeat border-t border-natural mt-4">
          <ul className="flex flex-col">
            <li>
              <Link to="/" 
                className="block py-3 px-4 text-primary-dark hover:text-accent-dark hover:bg-natural transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ホーム
              </Link>
            </li>
            <li>
              <Link to="/about" 
                className="block py-3 px-4 text-primary-dark hover:text-accent-dark hover:bg-natural transition-colors border-l-4 border-primary-light"
                onClick={() => setIsMenuOpen(false)}
              >
                施設について
              </Link>
            </li>
            <li>
              <Link to="/facilities" 
                className="block py-3 px-4 text-primary-dark hover:text-accent-dark hover:bg-natural transition-colors border-l-4 border-primary-light"
                onClick={() => setIsMenuOpen(false)}
              >
                施設案内
              </Link>
            </li>
            <li>
              <Link to="/lodging" 
                className="block py-3 px-4 text-primary-dark hover:text-accent-dark hover:bg-natural transition-colors border-l-4 border-primary-light"
                onClick={() => setIsMenuOpen(false)}
              >
                宿泊施設
              </Link>
            </li>
            <li>
              <Link to="/dogrun" 
                className="block py-3 px-4 text-primary-dark hover:text-accent-dark hover:bg-natural transition-colors border-l-4 border-primary-light"
                onClick={() => setIsMenuOpen(false)}
              >
                ドッグラン
              </Link>
            </li>
            <li>
              <Link to="/wedding" 
                className="block py-3 px-4 text-primary-dark hover:text-accent-dark hover:bg-natural transition-colors border-l-4 border-primary-light"
                onClick={() => setIsMenuOpen(false)}
              >
                結婚式
              </Link>
            </li>
            <li>
              <Link to="/food-club" 
                className="block py-3 px-4 text-primary-dark hover:text-accent-dark hover:bg-natural transition-colors border-l-4 border-primary-light"
                onClick={() => setIsMenuOpen(false)}
              >
                食の会
              </Link>
            </li>
            <li>
              <Link to="/products" 
                className="block py-3 px-4 text-primary-dark hover:text-accent-dark hover:bg-natural transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                特産品
              </Link>
            </li>
            <li>
              <Link to="/access" 
                className="block py-3 px-4 text-primary-dark hover:text-accent-dark hover:bg-natural transition-colors border-l-4 border-primary-light"
                onClick={() => setIsMenuOpen(false)}
              >
                アクセス
              </Link>
            </li>
            <li>
              <Link to="/monthly-schedule" 
                className="block py-3 px-4 text-primary-dark hover:text-accent-dark hover:bg-natural transition-colors border-l-4 border-primary-light"
                onClick={() => setIsMenuOpen(false)}
              >
                営業カレンダー
              </Link>
            </li>
            <li>
              <Link to="/contact" 
                className="block py-3 px-4 text-primary-dark hover:text-accent-dark hover:bg-natural transition-colors border-l-4 border-primary-light"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;