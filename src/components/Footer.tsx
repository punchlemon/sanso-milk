import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo/logo.svg';
import { DARK_SECTION, FONTS } from '../constants/theme';

const Footer: React.FC = () => {
  return (
    <footer className={`${DARK_SECTION.BG.PRIMARY} ${DARK_SECTION.TEXT.SLIGHT_MUTED} border-t border-primary-light`}>
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/3">
            <div className="mb-6 flex items-center">
              <img 
                src={logoImage} 
                alt="山荘ミルク ロゴ" 
                className="w-8 h-8 mr-3"
              />
              <span className={`text-xl font-bold ${DARK_SECTION.TEXT.DEFAULT} ${FONTS.SERIF}`}>山荘ミルク</span>
            </div>
            <p className={`${DARK_SECTION.TEXT.SEMI_MUTED} mb-6 leading-relaxed`}>
              標高およそ1,000mの中央アルプスの麓、
              <br />
              安全な食と健康を大切にする山荘です。
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className={`${DARK_SECTION.TEXT.MUTED} ${DARK_SECTION.ACCENT.HOVER} transition-colors`}
                aria-label="Facebook"
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
                className={`${DARK_SECTION.TEXT.MUTED} ${DARK_SECTION.ACCENT.HOVER} transition-colors`}
                aria-label="Instagram"
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

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className={`text-lg font-bold mb-4 border-l-4 ${DARK_SECTION.ACCENT2.BG} pl-3 ${DARK_SECTION.TEXT.DEFAULT} ${FONTS.SERIF}`}>
                施設案内
              </h3>
              <ul className="space-y-2 pl-3">
                <li>
                  <Link
                    to="/lodging"
                    className={`${DARK_SECTION.TEXT.SEMI_MUTED} ${DARK_SECTION.ACCENT.HOVER} transition-colors block`}
                  >
                    宿泊施設
                  </Link>
                </li>
                <li>
                  <Link
                    to="/food-club"
                    className={`${DARK_SECTION.TEXT.SEMI_MUTED} ${DARK_SECTION.ACCENT.HOVER} transition-colors block`}
                  >
                    食の会
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className={`text-lg font-bold mb-4 border-l-4 ${DARK_SECTION.ACCENT2.BG} pl-3 ${DARK_SECTION.TEXT.DEFAULT} ${FONTS.SERIF}`}>
                アクセス
              </h3>
              <address className={`not-italic pl-3 ${DARK_SECTION.TEXT.SEMI_MUTED} space-y-2`}>
                <p>長野県伊那市横山風の谷9749</p>
                <p>Tel: 0X0-XXXX-XXXX</p>
                <p className="break-all">Email: info@milk-co.jp</p>
              </address>
            </div>

            <div>
              <h3 className={`text-lg font-bold mb-4 border-l-4 ${DARK_SECTION.ACCENT2.BG} pl-3 ${DARK_SECTION.TEXT.DEFAULT} ${FONTS.SERIF}`}>
                リンク
              </h3>
              <ul className="space-y-2 pl-3">
                <li>
                  <Link
                    to="/products"
                    className={`${DARK_SECTION.TEXT.SEMI_MUTED} ${DARK_SECTION.ACCENT.HOVER} transition-colors block`}
                  >
                    商品一覧
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`${DARK_SECTION.TEXT.SEMI_MUTED} ${DARK_SECTION.ACCENT.HOVER} transition-colors block`}
                  >
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/access"
                    className={`${DARK_SECTION.TEXT.SEMI_MUTED} ${DARK_SECTION.ACCENT.HOVER} transition-colors block`}
                  >
                    アクセス
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`mt-10 pt-6 border-t border-primary-light text-center`}>
          <div className={`${DARK_SECTION.TEXT.MUTED} text-sm`}>
            &copy; {new Date().getFullYear()} 山荘ミルク All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
