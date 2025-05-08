import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItemCount } from '../store/slices/cartSlice';
import './Header.css';

const Header: React.FC = () => {
  const cartItemCount = useSelector(selectCartItemCount);

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">民宿のホームページ</Link>
        </div>
        
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">ホーム</Link>
            </li>
            <li>
              <Link to="/products">商品</Link>
            </li>
            {/* 他のナビゲーションリンク（宿泊情報など）はここに追加 */}
          </ul>
        </nav>
        
        <div className="header-actions">
          <Link to="/cart" className="cart-link">
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
              <span className="cart-count">{cartItemCount}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;