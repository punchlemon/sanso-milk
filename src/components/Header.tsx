import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItemCount } from '../store/slices/cartSlice';
import logoImage from '../assets/logo/logo.svg';

// メニュー項目のタイプ定義
interface MenuItem {
  id: string;
  label: string;
  path: string;
}

const Header: React.FC = () => {
  const cartItemCount = useSelector(selectCartItemCount);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // スクロール検出 - メニューボタンの背景色の調整に使用
  useEffect(() => {
    const handleScroll = () => {
      // 50px以上スクロールしたらスクロール状態に
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // メニュー構造の定義
  const menuItems: MenuItem[] = [
    {
      id: 'home',
      label: 'ホーム',
      path: '/',
    },
    {
      id: 'about',
      label: '施設について',
      path: '/about',
    },
    {
      id: 'facilities',
      label: '施設案内',
      path: '/facilities',
    },
    {
      id: 'lodging',
      label: '宿泊施設',
      path: '/lodging',
    },
    {
      id: 'dogrun',
      label: 'ドッグラン',
      path: '/dogrun',
    },
    {
      id: 'wedding',
      label: '結婚式',
      path: '/wedding',
    },
    {
      id: 'products',
      label: '特産品',
      path: '/products',
    },
    {
      id: 'access',
      label: 'アクセス',
      path: '/access',
    },
    {
      id: 'contact',
      label: 'お問い合わせ',
      path: '/contact',
    },
  ];

  // 現在のパスから活性タブを設定
  useEffect(() => {
    const currentPath = location.pathname;
    
    // 現在のパスに合ったメニュー項目を探す
    let foundTab = null;
    
    for (const item of menuItems) {
      if (currentPath === item.path) {
        foundTab = item.id;
        break;
      }
    }
    
    // 見つかったタブをアクティブにする
    setActiveTab(foundTab);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // より暗い森林緑色パレット（ほとんど黒い緑）
  const colors = {
    primary: '#0f1f13',    // 非常に暗い森林緑
    secondary: '#1b3a23',  // 暗い森林緑
    accent: '#725e46',     // 自然な茶色（アクセント）
    hover: '#162c1b',      // ホバー時の暗い森林緑
    text: '#f0f0f0',       // テキストカラー（薄い）
    textMuted: '#d0d0d0',  // 薄いグレー（ミュートテキスト）
    bgLight: '#f9f7f4'     // 薄い背景色
  };

  return (
    <>
      {/* 右上の固定メニューボタン - スクロールしても維持 */}
      <div className="fixed top-4 right-4 z-[60]">
        <button
          className={`${isScrolled ? 'bg-black/60' : 'bg-black/30'} hover:bg-black/70 backdrop-blur-sm p-3 rounded-full shadow-lg transition-all duration-300`}
          onClick={toggleMenu}
          aria-label="メニュー"
        >
          <div className={`flex flex-col gap-1.5 ${isMenuOpen ? 'relative' : ''}`}>
            <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 absolute' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 absolute' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* メニューオーバーレイ */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50" onClick={toggleMenu}>
          <div className="absolute right-4 top-20 bg-black/90 rounded-md shadow-xl w-64" onClick={(e) => e.stopPropagation()}>
            <nav>
              <ul className="py-2">
                {menuItems.map((item) => (
                  <li key={`overlay-${item.id}`}>
                    <Link
                      to={item.path}
                      className={`block px-4 py-2 text-white hover:bg-gray-800 border-l-2 ${activeTab === item.id ? 'border-amber-700 bg-gray-900' : 'border-transparent'}`}
                      onClick={() => {
                        setActiveTab(item.id);
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="border-t border-gray-800 my-2"></li>
                <li>
                  <Link
                    to="/cart"
                    className="flex items-center justify-between px-4 py-2 text-white hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>カート</span>
                    {cartItemCount > 0 && (
                      <span className="bg-amber-700 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {cartItemCount}
                      </span>
                    )}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* ヘッダー - 透明背景で写真に重ねるだけ（固定しない） */}
      <header className="absolute top-0 left-0 right-0 w-full z-40">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* ロゴ */}
            <Link to="/" className="py-3" onClick={() => setActiveTab('home')}>
              <img 
                src={logoImage} 
                alt="山荘ミルク ロゴ" 
                className="h-20 w-auto" 
              />
            </Link>

            {/* デスクトップナビゲーション - ロゴと横並びのタブ形式（透明背景） */}
            <nav className="hidden md:flex flex-1 items-center justify-center">
              <ul className="flex space-x-2">
                {menuItems.map((item) => (
                  <li key={item.id} className="group relative">
                    <Link
                      to={item.path}
                      className={`relative px-3 py-2 font-medium text-white/90 hover:text-white transition-colors`}
                      onClick={() => setActiveTab(item.id)}
                    >
                      {item.label}
                      {/* アクティブ時に表示されるアンダーライン */}
                      {activeTab === item.id && (
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-amber-700"></span>
                      )}
                      {/* ホバー時に表示されるアンダーライン（アクティブでない場合のみ） */}
                      <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-amber-700 transform origin-left transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100 ${
                        activeTab === item.id ? 'hidden' : ''
                      }`}></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* カートリンク */}
            <div className="hidden md:block">
              <Link to="/cart" className="relative p-2 text-white/90 hover:text-white transition-colors" aria-label="カートを見る">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
