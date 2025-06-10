import React from 'react';
import { FONTS, getSectionColors } from '../constants/theme';

const LodgingPage: React.FC = () => {
  // テーマカラーを取得
  const heroColors = getSectionColors('dark');
  const roomsColors = getSectionColors('light');

  // 部屋の写真
  const westLodgeImages = ['/images/lodging/west/main.jpg'];

  const eastLodgeImages = ['/images/lodging/east/main.jpg'];

  return (
    <div className="min-h-screen">
      {/* ヘッダー画像セクション - ダークテーマ */}
      <section
        className={`relative h-[70vh] overflow-hidden ${heroColors.BG.PRIMARY}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/lodging/header.jpg')" }}
        ></div>
        <div className={`absolute inset-0 ${heroColors.OVERLAY.LIGHT}`}></div>
        <div className="absolute bottom-0 w-full">
          <div className="container mx-auto px-6 py-12">
            <h1
              className={`${FONTS.SERIF} ${heroColors.TEXT.DEFAULT} mb-4`}
              style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
            >
              宿泊施設
            </h1>
            <p
              className={`${heroColors.TEXT.SLIGHT_MUTED} max-w-2xl`}
              style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
            >
              自然に囲まれた静かな空間で、くつろぎの時間をお過ごしください
            </p>
          </div>
        </div>
      </section>

      {/* メインコンテンツ - ライトテーマ */}
      <section
        className={`py-16 ${roomsColors.BG.PRIMARY} ${roomsColors.TEXT.DEFAULT}`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-12">
            <p
              className={`${roomsColors.TEXT.SLIGHT_MUTED} mb-8 leading-relaxed`}
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
            >
              大自然の懐に包まれ、ゆっくりとお休みください。
              <br />
              朝は小鳥のさえずりで爽やかに目が覚め、楽しい一日の始まりです。
              <br />
              標高1,000mの中央アルプスの麓で、澄んだ空気と静寂の中で過ごす特別なひとときをお楽しみください。
              <br />
            </p>

            <div className="mb-16">
              <p
                className={`${roomsColors.TEXT.MUTED} mb-2 tracking-wider`}
                style={{ fontSize: 'clamp(0.75rem, 1vw, 1rem)' }}
              >
                お部屋のご案内
              </p>
              <h2
                className={`${FONTS.SERIF} mb-8 ${roomsColors.TEXT.DEFAULT} leading-relaxed tracking-wider`}
                style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
              >
                快適にお過ごしいただける
                <br />
                客室をご用意
              </h2>
            </div>

            {/* 2つのロッジの特徴を視覚的に並べて表示 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3
                  className={`text-xl font-medium mb-2 ${roomsColors.TEXT.DEFAULT}`}
                >
                  ウェストロッジ
                </h3>
                <p className={`${roomsColors.TEXT.MUTED} mb-4 text-sm`}>
                  レトロな雰囲気と基本的な快適さを備えた客室
                </p>
                <div className="flex items-center mb-4">
                  <span
                    className={`inline-block w-2 h-2 rounded-full ${roomsColors.ACCENT.DEFAULT} mr-2`}
                  ></span>
                  <span className={`text-sm ${roomsColors.TEXT.SLIGHT_MUTED}`}>
                    ちょっと贅沢したい方に
                  </span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3
                  className={`text-xl font-medium mb-2 ${roomsColors.TEXT.DEFAULT}`}
                >
                  イーストロッジ
                </h3>
                <p className={`${roomsColors.TEXT.MUTED} mb-4 text-sm`}>
                  素朴な山小屋体験を楽しめる共同スペース
                </p>
                <div className="flex items-center mb-4">
                  <span
                    className={`inline-block w-2 h-2 rounded-full ${roomsColors.ACCENT.DEFAULT} mr-2`}
                  ></span>
                  <span className={`text-sm ${roomsColors.TEXT.SLIGHT_MUTED}`}>
                    気軽に山の宿泊を楽しみたい方に
                  </span>
                </div>
              </div>
            </div>

            {/* ウェストロッジ */}
            <div className="mb-16">
              <h3 className={`text-2xl font-bold ${roomsColors.TEXT.DEFAULT}`}>
                ウェストロッジ
              </h3>
              <p className={`${roomsColors.TEXT.MUTED} text-sm mb-6`}>
                シンプルながらも落ち着いた雰囲気の客室
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  {/* 部屋写真 */}
                  <div className="overflow-hidden shadow-sm rounded-md mb-4">
                    <div
                      className="bg-cover bg-center h-64"
                      style={{
                        backgroundImage: `url('${westLodgeImages[0]}')`,
                      }}
                    ></div>
                  </div>

                  {/* 小さい写真2枚 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="overflow-hidden rounded-md">
                      <div
                        className="bg-cover bg-center h-32"
                        style={{
                          backgroundImage: `url('${westLodgeImages[1]}')`,
                        }}
                      ></div>
                    </div>
                    <div className="overflow-hidden rounded-md">
                      <div
                        className="bg-cover bg-center h-32"
                        style={{
                          backgroundImage: `url('${westLodgeImages[2]}')`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div>
                  <p
                    className={`${roomsColors.TEXT.SLIGHT_MUTED} mb-4 leading-relaxed`}
                  >
                    レトロな雰囲気のインテリアで、必要な設備は整っています。客室数が限られているため、
                    静かに過ごしたい方におすすめです。建物は古いですが、清潔に保たれています。
                  </p>
                  <p
                    className={`${roomsColors.ACCENT2.DEFAULT} mb-6 text-lg font-medium`}
                  >
                    シングルユース：11,000円
                    <br />
                    ツインユース：13,200円
                    <br />
                    ロフト 布団1組につき 3,300円
                  </p>

                  <div
                    className={`${roomsColors.BG.PRIMARY_DARK} p-6 mb-4 rounded-md`}
                  >
                    <h4
                      className={`font-bold mb-4 ${roomsColors.TEXT.DEFAULT} text-lg`}
                    >
                      設備・アメニティ
                    </h4>
                    <ul
                      className={`${roomsColors.TEXT.SEMI_MUTED} list-disc pl-5 space-y-2`}
                    >
                      <li>定員: 2〜4名</li>
                      <li>ベッド2つ（3人目の方からロフトに布団）</li>
                      <li>バス・トイレ付、暖房有り</li>
                      <li>電波: ×</li>
                      <li>タオル、バスタオル、歯ブラシセット</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* イーストロッジ */}
            <div className="mb-16">
              <h3 className={`text-2xl font-bold ${roomsColors.TEXT.DEFAULT}`}>
                イーストロッジ
              </h3>
              <p className={`${roomsColors.TEXT.MUTED} text-sm mb-6`}>
                本格的な山小屋スタイルの共同宿泊スペース
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  {/* 部屋写真 */}
                  <div className="overflow-hidden shadow-sm rounded-md mb-4">
                    <div
                      className="bg-cover bg-center h-64"
                      style={{
                        backgroundImage: `url('${eastLodgeImages[0]}')`,
                      }}
                    ></div>
                  </div>

                  {/* 小さい写真2枚 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="overflow-hidden rounded-md">
                      <div
                        className="bg-cover bg-center h-32"
                        style={{
                          backgroundImage: `url('${eastLodgeImages[1]}')`,
                        }}
                      ></div>
                    </div>
                    <div className="overflow-hidden rounded-md">
                      <div
                        className="bg-cover bg-center h-32"
                        style={{
                          backgroundImage: `url('${eastLodgeImages[2]}')`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div>
                  <p
                    className={`${roomsColors.TEXT.SLIGHT_MUTED} mb-4 leading-relaxed`}
                  >
                    素朴な山小屋スタイルのお部屋です。設備は最低限ながらリーズナブルな価格で、
                    グループでの利用におすすめ。窓からの眺望はありませんが、山の雰囲気を気軽に
                    体験できます。
                  </p>
                  <p
                    className={`${roomsColors.ACCENT2.DEFAULT} mb-6 text-lg font-medium`}
                  >
                    素泊まり一律 4,400円
                  </p>

                  <div
                    className={`${roomsColors.BG.PRIMARY_DARK} p-6 mb-4 rounded-md`}
                  >
                    <h4
                      className={`font-bold mb-4 ${roomsColors.TEXT.DEFAULT} text-lg`}
                    >
                      設備・アメニティ
                    </h4>
                    <ul
                      className={`${roomsColors.TEXT.SEMI_MUTED} list-disc pl-5 space-y-2`}
                    >
                      <li>定員: 1〜20名</li>
                      <li>布団</li>
                      <li>バス・トイレ共同、暖房有り</li>
                      <li>電波: ×</li>
                      <li>タオル、バスタオル、歯ブラシセット</li>
                    </ul>
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
