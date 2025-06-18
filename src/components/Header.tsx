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
          className={`${isScrolled ? DARK_SECTION.OVERLAY.DARK : DARK_SECTION.OVERLAY.LIGHT} hover:bg-black/70 backdrop-blur-sm p-3 shadow-lg transition-all duration-300 group`}
          onClick={toggleMenu}
          aria-label="メニュー"
        >
          <div className="w-6 h-6 relative flex flex-col justify-center items-center">
            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45' : 'translate-y-[-4px]'
              }`}
            ></span>
            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45' : 'translate-y-[4px]'
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* メニューオーバーレイ */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 ${DARK_SECTION.OVERLAY.DARK} backdrop-blur-md z-50 transition-all duration-300`}
          onClick={toggleMenu}
        >
          <div
            className={`absolute right-4 top-20 bg-white/95 backdrop-blur-sm shadow-2xl w-72 overflow-hidden border border-white/20 transform transition-all duration-300 ease-out`}
            onClick={(e) => e.stopPropagation()}
          >
            <nav>
              <ul className="py-3">
                {menuItems.map((item, index) => (
                  <li key={`overlay-${item.id}`} className="relative">
                    <Link
                      to={item.path}
                      className={`block px-6 py-4 text-gray-800 font-medium text-lg transition-all duration-200 relative group ${
                        activeTab === item.id
                          ? 'bg-gradient-to-r from-primary/10 to-accent2/10 text-primary-dark'
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => {
                        setActiveTab(item.id);
                        setIsMenuOpen(false);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="relative z-10">{item.label}</span>
                        {activeTab === item.id && (
                          <div className="w-2 h-2 bg-accent2 transition-all duration-200"></div>
                        )}
                      </div>

                      {/* ホバー効果の下線 */}
                      <div
                        className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-primary to-accent2 transform origin-left transition-all duration-200 ${
                          activeTab === item.id
                            ? 'scale-x-100'
                            : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      ></div>

                      {/* セパレーター */}
                      {index < menuItems.length - 1 && (
                        <div className="absolute bottom-0 left-6 right-6 h-px bg-gray-200"></div>
                      )}
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
