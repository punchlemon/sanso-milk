import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white relative overflow-hidden">
      {/* 有機的な形状のオーバーレイ */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="text-natural-light"
          fill="currentColor"
        >
          <path
            fillOpacity="0.05"
            d="M0,128L48,122.7C96,117,192,107,288,133.3C384,160,480,224,576,224C672,224,768,160,864,122.7C960,85,1056,75,1152,85.3C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* 装飾要素 */}
      <div className="absolute right-0 bottom-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#dda15e"
            d="M46.5,-78.3C59.2,-71.3,68,-56.8,76.6,-42C85.2,-27.2,93.6,-12.3,92.4,1.7C91.3,15.7,80.6,28.8,70.4,41.1C60.2,53.4,50.4,64.9,38.4,73.5C26.3,82.1,12.2,87.9,-2.4,91.7C-17,95.6,-33.9,97.5,-47.8,90.9C-61.7,84.3,-72.5,69.2,-80.2,53.4C-88,37.5,-92.7,20.8,-91.8,4.9C-90.9,-11,-84.4,-27.1,-76.2,-42.7C-68,-58.3,-58.1,-73.5,-44.3,-79.7C-30.5,-85.9,-12.8,-83,-2.6,-78.7C7.5,-74.5,14.9,-68.9,25.6,-65C36.2,-61,47.1,-58.6,46.5,-78.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="absolute left-10 bottom-10 w-40 h-40 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#a7c4bc"
            d="M30.9,-51.7C39.1,-46,44,-35.4,51.9,-25.5C59.8,-15.7,70.6,-6.6,71.5,3.2C72.4,13,63.3,23.5,54.1,32.4C44.9,41.3,35.6,48.6,25.3,53.3C15,58,3.8,60,-5.9,57.7C-15.5,55.3,-23.6,48.6,-33,42.2C-42.3,35.8,-53,29.7,-58.3,20.5C-63.7,11.2,-63.7,-1,-60.9,-12.3C-58,-23.5,-52.4,-33.8,-43.8,-39.5C-35.3,-45.1,-23.9,-46.2,-13.8,-51.4C-3.7,-56.6,5.9,-66.1,14.4,-67.3C22.9,-68.6,30.3,-61.5,30.9,-51.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-6 flex items-center">
              <svg
                className="w-8 h-8 mr-3"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.5C12 6.5 9 3.5 5.5 3.5C2.5 3.5 1 5.8 1 8.5C1 11.4 3 13 6 13C9 13 12 10 12 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 6.5C12 6.5 15 3.5 18.5 3.5C21.5 3.5 23 5.8 23 8.5C23 11.4 21 13 18 13C15 13 12 10 12 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M19 8.5C19 12.5 17 16.5 12 20.5C7 16.5 5 12.5 5 8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <span className="text-xl font-bold">山荘ミルク</span>
            </div>
            <p className="text-white text-opacity-80 mb-6 pl-11">
              標高およそ1,000mの中央アルプスの麓、
              <br />
              安全な食と健康を大切にする山荘です。
            </p>
            <div className="flex space-x-4 pl-11">
              <a
                href="#"
                className="text-white hover:text-accent transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-accent transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-white border-opacity-20 pb-2">
              施設・サービス
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-white text-opacity-80 hover:text-accent transition-colors"
                >
                  施設について
                </Link>
              </li>
              <li>
                <Link
                  to="/facilities"
                  className="text-white text-opacity-80 hover:text-accent transition-colors"
                >
                  施設案内
                </Link>
              </li>
              <li>
                <Link
                  to="/lodging"
                  className="text-white text-opacity-80 hover:text-accent transition-colors"
                >
                  宿泊施設
                </Link>
              </li>
              <li>
                <Link
                  to="/dogrun"
                  className="text-white text-opacity-80 hover:text-accent transition-colors"
                >
                  ドッグラン
                </Link>
              </li>
              <li>
                <Link
                  to="/wedding"
                  className="text-white text-opacity-80 hover:text-accent transition-colors"
                >
                  結婚式
                </Link>
              </li>
              <li>
                <Link
                  to="/food-club"
                  className="text-white text-opacity-80 hover:text-accent transition-colors"
                >
                  食の会
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-white border-opacity-20 pb-2">
              ショッピング
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/products"
                  className="text-white text-opacity-80 hover:text-accent transition-colors"
                >
                  商品一覧
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-white text-opacity-80 hover:text-accent transition-colors"
                >
                  自家製パン
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-white text-opacity-80 hover:text-accent transition-colors"
                >
                  自然食品
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-white text-opacity-80 hover:text-accent transition-colors"
                >
                  お弁当
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-white text-opacity-80 hover:text-accent transition-colors"
                >
                  カートを見る
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-white border-opacity-20 pb-2">
              お問い合わせ
            </h3>
            <div className="flex items-center mb-4">
              <svg
                className="w-5 h-5 mr-3 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-white text-opacity-80">0X0-XXXX-XXXX</span>
            </div>
            <div className="flex items-center mb-4">
              <svg
                className="w-5 h-5 mr-3 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-white text-opacity-80">
                info@milk-co.jp
              </span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-3 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-white text-opacity-80">
                長野県伊那市横山風の谷9749
              </span>
            </div>
            <div className="mt-6">
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-full text-sm font-medium inline-block transition-colors"
              >
                お問い合わせフォーム
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white border-opacity-20 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex flex-wrap gap-4">
            <Link
              to="/access"
              className="text-white text-opacity-60 hover:text-accent text-sm"
            >
              アクセス
            </Link>
            <Link
              to="/monthly-schedule"
              className="text-white text-opacity-60 hover:text-accent text-sm"
            >
              営業カレンダー
            </Link>
            <Link
              to="/contact"
              className="text-white text-opacity-60 hover:text-accent text-sm"
            >
              お問い合わせ
            </Link>
          </div>
          <div className="text-white text-opacity-60 text-sm">
            &copy; {new Date().getFullYear()} 山荘ミルク. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
