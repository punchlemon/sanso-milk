import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/logo/logo.svg';
import { DARK_SECTION, FONTS } from '../constants/theme';

// メニュー項目のタイプ定義
interface MenuItem {
  id: string;
  label: string;
  path: string;
}

const Header: React.FC = () => {
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
      id: 'onlineshop',
      label: 'オンラインショップ',
      path: '/onlineshop',
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

  return (
    <>
      {/* 右上の固定メニューボタン - スクロールしても維持 */}
      <div className="fixed top-4 right-4 z-[60]">
        <button
          className={`${isScrolled ? DARK_SECTION.OVERLAY.DARK : DARK_SECTION.OVERLAY.LIGHT} hover:bg-black/70 backdrop-blur-sm p-3 rounded-full shadow-lg transition-all duration-300`}
          onClick={toggleMenu}
          aria-label="メニュー"
        >
          <div className={`flex flex-col gap-1.5 ${isMenuOpen ? 'relative' : ''}`}>
            <span className={`block w-6 h-0.5 ${DARK_SECTION.TEXT.DEFAULT} transition-all ${isMenuOpen ? 'rotate-45 absolute' : ''}`}></span>
            <span className={`block w-6 h-0.5 ${DARK_SECTION.TEXT.DEFAULT} transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 ${DARK_SECTION.TEXT.DEFAULT} transition-all ${isMenuOpen ? '-rotate-45 absolute' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* メニューオーバーレイ */}
      {isMenuOpen && (
        <div className={`fixed inset-0 ${DARK_SECTION.OVERLAY.DARK} backdrop-blur-md z-50`} onClick={toggleMenu}>
          <div className={`absolute right-4 top-20 ${DARK_SECTION.BG.PRIMARY} bg-opacity-90 rounded-md shadow-xl w-64`} onClick={(e) => e.stopPropagation()}>
            <nav>
              <ul className="py-2">
                {menuItems.map((item) => (
                  <li key={`overlay-${item.id}`}>
                    <Link
                      to={item.path}
                      className={`block px-4 py-2 ${DARK_SECTION.TEXT.DEFAULT} hover:${DARK_SECTION.BG.PRIMARY_LIGHT} border-l-2 ${
                        activeTab === item.id ? `border-accent ${DARK_SECTION.BG.PRIMARY_DARK}` : 'border-transparent'
                      }`}
                      onClick={() => {
                        setActiveTab(item.id);
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className={`border-t border-primary-light my-2`}></li>
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
              <ul className={`flex space-x-2 ${FONTS.SERIF}`}>
                {menuItems.map((item) => (
                  <li key={item.id} className="group relative">
                    <Link
                      to={item.path}
                      className={`relative px-3 py-2 font-medium ${DARK_SECTION.TEXT.SLIGHT_MUTED} hover:${DARK_SECTION.TEXT.DEFAULT} transition-colors`}
                      onClick={() => setActiveTab(item.id)}
                    >
                      {item.label}
                      {/* アクティブ時に表示されるアンダーライン */}
                      {activeTab === item.id && (
                        <span className={`absolute left-0 bottom-0 w-full h-0.5 ${DARK_SECTION.ACCENT.BG}`}></span>
                      )}
                      {/* ホバー時に表示されるアンダーライン（アクティブでない場合のみ） */}
                      <span className={`absolute left-0 bottom-0 w-full h-0.5 ${DARK_SECTION.ACCENT.BG} transform origin-left transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100 ${
                        activeTab === item.id ? 'hidden' : ''
                      }`}></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
