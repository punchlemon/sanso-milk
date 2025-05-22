import React from 'react';
import { Link } from 'react-router-dom';
import { FONTS, STYLES, getSectionColors } from '../constants/theme';

const LodgingPage: React.FC = () => {
  // テーマカラーを取得
  const heroColors = getSectionColors('dark');
  const roomsColors = getSectionColors('light');
  const diningColors = getSectionColors('light');
  const infoColors = getSectionColors('light');

  // 部屋の写真
  const westLodgeImages = [
    '/images/lodging/west/main.jpg',
    '/images/lodging/west/detail1.jpg',
    '/images/lodging/west/detail2.jpg',
  ];

  const eastLodgeImages = [
    '/images/lodging/east/main.jpg',
    '/images/lodging/east/detail1.jpg',
    '/images/lodging/east/detail2.jpg',
  ];

  const diningImages = [
    '/images/dining/breakfast-main.jpg',
    '/images/dining/food1.jpg',
    '/images/dining/food2.jpg',
    '/images/dining/food3.jpg',
  ];

  return (
    <div className="min-h-screen">
      {/* ヘッダー画像セクション - ダークテーマ */}
      <section className={`relative h-[70vh] overflow-hidden ${heroColors.BG.PRIMARY}`}>
        <div className="absolute inset-0 bg-cover bg-center"
             style={{ backgroundImage: "url('/images/lodging/header.jpg')" }}>
        </div>
        <div className={`absolute inset-0 ${heroColors.OVERLAY.LIGHT}`}></div>
        <div className="absolute bottom-0 w-full">
          <div className="container mx-auto px-6 py-12">
            <h1 className={`${FONTS.SERIF} ${heroColors.TEXT.DEFAULT} mb-4`} 
                style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}>
              宿泊施設
            </h1>
            <p className={`${heroColors.TEXT.SLIGHT_MUTED} max-w-2xl`}
               style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
              自然に囲まれた静かな空間で、くつろぎの時間をお過ごしください
            </p>
          </div>
        </div>
      </section>

      {/* メインコンテンツ - ライトテーマ */}
      <section className={`py-16 ${roomsColors.BG.PRIMARY} ${roomsColors.TEXT.DEFAULT}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-12">
            <p className={`${roomsColors.TEXT.SLIGHT_MUTED} mb-8 leading-relaxed`}
               style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}>
              大自然の懐に包まれ、ゆっくりとお休みください。<br />
              朝は小鳥のさえずりで爽やかに目が覚め、楽しい一日の始まりです。<br />
              標高1,000mの中央アルプスの麓で、澄んだ空気と静寂の中で過ごす特別なひとときをお楽しみください。<br />
            </p>

            <div className="mb-16">
              <p className={`${roomsColors.TEXT.MUTED} mb-2 tracking-wider`} 
                 style={{ fontSize: 'clamp(0.75rem, 1vw, 1rem)' }}>
                お部屋のご案内
              </p>
              <h2 className={`${FONTS.SERIF} mb-8 ${roomsColors.TEXT.DEFAULT} leading-relaxed tracking-wider`}
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
                快適にお過ごしいただける<br />客室をご用意
              </h2>
            </div>

            {/* 2つのロッジの特徴を視覚的に並べて表示 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className={`text-xl font-medium mb-2 ${roomsColors.TEXT.DEFAULT}`}>ウェストロッジ</h3>
                <p className={`${roomsColors.TEXT.MUTED} mb-4 text-sm`}>レトロな雰囲気と基本的な快適さを備えた客室</p>
                <div className="flex items-center mb-4">
                  <span className={`inline-block w-2 h-2 rounded-full ${roomsColors.ACCENT.DEFAULT} mr-2`}></span>
                  <span className={`text-sm ${roomsColors.TEXT.SLIGHT_MUTED}`}>ちょっと贅沢したい方に</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className={`text-xl font-medium mb-2 ${roomsColors.TEXT.DEFAULT}`}>イーストロッジ</h3>
                <p className={`${roomsColors.TEXT.MUTED} mb-4 text-sm`}>素朴な山小屋体験を楽しめる共同スペース</p>
                <div className="flex items-center mb-4">
                  <span className={`inline-block w-2 h-2 rounded-full ${roomsColors.ACCENT.DEFAULT} mr-2`}></span>
                  <span className={`text-sm ${roomsColors.TEXT.SLIGHT_MUTED}`}>気軽に山の宿泊を楽しみたい方に</span>
                </div>
              </div>
            </div>

            {/* ウェストロッジ */}
            <div className="mb-16">
              <h3 className={`text-2xl font-bold ${roomsColors.TEXT.DEFAULT}`}>ウェストロッジ</h3>
              <p className={`${roomsColors.TEXT.MUTED} text-sm mb-6`}>
                シンプルながらも落ち着いた雰囲気の客室
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  {/* 部屋写真 */}
                  <div className="overflow-hidden shadow-sm rounded-md mb-4">
                    <div className="bg-cover bg-center h-64" 
                         style={{ backgroundImage: `url('${westLodgeImages[0]}')` }}>
                    </div>
                  </div>

                  {/* 小さい写真2枚 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="overflow-hidden rounded-md">
                      <div className="bg-cover bg-center h-32" 
                           style={{ backgroundImage: `url('${westLodgeImages[1]}')` }}>
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-md">
                      <div className="bg-cover bg-center h-32" 
                           style={{ backgroundImage: `url('${westLodgeImages[2]}')` }}>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className={`${roomsColors.TEXT.SLIGHT_MUTED} mb-4 leading-relaxed`}>
                    レトロな雰囲気のインテリアで、必要な設備は整っています。客室数が限られているため、
                    静かに過ごしたい方におすすめです。建物は古いですが、清潔に保たれています。
                  </p>
                  <p className={`${roomsColors.ACCENT2.DEFAULT} mb-6 text-lg font-medium`}>
                    シングルユース：11,000円<br />
                    ツインユース：13,200円<br />
                    ロフト 布団1組につき 3,300円
                  </p>
                  
                  <div className={`${roomsColors.BG.PRIMARY_DARK} p-6 mb-4 rounded-md`}>
                    <h4 className={`font-bold mb-4 ${roomsColors.TEXT.DEFAULT} text-lg`}>設備・アメニティ</h4>
                    <ul className={`${roomsColors.TEXT.SEMI_MUTED} list-disc pl-5 space-y-2`}>
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
              <h3 className={`text-2xl font-bold ${roomsColors.TEXT.DEFAULT}`}>イーストロッジ</h3>
              <p className={`${roomsColors.TEXT.MUTED} text-sm mb-6`}>
                本格的な山小屋スタイルの共同宿泊スペース
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  {/* 部屋写真 */}
                  <div className="overflow-hidden shadow-sm rounded-md mb-4">
                    <div className="bg-cover bg-center h-64" 
                         style={{ backgroundImage: `url('${eastLodgeImages[0]}')` }}>
                    </div>
                  </div>

                  {/* 小さい写真2枚 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="overflow-hidden rounded-md">
                      <div className="bg-cover bg-center h-32" 
                           style={{ backgroundImage: `url('${eastLodgeImages[1]}')` }}>
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-md">
                      <div className="bg-cover bg-center h-32" 
                           style={{ backgroundImage: `url('${eastLodgeImages[2]}')` }}>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className={`${roomsColors.TEXT.SLIGHT_MUTED} mb-4 leading-relaxed`}>
                    素朴な山小屋スタイルのお部屋です。設備は最低限ながらリーズナブルな価格で、
                    グループでの利用におすすめ。窓からの眺望はありませんが、山の雰囲気を気軽に
                    体験できます。
                  </p>
                  <p className={`${roomsColors.ACCENT2.DEFAULT} mb-6 text-lg font-medium`}>
                    素泊まり一律 4,400円
                  </p>
                  
                  <div className={`${roomsColors.BG.PRIMARY_DARK} p-6 mb-4 rounded-md`}>
                    <h4 className={`font-bold mb-4 ${roomsColors.TEXT.DEFAULT} text-lg`}>設備・アメニティ</h4>
                    <ul className={`${roomsColors.TEXT.SEMI_MUTED} list-disc pl-5 space-y-2`}>
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

      {/* お食事について - ライトテーマ */}
      <section className={`py-16 ${diningColors.BG.PRIMARY} ${diningColors.TEXT.DEFAULT}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <p className={`${diningColors.TEXT.MUTED} mb-2 tracking-wider`}
                 style={{ fontSize: 'clamp(0.75rem, 1vw, 1rem)' }}>
                お食事について
              </p>
              <h2 className={`${FONTS.SERIF} mb-8 ${diningColors.TEXT.DEFAULT} leading-relaxed tracking-wider`}
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
                健康と美味しさにこだわった<br />心温まるお食事
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className={`${diningColors.TEXT.SLIGHT_MUTED} mb-6 leading-relaxed`}>
                  宿泊のお客様には、無農薬・有機栽培にこだわった食材を使用した朝食をご用意しております。
                  自家製無添加パンと淹れたての珈琲で、爽やかな朝のひとときをお過ごしください。
                </p>
                <p className={`${diningColors.TEXT.SLIGHT_MUTED} leading-relaxed mb-6`}>
                  中央アルプスの麓で採れた新鮮な野菜や、地元の生産者から仕入れた無添加の食材を使用。
                  健康に配慮したお食事は、心も体も満たしてくれます。
                </p>
                
                {/* 料金表 */}
                <div className="border-t border-b border-gray-200 py-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className={`font-medium text-lg ${diningColors.TEXT.DEFAULT}`}>夕食</h4>
                    <p className={`font-medium ${diningColors.ACCENT2.DEFAULT}`}>3,300円〜</p>
                  </div>
                  <p className={`text-sm ${diningColors.TEXT.MUTED} mb-4`}>季節感あふれる料理が人気。ミルクの味を堪能するならこれ！</p>
                  
                  <div className="flex justify-between items-center mb-2">
                    <h4 className={`font-medium text-lg ${diningColors.TEXT.DEFAULT}`}>朝食（和食）</h4>
                    <p className={`font-medium ${diningColors.ACCENT2.DEFAULT}`}>1,500円</p>
                  </div>
                  <p className={`text-sm ${diningColors.TEXT.MUTED} mb-4`}>1日のスタートをボリュームある和食で 飲み物付</p>
                  
                  <div className="flex justify-between items-center mb-2">
                    <h4 className={`font-medium text-lg ${diningColors.TEXT.DEFAULT}`}>朝食（洋食）</h4>
                    <p className={`font-medium ${diningColors.ACCENT2.DEFAULT}`}>1,000円</p>
                  </div>
                  <p className={`text-sm ${diningColors.TEXT.MUTED}`}>トースト・サラダ・卵料理・飲み物付 和食もご相談下さい</p>
                </div>
              </div>
              <div>
                {/* 食事写真 */}
                <div className="overflow-hidden shadow-lg rounded-lg transition-transform hover:scale-[1.01] duration-500">
                  <div className="bg-cover bg-center h-64"
                       style={{ backgroundImage: `url('${diningImages[0]}')` }}>
                  </div>
                </div>
              </div>
            </div>

            {/* 小さい写真3枚 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <div className="overflow-hidden rounded-lg transition-transform hover:scale-[1.02] duration-500">
                <div className="bg-cover bg-center h-48"
                     style={{ backgroundImage: `url('${diningImages[1]}')` }}>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg transition-transform hover:scale-[1.02] duration-500">
                <div className="bg-cover bg-center h-48"
                     style={{ backgroundImage: `url('${diningImages[2]}')` }}>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg transition-transform hover:scale-[1.02] duration-500">
                <div className="bg-cover bg-center h-48"
                     style={{ backgroundImage: `url('${diningImages[3]}')` }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 温泉案内セクション - ライトテーマ */}
      <section className={`py-16 ${infoColors.BG.PRIMARY_LIGHT} ${infoColors.TEXT.DEFAULT}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <p className={`${infoColors.TEXT.MUTED} mb-2 tracking-wider`}
                 style={{ fontSize: 'clamp(0.75rem, 1vw, 1rem)' }}>
                周辺温泉のご案内
              </p>
              <h2 className={`${FONTS.SERIF} mb-8 ${infoColors.TEXT.DEFAULT} leading-relaxed tracking-wider`}
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
                癒しの温泉で<br />自然の恵みを体感
              </h2>
            </div>

            <p className={`${infoColors.TEXT.SLIGHT_MUTED} mb-10 leading-relaxed`}>
              ご宿泊のお客様には近隣の温泉までご案内致します。お好きな場所を選べます。ご希望の方は、お気軽にお問い合わせ下さい。
            </p>

            {/* 温泉写真カード */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {/* みはらしの湯 */}
              <div className="overflow-hidden rounded-lg shadow-sm group relative">
                <div className="aspect-w-4 aspect-h-3 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                     style={{ backgroundImage: "url('/images/spa/miharashi.jpg')" }}>
                  <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-25 transition-all"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-3 transform translate-y-0 group-hover:-translate-y-1 transition-transform">
                  <h3 className={`font-medium text-center ${infoColors.TEXT.DEFAULT}`}>みはらしの湯</h3>
                </div>
              </div>

              {/* さくらの湯 */}
              <div className="overflow-hidden rounded-lg shadow-sm group relative">
                <div className="aspect-w-4 aspect-h-3 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                     style={{ backgroundImage: "url('/images/spa/sakura.jpg')" }}>
                  <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-25 transition-all"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-3 transform translate-y-0 group-hover:-translate-y-1 transition-transform">
                  <h3 className={`font-medium text-center ${infoColors.TEXT.DEFAULT}`}>さくらの湯</h3>
                </div>
              </div>

              {/* こまくさの湯 */}
              <div className="overflow-hidden rounded-lg shadow-sm group relative">
                <div className="aspect-w-4 aspect-h-3 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                     style={{ backgroundImage: "url('/images/spa/komakusa.jpg')" }}>
                  <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-25 transition-all"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-3 transform translate-y-0 group-hover:-translate-y-1 transition-transform">
                  <h3 className={`font-medium text-center ${infoColors.TEXT.DEFAULT}`}>こまくさの湯</h3>
                </div>
              </div>

              {/* 大芝の湯 */}
              <div className="overflow-hidden rounded-lg shadow-sm group relative">
                <div className="aspect-w-4 aspect-h-3 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                     style={{ backgroundImage: "url('/images/spa/oshiba.jpg')" }}>
                  <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-25 transition-all"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-3 transform translate-y-0 group-hover:-translate-y-1 transition-transform">
                  <h3 className={`font-medium text-center ${infoColors.TEXT.DEFAULT}`}>大芝の湯</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 予約・料金セクション - ライトテーマ */}
      <section className={`py-16 ${infoColors.BG.PRIMARY_LIGHT} ${infoColors.TEXT.DEFAULT}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <p className={`${infoColors.TEXT.MUTED} mb-2 tracking-wider`}
                 style={{ fontSize: 'clamp(0.75rem, 1vw, 1rem)' }}>
                ご予約・料金
              </p>
              <h2 className={`${FONTS.SERIF} mb-8 ${infoColors.TEXT.DEFAULT} leading-relaxed tracking-wider`}
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
                ご宿泊のご予約について
              </h2>
            </div>
            
            <p className={`${infoColors.TEXT.SLIGHT_MUTED} mb-6 leading-relaxed`}>
              ご予約は電話またはメールにて承っております。
            </p>
            
            <div className={`${infoColors.BG.PRIMARY} p-6 mb-8 shadow-md`}>
              <h4 className={`font-bold mb-4 ${infoColors.TEXT.DEFAULT} text-lg`}>ご予約・お問い合わせ</h4>
              <div className={`space-y-2 ${infoColors.TEXT.SEMI_MUTED}`}>
                <p>電話: 0X0-XXXX-XXXX</p>
                <p>メール: info@milk-co.jp</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/contact"
                className={STYLES.BUTTON.PRIMARY}
              >
                ご予約はこちら
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LodgingPage;
