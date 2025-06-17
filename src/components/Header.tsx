import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logoDark } from '../assets/logo'; // 暗い背景用の白いロゴに変更
import { DARK_SECTION } from '../constants/theme';

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

  // メニュー構造の定義 - 3ページのみ
  const menuItems: MenuItem[] = [
    {
      id: 'home',
      label: 'ホーム',
      path: '/',
    },
    {
      id: 'lodging',
      label: '宿泊案内',
      path: '/lodging',
    },
    {
      id: 'access',
      label: 'アクセス',
      path: '/access',
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
          <div
            className={`flex flex-col gap-1.5 ${isMenuOpen ? 'relative' : ''}`}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 absolute' : ''}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 absolute' : ''}`}
            ></span>
          </div>
        </button>
      </div>

      {/* メニューオーバーレイ */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 ${DARK_SECTION.OVERLAY.DARK} backdrop-blur-md z-50`}
          onClick={toggleMenu}
        >
          <div
            className={`absolute right-4 top-20 ${DARK_SECTION.BG.PRIMARY} bg-opacity-90 rounded-md shadow-xl w-64`}
            onClick={(e) => e.stopPropagation()}
          >
            <nav>
              <ul className="py-2">
                {menuItems.map((item) => (
                  <li key={`overlay-${item.id}`}>
                    <Link
                      to={item.path}
                      className={`block px-4 py-2 ${DARK_SECTION.TEXT.DEFAULT} hover:${DARK_SECTION.BG.PRIMARY_LIGHT} border-l-2 ${
                        activeTab === item.id
                          ? `border-accent ${DARK_SECTION.BG.PRIMARY_DARK}`
                          : 'border-transparent'
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
                src={logoDark}
                alt="山荘ミルク ロゴ"
                className="h-20 w-auto"
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
