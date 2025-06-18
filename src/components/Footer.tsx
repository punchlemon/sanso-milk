import React from 'react';
import { Link } from 'react-router-dom';
import { logoDark } from '../assets/logo';
import { DARK_SECTION, FONTS } from '../constants/theme';
import { INSTAGRAM_ACCOUNTS } from '../utils/instagramUtils';
import InstagramProfileButton from './InstagramProfileButton';
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
      <div className="container mx-auto px-6 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          {/* ロゴと説明 */}
          <div className="md:col-span-5">
            <div className="mb-6 flex items-center">
              <img
                src={logoDark}
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
              className={`${DARK_SECTION.TEXT.SEMI_MUTED} mb-6 md:mb-8 leading-relaxed text-sm md:text-base hidden md:block`}
            >
              標高およそ1,000mの中央アルプスの麓、自然に囲まれた静寂の中で、特別なひとときを。
              安全な食と健康を大切にする山荘です。
            </p>
            <div className="flex space-x-3 md:space-x-4">
              {INSTAGRAM_ACCOUNTS.map((account) => (
                <InstagramProfileButton
                  key={account.username}
                  account={account}
                  size="md"
                />
              ))}
            </div>
          </div>

          {/* 営業情報 */}
          <div className="md:col-span-3">
            <h3
              className={`text-lg font-bold mb-4 md:mb-6 ${DARK_SECTION.TEXT.DEFAULT} ${FONTS.SERIF} border-b border-gray-800 pb-2`}
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
                    11:00～17:00（夜はご予約のみの営業）
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
                    毎週 月曜日・火曜日（6月は月・火も営業 11:00～15:00）
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* サイトマップ */}
          <div className="md:col-span-2">
            <h3
              className={`text-lg font-bold mb-4 md:mb-6 ${DARK_SECTION.TEXT.DEFAULT} ${FONTS.SERIF} border-b border-gray-800 pb-2`}
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
              className={`text-lg font-bold mb-4 md:mb-6 ${DARK_SECTION.TEXT.DEFAULT} ${FONTS.SERIF} border-b border-gray-800 pb-2`}
            >
              お問い合わせ
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt
                  className={`mt-1 mr-3 ${DARK_SECTION.TEXT.MUTED}`}
                />
                <div className={`${DARK_SECTION.TEXT.SEMI_MUTED}`}>
                  〒396-0029 長野県伊那市横山風の谷9749
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

        <div
          className={`mt-8 md:mt-16 pt-4 md:pt-6 border-t border-gray-800 text-center`}
        >
          <div className={`${DARK_SECTION.TEXT.MUTED} text-sm`}>
            &copy; {new Date().getFullYear()} 山荘ミルク All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
