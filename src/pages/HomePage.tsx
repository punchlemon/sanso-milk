import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-natural-light">
      {/* ヒーローセクション - 大胆な自然派デザイン */}
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: 'url("/images/hero-background.jpg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* 有機的な形のオーバーレイ */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillOpacity="0.15"
              fill="#e6e1d5"
              d="M0,224L48,192C96,160,192,96,288,96C384,96,480,160,576,192C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillOpacity="0.2"
              fill="#dda15e"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* ヒーローコンテンツ */}
        <div className="text-center text-white z-10 px-4 relative">
          <div className="inline-block mb-6">
            <svg
              className="w-16 h-16 md:w-20 md:h-20 mx-auto"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.5C12 6.5 9 3.5 5.5 3.5C2.5 3.5 1 5.8 1 8.5C1 11.4 3 13 6 13C9 13 12 10 12 10"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M12 6.5C12 6.5 15 3.5 18.5 3.5C21.5 3.5 23 5.8 23 8.5C23 11.4 21 13 18 13C15 13 12 10 12 10"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M19 8.5C19 12.5 17 16.5 12 20.5C7 16.5 5 12.5 5 8.5"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-wide">
            山荘ミルク
          </h1>
          <p className="text-xl md:text-3xl mb-12 font-light tracking-widest">
            〜安全な食と健康を求めて〜
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <Link
              to="/about"
              className="bg-accent hover:bg-accent-dark text-white font-bold py-4 px-10 rounded-full transition-colors duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-xl"
            >
              施設について
            </Link>
            <Link
              to="/monthly-schedule"
              className="bg-transparent hover:bg-white hover:text-primary-dark text-white border-2 border-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              営業案内
            </Link>
          </div>
        </div>

        {/* 下部装飾 - スクロール指示 */}
        <div className="absolute bottom-10 left-0 right-0 text-center z-10 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>

      {/* イントロセクション - 自然派デザイン */}
      <section className="py-20 md:py-28 bg-natural-light bg-paper-texture relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16 text-primary-dark text-center relative">
              <span className="relative z-10">自然と健康が調和する空間</span>
              <svg
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-accent w-24 h-6 opacity-60"
                viewBox="0 0 100 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="currentColor" d="M0,12 Q25,3 50,12 T100,12"></path>
              </svg>
            </h2>

            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <p className="text-lg mb-6 text-primary-dark leading-relaxed">
                  標高およそ1,000mの中央アルプスの麓、きらめく星空と清らかな空気に包まれた山荘ミルクは、
                  <span className="font-medium">自然の恵みと共に生きる</span>
                  、心と体の健康を大切にする方々のための特別な空間です。
                </p>
                <p className="text-lg mb-8 text-primary-dark leading-relaxed">
                  無農薬有機栽培の食材、中央アルプスの伏流水を使った料理や、
                  <span className="italic">1秒1滴の水出しコーヒー</span>、
                  はちみつと天然塩だけで作る自家製パンなど、
                  <span className="font-medium">安全で健康的な食</span>
                  へのこだわりが自慢です。
                </p>
                <div className="mt-8 text-center md:text-left">
                  <Link
                    to="/about"
                    className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-colors shadow-natural"
                  >
                    山荘について詳しく見る
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                {/* 実際の山荘外観写真に差し替え */}
                <div className="relative z-10 rounded-lg overflow-hidden shadow-natural-md transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-gray-200 h-80 md:h-96 flex items-center justify-center">
                    <span className="text-gray-500">山荘外観</span>
                  </div>
                </div>
                {/* 背景装飾 */}
                <div className="absolute -bottom-6 -right-6 w-4/5 h-4/5 rounded-lg bg-accent opacity-10 z-0"></div>
                <div className="absolute -top-6 -left-6 w-2/3 h-2/3 rounded-full bg-primary opacity-10 z-0"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 背景装飾 - 植物モチーフ */}
        <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="text-primary-dark"
          >
            <path d="M43.2,126.9c-14.2,0-27.5,7.5-35.2,19.2c-2.6,4-5.1,8.7-5.1,14.1c0,17.5,14.6,31.8,32.7,31.8c14.7,0,27.5-9.7,31.8-22.6  c1.2-3.5,1.9-7.2,1.9-11c0-4-0.8-7.8-2-11.3c-0.5-1.5-1.1-2.9-1.9-4.3c-4.9-9.3-14.7-15.8-26.2-15.8" />
            <path d="M30.4,142c-0.2,0-0.4,0-0.6,0c0.5-0.9,1-1.8,1.5-2.7c0,0,0,0,0,0l0,0C30.9,140.2,30.6,141.1,30.4,142z" />
            <path d="M31.2,139.1L31.2,139.1L31.2,139.1z" />
            <path d="M30.5,139.4L30.5,139.4L30.5,139.4z" />
            <path d="M32.6,100.6c9.4,0,17.9,5.3,22.2,13.5c1.7,3.2,2.9,6.8,3.3,10.6c0.1,1.1,0.2,2.3,0.2,3.4c0,11.8-9.5,21.4-21.3,21.8  c-0.1,0-0.3,0-0.4,0c-0.1,0-0.2,0-0.3,0c-11.9,0-21.6-9.3-21.6-20.8c0-1,0.1-2,0.2-3c0.6-4.2,2.1-8.1,4.3-11.5  C23.5,107.3,32.4,100.6,43.5,100.6" />
          </svg>
        </div>
        <div className="absolute bottom-10 left-5 w-40 h-40 opacity-10">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="text-primary-dark"
          >
            <path d="M38.4,65.6c6.6-8.6,15.2-14.3,24.9-16.4c2.1-0.5,4.2-0.7,6.5-0.7c7.8,0,15,2.8,20.5,7.5c3.9,3.5,6.8,8,8.2,13.3  c0.5,2.1,0.8,4.3,0.8,6.5c0,2.2-0.2,4.4-0.7,6.5c-0.6,2.3-1.5,4.5-2.6,6.5c-3.6,6.1-9.7,10.4-16.9,11.7c-1.5,0.3-3,0.4-4.5,0.4  c-5.9,0-11.4-2.2-15.6-5.9c-2.2-1.9-4-4.2-5.4-6.9c-1.1-2.1-2-4.3-2.4-6.7c-0.4-1.8-0.5-3.8-0.5-5.7c0-1.6,0.1-3.2,0.4-4.8  C36.8,69.2,37.5,67.3,38.4,65.6z" />
          </svg>
        </div>
      </section>

      {/* カテゴリーナビゲーションセクション - 大胆なデザインの導入 */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16 text-primary-dark text-center">
            <span className="inline-block relative">
              体と心を育む場所
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent opacity-60"></span>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* 施設・サービス */}
            <div className="bg-natural-light rounded-2xl overflow-hidden shadow-natural-md transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="h-48 bg-primary bg-opacity-10 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                <span className="text-6xl">🏡</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary-dark">
                  施設・サービス
                </h3>
                <p className="text-primary-dark mb-6">
                  宿泊施設、ドッグラン、結婚式、食の会など、山荘ミルクが提供する様々なサービスをご紹介します。
                </p>
                <div className="space-y-2">
                  <Link
                    to="/lodging"
                    className="block text-primary hover:text-accent-dark transition-colors flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    宿泊施設
                  </Link>
                  <Link
                    to="/dogrun"
                    className="block text-primary hover:text-accent-dark transition-colors flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    ドッグラン
                  </Link>
                  <Link
                    to="/wedding"
                    className="block text-primary hover:text-accent-dark transition-colors flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    結婚式
                  </Link>
                  <Link
                    to="/food-club"
                    className="block text-primary hover:text-accent-dark transition-colors flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    食の会
                  </Link>
                  <Link
                    to="/facilities"
                    className="block text-primary hover:text-accent-dark transition-colors flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    施設案内
                  </Link>
                </div>
              </div>
            </div>

            {/* 特産品・お買い物 */}
            <div className="bg-natural-light rounded-2xl overflow-hidden shadow-natural-md transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="h-48 bg-accent bg-opacity-10 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                <span className="text-6xl">🛒</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary-dark">
                  特産品・お買い物
                </h3>
                <p className="text-primary-dark mb-6">
                  無農薬有機栽培のこだわり食材や、自家製パン、お弁当など、健康的な食品を取り揃えております。
                </p>
                <div className="space-y-2">
                  <Link
                    to="/products"
                    className="block text-primary hover:text-accent-dark transition-colors flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    商品一覧
                  </Link>
                  <Link
                    to="/products"
                    className="block text-primary hover:text-accent-dark transition-colors flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    自家製パン
                  </Link>
                  <Link
                    to="/products"
                    className="block text-primary hover:text-accent-dark transition-colors flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    自然食品
                  </Link>
                  <Link
                    to="/products"
                    className="block text-primary hover:text-accent-dark transition-colors flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    お弁当
                  </Link>
                </div>
              </div>
            </div>

            {/* 基本情報・アクセス */}
            <div className="bg-natural-light rounded-2xl overflow-hidden shadow-natural-md transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="h-48 bg-natural-dark bg-opacity-10 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                <span className="text-6xl">📍</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary-dark">
                  基本情報・アクセス
                </h3>
                <p className="text-primary-dark mb-6">
                  営業時間や定休日、アクセス方法など、ご来店の際に役立つ情報をご案内します。
                </p>
                <div className="space-y-2">
                  <Link
                    to="/access"
                    className="block text-primary hover:text-accent-dark transition-colors flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    アクセス情報
                  </Link>
                  <Link
                    to="/monthly-schedule"
                    className="block text-primary hover:text-accent-dark transition-colors flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    営業カレンダー
                  </Link>
                  <Link
                    to="/contact"
                    className="block text-primary hover:text-accent-dark transition-colors flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    お問い合わせ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 背景装飾 - 有機的な形状 */}
        <div className="absolute top-0 left-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="text-natural-light"
            fill="currentColor"
          >
            <path
              fillOpacity="1"
              d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,192C672,213,768,203,864,170.7C960,139,1056,85,1152,69.3C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* 山荘ミルクの特徴セクション - より有機的で自然なスタイルへ */}
      <section className="py-20 bg-natural-light bg-paper-texture relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16 text-primary-dark text-center">
            <span className="inline-block relative">
              山荘ミルクのこだわり
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent opacity-60"></span>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-natural relative overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-natural">
              <div className="absolute top-0 left-0 h-1 w-full bg-accent"></div>
              <div className="mb-6 text-5xl text-center inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary bg-opacity-10 text-primary">
                💧
              </div>
              <h3 className="font-bold text-xl mb-4 text-primary-dark">
                こだわりの水
              </h3>
              <p className="text-gray-700">
                中央アルプスの伏流水を使用。大学教授により科学的に分析され、その純度と清浄さが証明されています。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-natural relative overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-natural">
              <div className="absolute top-0 left-0 h-1 w-full bg-accent"></div>
              <div className="mb-6 text-5xl text-center inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary bg-opacity-10 text-primary">
                ☕
              </div>
              <h3 className="font-bold text-xl mb-4 text-primary-dark">
                1秒1滴コーヒー
              </h3>
              <p className="text-gray-700">
                無農薬有機栽培の豆と上質な水で淹れる1秒1滴の水出しコーヒー。渋みが少なく、まろやかな味わいが特徴です。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-natural relative overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-natural">
              <div className="absolute top-0 left-0 h-1 w-full bg-accent"></div>
              <div className="mb-6 text-5xl text-center inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary bg-opacity-10 text-primary">
                🍞
              </div>
              <h3 className="font-bold text-xl mb-4 text-primary-dark">
                自家製無添加パン
              </h3>
              <p className="text-gray-700">
                はちみつと天然塩のみで、国産小麦粉を使用。卵、牛乳、バター、砂糖、イースト菌は不使用の健康パン。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-natural relative overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-natural">
              <div className="absolute top-0 left-0 h-1 w-full bg-accent"></div>
              <div className="mb-6 text-5xl text-center inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary bg-opacity-10 text-primary">
                🌿
              </div>
              <h3 className="font-bold text-xl mb-4 text-primary-dark">
                無農薬有機栽培
              </h3>
              <p className="text-gray-700">
                すべての食材は無農薬有機栽培のものを使用。自家製の調味料も、健康に配慮して丁寧に作られています。
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/food-club"
              className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-4 px-10 rounded-full transition-colors shadow-lg transform hover:-translate-y-1 hover:shadow-xl"
            >
              食へのこだわりを詳しく
            </Link>
          </div>
        </div>

        {/* 有機的な装飾 */}
        <div className="absolute right-0 bottom-0 w-48 h-48 opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#5f7161"
              d="M46,-70.9C60.9,-64.7,74.9,-55,81.7,-41.5C88.5,-28,88,-10.8,85.3,5.6C82.6,21.9,77.8,37.2,68.8,50.2C59.7,63.2,46.5,73.8,31.7,79.2C17,84.5,0.7,84.5,-15.4,81.4C-31.6,78.3,-47.6,72.2,-58.6,61.2C-69.5,50.2,-75.3,34.4,-79.2,17.9C-83.1,1.4,-85.2,-15.8,-80,-29.4C-74.9,-42.9,-62.6,-52.9,-49.1,-59.9C-35.7,-66.9,-21.2,-71,-6.4,-71.4C8.4,-71.8,31,-77.1,46,-70.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute left-10 top-10 w-24 h-24 opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#dda15e"
              d="M41.3,-71.2C54.4,-64.9,66.8,-56.2,75.9,-43.9C85,-31.7,90.9,-15.8,90.4,-0.3C89.9,15.3,83,30.5,74.1,44.2C65.1,57.9,54.2,70.1,41,77.8C27.8,85.6,12.2,88.9,-3.2,88.6C-18.6,88.2,-37.2,84.2,-52,74.9C-66.9,65.6,-78.1,51.1,-81.8,35.3C-85.5,19.5,-81.7,2.4,-76.9,-13.1C-72.1,-28.5,-66.4,-42.3,-56.3,-50.7C-46.2,-59.1,-31.8,-62.1,-18.5,-68.7C-5.2,-75.4,7,-85.7,19.3,-85.2C31.6,-84.7,43,-86.6,54.5,-80.6C65.9,-74.6,77.5,-61,41.3,-71.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </section>

      {/* お知らせ・営業情報セクション - ナチュラルな雰囲気の強化 */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12">
            {/* 営業情報 */}
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-primary-dark relative inline-block">
                営業情報
                <span className="absolute -bottom-2 left-0 w-3/4 h-1 bg-accent"></span>
              </h2>
              <div className="bg-natural-light p-8 rounded-lg shadow-natural mb-6 border border-natural bg-paper-texture">
                <div className="flex items-center mb-6">
                  <svg
                    className="w-8 h-8 text-accent mr-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <h3 className="text-xl font-bold text-primary-dark">
                    営業時間・定休日
                  </h3>
                </div>
                <p className="mb-4 text-gray-700 pl-11">
                  <strong className="text-primary-dark">営業時間：</strong>
                  11:00〜15:00
                </p>
                <p className="mb-4 text-gray-700 pl-11">
                  <strong className="text-primary-dark">定休日：</strong>毎週
                  月曜日・火曜日
                </p>
                <p className="text-sm text-gray-600 pl-11 border-l-2 border-accent border-opacity-40 italic">
                  ※6月のバラの季節は月曜日・火曜日も営業しております（11:00〜15:00）
                </p>
              </div>
              <div className="text-center md:text-left">
                <Link
                  to="/monthly-schedule"
                  className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-6 rounded-full transition-colors"
                >
                  月間営業カレンダーを見る
                </Link>
              </div>
            </div>

            {/* アクセス情報 */}
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-primary-dark relative inline-block">
                アクセス
                <span className="absolute -bottom-2 left-0 w-3/4 h-1 bg-accent"></span>
              </h2>
              <div className="bg-natural-light p-8 rounded-lg shadow-natural mb-6 border border-natural bg-paper-texture">
                <div className="flex items-center mb-6">
                  <svg
                    className="w-8 h-8 text-accent mr-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <h3 className="text-xl font-bold text-primary-dark">
                    所在地
                  </h3>
                </div>
                <p className="mb-4 text-gray-700 pl-11">
                  <strong className="text-primary-dark">住所：</strong>
                  長野県伊那市横山風の谷9749
                </p>
                <div className="pl-11 mb-2 border-l-2 border-accent border-opacity-40">
                  <p className="text-gray-700 mb-2">
                    <strong className="text-primary-dark">お車の場合：</strong>
                  </p>
                  <ul className="text-gray-700 list-disc ml-6 space-y-1">
                    <li>中央道小黒川スマートインターから約10分</li>
                    <li>中央道伊那ICから20分</li>
                  </ul>
                </div>
              </div>
              <div className="text-center md:text-left">
                <Link
                  to="/access"
                  className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-6 rounded-full transition-colors"
                >
                  詳しいアクセス情報を見る
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 装飾 */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f4f1ea"
              fill-opacity="1"
              d="M0,256L80,240C160,224,320,192,480,197.3C640,203,800,245,960,256C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* お問い合わせセクション - より自然で有機的なデザイン */}
      <section className="py-20 bg-primary-dark text-white relative overflow-hidden">
        {/* 自然をイメージした装飾 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg
              className="h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grain)" />
            </svg>
            <defs>
              <pattern
                id="grain"
                patternUnits="userSpaceOnUse"
                width="200"
                height="200"
              >
                <image
                  href="/images/paper-texture.png"
                  x="0"
                  y="0"
                  width="200"
                  height="200"
                />
              </pattern>
            </defs>
          </div>
        </div>

        {/* 左側の装飾 */}
        <div className="absolute left-0 top-0 h-full w-32 opacity-20">
          <svg viewBox="0 0 200 800" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M26.3,-45.5C35.3,-37.8,44.7,-32.3,51.4,-23.7C58.1,-15.1,62.2,-3.3,59.1,6.6C56,16.6,45.8,24.8,36.2,31.9C26.5,39,17.5,45.1,7.2,47.2C-3,49.3,-14.6,47.5,-24.2,42.4C-33.8,37.3,-41.3,28.9,-46,18.8C-50.7,8.7,-52.6,-3,-49.3,-12.8C-46,-22.5,-37.5,-30.4,-28.4,-38.1C-19.3,-45.8,-9.6,-53.4,-0.2,-53.1C9.3,-52.9,18.6,-44.9,26.3,-45.5Z"
              transform="translate(100 400)"
              fill="white"
            />
          </svg>
        </div>

        {/* 右側の装飾 */}
        <div className="absolute right-0 bottom-0 h-full w-32 opacity-20">
          <svg viewBox="0 0 200 800" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M29.8,-51.2C38.9,-46.1,46.4,-37.9,52.5,-28.2C58.5,-18.5,63.1,-7.4,62.9,3.8C62.7,15,57.6,26.2,50.1,34.9C42.6,43.7,32.7,50.1,21.8,53.7C10.8,57.3,-1.3,58.3,-12.2,55.1C-23.1,52,-32.8,44.8,-39.7,35.8C-46.6,26.9,-50.6,16.1,-51.2,5.6C-51.8,-4.9,-49,-15.1,-45.1,-25.8C-41.2,-36.5,-36.2,-47.8,-27.8,-52.9C-19.4,-58,-9.7,-57,0.5,-57.8C10.7,-58.7,21.4,-61.5,29.8,-51.2Z"
              transform="translate(100 400)"
              fill="white"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 relative inline-block">
              お問い合わせ
              <span className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-accent"></span>
            </h2>
            <p className="mb-12 text-lg leading-relaxed opacity-90">
              ご予約・お問い合わせは、お電話またはメールにて承っております。
              <br />
              心地よい時間をお過ごしいただくために、お気軽にご連絡ください。
            </p>
            <div className="mb-12 py-6 px-8 bg-white bg-opacity-10 inline-block rounded-lg">
              <p className="text-2xl font-bold mb-2">0X0-XXXX-XXXX</p>
              <p className="text-xl">info@milk-co.jp</p>
            </div>
            <div>
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent-dark text-white font-bold py-4 px-10 rounded-full transition-colors shadow-lg transform hover:-translate-y-1 hover:shadow-xl"
              >
                お問い合わせフォーム
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
