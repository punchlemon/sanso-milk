import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo/logo.svg';
import { DARK_SECTION, FONTS } from '../constants/theme';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaCalendarAlt,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer
      className={`${DARK_SECTION.BG.PRIMARY} ${DARK_SECTION.TEXT.SLIGHT_MUTED} border-t border-gray-800 relative z-20`}
      style={{ backgroundColor: '#000' }}
    >
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* ロゴと説明 */}
          <div className="md:col-span-5">
            <div className="mb-6 flex items-center">
              <img
                src={logoImage}
                alt="山荘ミルク ロゴ"
                className="h-12 w-auto mr-3"
              />
              <span
                className={`text-2xl font-bold ${DARK_SECTION.TEXT.DEFAULT} ${FONTS.SERIF}`}
              >
                山荘ミルク
              </span>
            </div>
            <p
              className={`${DARK_SECTION.TEXT.SEMI_MUTED} mb-8 leading-relaxed text-base`}
            >
              標高およそ1,000mの中央アルプスの麓、
              <br />
              自然に囲まれた静寂の中で、特別なひとときを。
              <br />
              安全な食と健康を大切にする山荘です。
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/milk.tsunagu/"
                className={`${DARK_SECTION.TEXT.MUTED} hover:text-white transition-colors bg-gray-800 hover:bg-gray-700 p-2 rounded-full`}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 営業情報 */}
          <div className="md:col-span-3">
            <h3
              className={`text-lg font-bold mb-6 ${DARK_SECTION.TEXT.DEFAULT} ${FONTS.SERIF} border-b border-gray-800 pb-2`}
            >
              営業情報
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaClock className={`mt-1 mr-3 ${DARK_SECTION.TEXT.MUTED}`} />
                <div>
                  <p className={`font-medium ${DARK_SECTION.TEXT.DEFAULT}`}>
                    営業時間
                  </p>
                  <p className={`${DARK_SECTION.TEXT.SEMI_MUTED} text-sm`}>
                    11:00～17:00
                    <br />
                    <span className="text-xs text-gray-400">
                      (夜はご予約のみの営業)
                    </span>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <FaCalendarAlt
                  className={`mt-1 mr-3 ${DARK_SECTION.TEXT.MUTED}`}
                />
                <div>
                  <p className={`font-medium ${DARK_SECTION.TEXT.DEFAULT}`}>
                    定休日
                  </p>
                  <p className={`${DARK_SECTION.TEXT.SEMI_MUTED} text-sm`}>
                    毎週 月曜日・火曜日
                    <br />
                    <span className="text-xs text-gray-400">
                      (6月は月・火も営業 11:00～15:00)
                    </span>
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* サイトマップ */}
          <div className="md:col-span-2">
            <h3
              className={`text-lg font-bold mb-6 ${DARK_SECTION.TEXT.DEFAULT} ${FONTS.SERIF} border-b border-gray-800 pb-2`}
            >
              サイトマップ
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className={`${DARK_SECTION.TEXT.SEMI_MUTED} hover:text-white transition-colors block py-1`}
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  to="/lodging"
                  className={`${DARK_SECTION.TEXT.SEMI_MUTED} hover:text-white transition-colors block py-1`}
                >
                  宿泊案内
                </Link>
              </li>
              <li>
                <Link
                  to="/access"
                  className={`${DARK_SECTION.TEXT.SEMI_MUTED} hover:text-white transition-colors block py-1`}
                >
                  アクセス
                </Link>
              </li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div className="md:col-span-2">
            <h3
              className={`text-lg font-bold mb-6 ${DARK_SECTION.TEXT.DEFAULT} ${FONTS.SERIF} border-b border-gray-800 pb-2`}
            >
              お問い合わせ
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt
                  className={`mt-1 mr-3 ${DARK_SECTION.TEXT.MUTED}`}
                />
                <div className={`${DARK_SECTION.TEXT.SEMI_MUTED}`}>
                  〒396-0029
                  <br />
                  長野県伊那市横山風の谷9749
                </div>
              </li>
              <li className="flex items-center">
                <FaPhone className={`mr-3 ${DARK_SECTION.TEXT.MUTED}`} />
                <a
                  href="tel:0265729990"
                  className={`${DARK_SECTION.TEXT.SEMI_MUTED} hover:text-white transition-colors`}
                >
                  0265-72-9990
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className={`mr-3 ${DARK_SECTION.TEXT.MUTED}`} />
                <a
                  href="mailto:info@milk-co.jp"
                  className={`${DARK_SECTION.TEXT.SEMI_MUTED} hover:text-white transition-colors`}
                >
                  info@milk-co.jp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={`mt-16 pt-6 border-t border-gray-800 text-center`}>
          <div className={`${DARK_SECTION.TEXT.MUTED} text-sm`}>
            &copy; {new Date().getFullYear()} 山荘ミルク All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
