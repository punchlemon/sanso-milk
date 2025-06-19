import React from 'react';
import { DARK_SECTION, LIGHT_SECTION } from '../constants/theme';

const LodgingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* ヘッダーセクション */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/lodging/header.jpg')" }}
        ></div>
        <div className={`absolute inset-0 ${DARK_SECTION.GRADIENT.HERO}`}></div>

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-20">
            <h1
              className={`${DARK_SECTION.TEXT.DEFAULT} font-serif text-6xl md:text-8xl font-light mb-6 tracking-wide`}
            >
              宿泊案内
            </h1>
            <p
              className={`${DARK_SECTION.TEXT.SEMI_MUTED} text-xl md:text-2xl max-w-2xl leading-relaxed`}
            >
              静寂に包まれた山の宿で、都市の喧騒を忘れる特別な時間を
            </p>
          </div>
        </div>
      </section>

      {/* 宿泊施設一覧 */}
      <section className={`py-24 ${LIGHT_SECTION.BG.PRIMARY}`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* ウェストロッジ */}
            <div>
              <div className="relative overflow-hidden bg-white shadow-lg">
                {/* メイン画像 */}
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/lodging/west/main.jpg')",
                  }}
                ></div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2
                      className={`${LIGHT_SECTION.TEXT.DEFAULT} text-2xl font-light tracking-wider`}
                    >
                      ウェストロッジ
                    </h2>
                    <div
                      className={`w-8 h-px ${LIGHT_SECTION.ACCENT.BG}`}
                    ></div>
                  </div>

                  <p
                    className={`${LIGHT_SECTION.TEXT.MUTED} mb-6 leading-relaxed text-sm`}
                  >
                    シンプルながらも落ち着いた雰囲気の客室
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className={`${LIGHT_SECTION.TEXT.SLIGHT_MUTED}`}>
                        シングル利用
                      </span>
                      <span
                        className={`${LIGHT_SECTION.TEXT.DEFAULT} font-medium`}
                      >
                        ¥11,000
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${LIGHT_SECTION.TEXT.SLIGHT_MUTED}`}>
                        ツイン利用
                      </span>
                      <span
                        className={`${LIGHT_SECTION.TEXT.DEFAULT} font-medium`}
                      >
                        ¥13,200
                      </span>
                    </div>
                    <div className={`${LIGHT_SECTION.TEXT.MUTED} text-sm mt-2`}>
                      ロフト 布団1組につき ¥3,300
                    </div>
                  </div>

                  <div
                    className={`${LIGHT_SECTION.BG.PRIMARY_LIGHT} p-6 space-y-3`}
                  >
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className={`${LIGHT_SECTION.TEXT.MUTED} block`}>
                          客室数
                        </span>
                        <span className={`${LIGHT_SECTION.TEXT.DEFAULT}`}>
                          3部屋
                        </span>
                      </div>
                      <div>
                        <span className={`${LIGHT_SECTION.TEXT.MUTED} block`}>
                          定員
                        </span>
                        <span className={`${LIGHT_SECTION.TEXT.DEFAULT}`}>
                          2〜4名/部屋
                        </span>
                      </div>
                      <div>
                        <span className={`${LIGHT_SECTION.TEXT.MUTED} block`}>
                          バス・トイレ
                        </span>
                        <span className={`${LIGHT_SECTION.TEXT.DEFAULT}`}>
                          完備
                        </span>
                      </div>
                      <div>
                        <span className={`${LIGHT_SECTION.TEXT.MUTED} block`}>
                          暖房
                        </span>
                        <span className={`${LIGHT_SECTION.TEXT.DEFAULT}`}>
                          あり
                        </span>
                      </div>
                      <div>
                        <span className={`${LIGHT_SECTION.TEXT.MUTED} block`}>
                          電波
                        </span>
                        <span className={`${LIGHT_SECTION.TEXT.DEFAULT}`}>
                          なし
                        </span>
                      </div>
                    </div>
                    <div
                      className={`border-t ${LIGHT_SECTION.TEXT.MUTED} pt-3`}
                    >
                      <span
                        className={`${LIGHT_SECTION.TEXT.MUTED} text-sm block mb-1`}
                      >
                        アメニティ
                      </span>
                      <span
                        className={`${LIGHT_SECTION.TEXT.SEMI_MUTED} text-sm`}
                      >
                        タオル、バスタオル、歯ブラシセット
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* イーストロッジ */}
            <div>
              <div className="relative overflow-hidden bg-white shadow-lg">
                {/* メイン画像 */}
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/lodging/east/main.jpg')",
                  }}
                ></div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2
                      className={`${LIGHT_SECTION.TEXT.DEFAULT} text-2xl font-light tracking-wider`}
                    >
                      イーストロッジ
                    </h2>
                    <div
                      className={`w-8 h-px ${LIGHT_SECTION.ACCENT.BG}`}
                    ></div>
                  </div>

                  <p
                    className={`${LIGHT_SECTION.TEXT.MUTED} mb-6 leading-relaxed text-sm`}
                  >
                    本格的な山小屋スタイルの共同宿泊スペース
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className={`${LIGHT_SECTION.TEXT.SLIGHT_MUTED}`}>
                        素泊まり一律
                      </span>
                      <span
                        className={`${LIGHT_SECTION.TEXT.DEFAULT} font-medium`}
                      >
                        ¥4,400
                      </span>
                    </div>
                  </div>

                  <div
                    className={`${LIGHT_SECTION.BG.PRIMARY_LIGHT} p-6 space-y-3`}
                  >
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className={`${LIGHT_SECTION.TEXT.MUTED} block`}>
                          定員
                        </span>
                        <span className={`${LIGHT_SECTION.TEXT.DEFAULT}`}>
                          20名
                        </span>
                      </div>
                      <div>
                        <span className={`${LIGHT_SECTION.TEXT.MUTED} block`}>
                          バス・トイレ
                        </span>
                        <span className={`${LIGHT_SECTION.TEXT.DEFAULT}`}>
                          共同
                        </span>
                      </div>
                      <div>
                        <span className={`${LIGHT_SECTION.TEXT.MUTED} block`}>
                          暖房
                        </span>
                        <span className={`${LIGHT_SECTION.TEXT.DEFAULT}`}>
                          あり
                        </span>
                      </div>
                      <div>
                        <span className={`${LIGHT_SECTION.TEXT.MUTED} block`}>
                          電波
                        </span>
                        <span className={`${LIGHT_SECTION.TEXT.DEFAULT}`}>
                          なし
                        </span>
                      </div>
                    </div>
                    <div
                      className={`border-t ${LIGHT_SECTION.TEXT.MUTED} pt-3`}
                    >
                      <span
                        className={`${LIGHT_SECTION.TEXT.MUTED} text-sm block mb-1`}
                      >
                        アメニティ
                      </span>
                      <span
                        className={`${LIGHT_SECTION.TEXT.SEMI_MUTED} text-sm`}
                      >
                        タオル、バスタオル、歯ブラシセット
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LodgingPage;
