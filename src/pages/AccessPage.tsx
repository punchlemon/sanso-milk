import React from 'react';
import { FONTS, getSectionColors } from '../constants/theme';
import { FaMapMarkerAlt } from 'react-icons/fa';

const AccessPage: React.FC = () => {
  // セクションごとのカラーとスタイルを取得
  const accessColors = getSectionColors('light');
  const heroColors = getSectionColors('dark'); // ヒーローセクション用に追加

  return (
    <div>
      {/* 固定背景画像 - position: fixed で固定、z-indexを最背面に */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/access/car_window.jpg")',
          zIndex: -10, // より低いz-indexで確実に背後に表示
        }}
      />

      {/* コンテンツ - フッターを見えるようにするために通常のフロー内に配置 */}
      <div className="relative z-1 pb-0">
        {/* ヒーローセクション - HomePageと同様のスタイリング */}
        <section className="relative h-screen w-full flex items-end justify-start overflow-hidden">
          {/* コンテンツ - 左下に配置 */}
          <div className="container mx-auto px-6 py-24 relative z-10 text-center">
            <div className="max-auto">
              <h1
                className={`${FONTS.SERIF} ${heroColors.TEXT.DEFAULT} leading-tight`}
                style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
              >
                アクセス
              </h1>
              <p
                className={`${heroColors.TEXT.SEMI_MUTED}`}
                style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
              >
                山荘ミルクへのご案内
              </p>
              <div className={`text-sm ${heroColors.TEXT.MUTED}`}>
                自然に囲まれた静寂の中で、特別なひとときを
              </div>
            </div>
          </div>
        </section>

        {/* コンテンツセクション */}
        <div className="w-full">
          {/* 基本情報セクション */}
          <section className="py-16 bg-white bg-opacity-90">
            <div className="container mx-auto px-4">
              <h2
                className={`${FONTS.SERIF} text-3xl font-bold mb-12 text-center ${accessColors.TEXT.DEFAULT}`}
              >
                基本情報
              </h2>
              <div className="bg-white shadow-lg overflow-hidden max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row">
                  <div className={`md:w-1/2 p-6 ${accessColors.BG.PRIMARY}`}>
                    <h2
                      className={`text-2xl font-bold mb-3 ${accessColors.TEXT.DEFAULT}`}
                    >
                      山荘ミルク
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3
                          className={`font-bold ${accessColors.TEXT.DEFAULT} mb-1`}
                        >
                          住所
                        </h3>
                        <p className={accessColors.TEXT.SEMI_MUTED}>
                          〒396-0029
                          <br />
                          長野県伊那市横山風の谷9749
                        </p>
                      </div>
                      <div>
                        <h3
                          className={`font-bold ${accessColors.TEXT.DEFAULT} mb-1`}
                        >
                          電話番号
                        </h3>
                        <p className={accessColors.TEXT.SEMI_MUTED}>
                          0265-72-9990
                        </p>
                      </div>
                      <div>
                        <h3
                          className={`font-bold ${accessColors.TEXT.DEFAULT} mb-1`}
                        >
                          FAX番号
                        </h3>
                        <p className={accessColors.TEXT.SEMI_MUTED}>
                          0265-72-7299
                        </p>
                      </div>
                      <div>
                        <h3
                          className={`font-bold ${accessColors.TEXT.DEFAULT} mb-1`}
                        >
                          営業時間
                        </h3>
                        <p className={accessColors.TEXT.SEMI_MUTED}>
                          11:00～17:00
                          <br />
                          <span className="text-sm">
                            (夜はご予約のみの営業となります)
                          </span>
                        </p>
                      </div>
                      <div>
                        <h3
                          className={`font-bold ${accessColors.TEXT.DEFAULT} mb-1`}
                        >
                          定休日
                        </h3>
                        <p className={accessColors.TEXT.SEMI_MUTED}>
                          毎週 月曜日・火曜日
                          <br />
                          <span className="text-sm">
                            (薔薇の季節の6月は月曜日・火曜日も営業 11:00～15:00)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="relative h-64 md:h-full w-full bg-gray-100">
                      <img
                        src="/images/access/road.jpg"
                        alt="山荘ミルク周辺の風景"
                        className="absolute inset-0 w-full h-full object-cover md:object-center"
                        style={{ objectPosition: 'center 30%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 交通案内セクション */}
          <section className="py-16 bg-white bg-opacity-90">
            <div className="container mx-auto px-4">
              <h2
                className={`${FONTS.SERIF} text-3xl font-bold mb-12 text-center ${accessColors.TEXT.DEFAULT}`}
              >
                交通案内
              </h2>

              {/* マップセクション - アクセスマップを中央に配置 */}
              <div className="max-w-4xl mx-auto mb-12">
                <div className="flex justify-center">
                  {/* アクセスマップ画像 */}
                  <div className="h-80 md:h-96 overflow-hidden shadow-md w-full max-w-xl">
                    <img
                      src="/images/access/map.jpg"
                      alt="アクセスマップ"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* 各種交通手段の情報 - 横並びに */}
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* 車でのアクセス */}
                  <div className="bg-white shadow-sm h-full">
                    <div className="px-5 py-3 border-b border-gray-100">
                      <h3
                        className={`text-lg font-medium ${accessColors.TEXT.DEFAULT}`}
                      >
                        お車の場合
                      </h3>
                    </div>
                    <div className="px-5 py-4 h-full">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className={`${accessColors.TEXT.DEFAULT}`}>
                            中央道小黒川スマートICから
                          </div>
                          <div
                            className={`${accessColors.TEXT.SEMI_MUTED} text-right text-sm`}
                          >
                            約10分
                          </div>
                        </div>
                        <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
                          <div className={`${accessColors.TEXT.DEFAULT}`}>
                            中央道伊那ICから
                          </div>
                          <div
                            className={`${accessColors.TEXT.SEMI_MUTED} text-right text-sm`}
                          >
                            約20分
                          </div>
                        </div>
                        <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
                          <div className={`${accessColors.TEXT.DEFAULT}`}>
                            中央道駒ヶ根ICから
                          </div>
                          <div
                            className={`${accessColors.TEXT.SEMI_MUTED} text-right text-sm`}
                          >
                            約30分
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 電車でのアクセス */}
                  <div className="bg-white shadow-sm h-full">
                    <div className="px-5 py-3 border-b border-gray-100">
                      <h3
                        className={`text-lg font-medium ${accessColors.TEXT.DEFAULT}`}
                      >
                        電車の場合
                      </h3>
                    </div>
                    <div className="px-5 py-4 h-full">
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-baseline justify-between">
                            <h5 className={`${accessColors.TEXT.DEFAULT}`}>
                              東京方面から
                            </h5>
                            <span className="text-xs text-gray-500">
                              約3時間30分
                            </span>
                          </div>
                          <p
                            className={`${accessColors.TEXT.SEMI_MUTED} text-sm mt-1`}
                          >
                            JR中央本線・岡谷乗換・飯田線伊那市駅下車
                          </p>
                        </div>

                        <div>
                          <div className="flex items-baseline justify-between">
                            <h5 className={`${accessColors.TEXT.DEFAULT}`}>
                              名古屋方面から
                            </h5>
                            <span className="text-xs text-gray-500">
                              約3時間30分
                            </span>
                          </div>
                          <p
                            className={`${accessColors.TEXT.SEMI_MUTED} text-sm mt-1`}
                          >
                            JR中央本線・塩尻乗換・飯田線伊那市駅下車
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 高速バスでのアクセス */}
                  <div className="bg-white shadow-sm h-full">
                    <div className="px-5 py-3 border-b border-gray-100">
                      <h3
                        className={`text-lg font-medium ${accessColors.TEXT.DEFAULT}`}
                      >
                        高速バスの場合
                      </h3>
                    </div>
                    <div className="px-5 py-4 h-full">
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-baseline justify-between">
                            <h5 className={`${accessColors.TEXT.DEFAULT}`}>
                              東京方面から
                            </h5>
                            <span className="text-xs text-gray-500">
                              約3時間30分
                            </span>
                          </div>
                          <p
                            className={`${accessColors.TEXT.SEMI_MUTED} text-sm mt-1`}
                          >
                            中央高速バス（新宿）・伊那市下車
                          </p>
                        </div>

                        <div>
                          <div className="flex items-baseline justify-between">
                            <h5 className={`${accessColors.TEXT.DEFAULT}`}>
                              名古屋方面から
                            </h5>
                            <span className="text-xs text-gray-500">
                              約3時間30分
                            </span>
                          </div>
                          <p
                            className={`${accessColors.TEXT.SEMI_MUTED} text-sm mt-1`}
                          >
                            中央高速バス（名鉄バスセンター）・伊那市下車
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-white shadow-sm p-4 flex items-center text-sm">
                  <FaMapMarkerAlt className="text-primary mr-3" />
                  <p className={accessColors.TEXT.SEMI_MUTED}>
                    宿泊の場合は伊那市駅または伊那市バス停までお迎えに伺います。事前にお問い合わせください。
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AccessPage;
