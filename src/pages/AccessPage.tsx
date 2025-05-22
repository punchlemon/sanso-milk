import React from 'react';
import { FONTS, getSectionColors, getSectionStyles } from '../constants/theme';
import GoogleMap from '../components/access/GoogleMap';

const AccessPage: React.FC = () => {
  // セクションごとのカラーとスタイルを取得
  const accessColors = getSectionColors('light');
  const heroColors = getSectionColors('dark'); // ヒーローセクション用に追加
  const accessStyles = getSectionStyles('light');

  return (
    <div>
      {/* 固定背景画像 - position: fixed で固定、z-indexを最背面に */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/access/car_window.jpg")',
          zIndex: -10 // より低いz-indexで確実に背後に表示
        }}
      />
      
      {/* コンテンツ - フッターを見えるようにするために通常のフロー内に配置 */}
      <div className="relative z-1 pb-0">
        {/* ヒーローセクション - HomePageと同様のスタイリング */}
        <section className={`relative h-screen w-full flex items-end justify-start overflow-hidden`}>
          
          {/* コンテンツ - 左下に配置 */}
          <div className="container mx-auto px-6 py-32 relative z-10 text-center">
            <div className="max-auto">
              <h1 className={`${FONTS.SERIF} ${heroColors.TEXT.DEFAULT} leading-tight`} 
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}>
                アクセス
              </h1>
              <p className={`${heroColors.TEXT.SEMI_MUTED}`} 
                 style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
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
          {/* 地図と基本情報セクション */}
          <section className="py-16 bg-white bg-opacity-90">
            <div className="container mx-auto px-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/3 h-64 md:h-auto">
                    <GoogleMap />
                  </div>
                  <div className={`md:w-1/3 p-6 ${accessColors.BG.PRIMARY}`}>
                    <h2 className={`text-2xl font-bold mb-3 ${accessColors.TEXT.DEFAULT}`}>
                      山荘ミルク
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className={`font-bold ${accessColors.TEXT.DEFAULT} mb-1`}>住所</h3>
                        <p className={accessColors.TEXT.SEMI_MUTED}>
                          〒396-0029<br />
                          長野県伊那市横山風の谷9749
                        </p>
                      </div>
                      <div>
                        <h3 className={`font-bold ${accessColors.TEXT.DEFAULT} mb-1`}>電話番号</h3>
                        <p className={accessColors.TEXT.SEMI_MUTED}>0265-72-9990</p>
                      </div>
                      <div>
                        <h3 className={`font-bold ${accessColors.TEXT.DEFAULT} mb-1`}>FAX番号</h3>
                        <p className={accessColors.TEXT.SEMI_MUTED}>0265-72-7299</p>
                      </div>
                      <div>
                        <h3 className={`font-bold ${accessColors.TEXT.DEFAULT} mb-1`}>営業時間</h3>
                        <p className={accessColors.TEXT.SEMI_MUTED}>
                          11:00～17:00<br />
                          <span className="text-sm">(夜はご予約のみの営業となります)</span>
                        </p>
                      </div>
                      <div>
                        <h3 className={`font-bold ${accessColors.TEXT.DEFAULT} mb-1`}>定休日</h3>
                        <p className={accessColors.TEXT.SEMI_MUTED}>
                          毎週 月曜日・火曜日<br />
                          <span className="text-sm">(薔薇の季節の6月は月曜日・火曜日も営業 11:00～15:00)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 交通案内セクション */}
          <section className="py-16 bg-white bg-opacity-90">
            <div className="container mx-auto px-4">
              <h2 className={`${FONTS.SERIF} text-3xl font-bold mb-12 text-center ${accessColors.TEXT.DEFAULT}`}>
                交通案内
              </h2>

              {/* アクセスマップ画像 */}
              <div className="max-w-4xl mx-auto mb-12">
                <img 
                  src="/images/access-map.jpg" 
                  alt="アクセスマップ" 
                  className="w-full h-auto rounded-lg shadow-md" 
                />
              </div>

              {/* 各種交通手段の情報 */}
              <div className="max-w-4xl mx-auto">
                <div className="grid gap-8">
                  {/* 車でのアクセス */}
                  <div className={`${accessColors.BG.PRIMARY} p-6 rounded-lg shadow-md`}>
                    <h3 className={`text-xl font-bold mb-4 ${accessColors.TEXT.DEFAULT} flex items-center`}>
                      <span className="mr-3">🚗</span>お車の場合
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className={`w-36 flex-shrink-0 font-medium ${accessColors.TEXT.SLIGHT_MUTED}`}>中央道小黒川スマートインターから</div>
                        <div className={`flex-grow ${accessColors.TEXT.SEMI_MUTED}`}>約10分</div>
                      </div>
                      <div className="flex items-start">
                        <div className={`w-36 flex-shrink-0 font-medium ${accessColors.TEXT.SLIGHT_MUTED}`}>中央道伊那ICから</div>
                        <div className={`flex-grow ${accessColors.TEXT.SEMI_MUTED}`}>約20分</div>
                      </div>
                      <div className="flex items-start">
                        <div className={`w-36 flex-shrink-0 font-medium ${accessColors.TEXT.SLIGHT_MUTED}`}>中央道駒ヶ根ICから</div>
                        <div className={`flex-grow ${accessColors.TEXT.SEMI_MUTED}`}>〇〇分</div>
                      </div>
                    </div>
                  </div>

                  {/* 電車でのアクセス（東京方面） */}
                  <div className={`${accessColors.BG.PRIMARY} p-6 rounded-lg shadow-md`}>
                    <h3 className={`text-xl font-bold mb-4 ${accessColors.TEXT.DEFAULT} flex items-center`}>
                      <span className="mr-3">🚄</span>電車の場合（東京方面から）
                    </h3>
                    <div>
                      <p className={`mb-2 ${accessColors.TEXT.SEMI_MUTED}`}>JR中央本線・岡谷乗換・飯田線伊那市駅下車【約3時間30分】</p>
                    </div>
                  </div>

                  {/* 電車でのアクセス（名古屋方面） */}
                  <div className={`${accessColors.BG.PRIMARY} p-6 rounded-lg shadow-md`}>
                    <h3 className={`text-xl font-bold mb-4 ${accessColors.TEXT.DEFAULT} flex items-center`}>
                      <span className="mr-3">🚄</span>電車の場合（名古屋方面から）
                    </h3>
                    <div>
                      <p className={`mb-2 ${accessColors.TEXT.SEMI_MUTED}`}>JR中央本線・塩尻乗換・飯田線伊那市駅下車【約3時間30分】</p>
                    </div>
                  </div>

                  {/* 高速バスでのアクセス（東京方面） */}
                  <div className={`${accessColors.BG.PRIMARY} p-6 rounded-lg shadow-md`}>
                    <h3 className={`text-xl font-bold mb-4 ${accessColors.TEXT.DEFAULT} flex items-center`}>
                      <span className="mr-3">🚌</span>高速バスの場合（東京方面から）
                    </h3>
                    <div>
                      <p className={`mb-2 ${accessColors.TEXT.SEMI_MUTED}`}>中央高速バス（新宿）・伊那市下車【約3時間30分】</p>
                    </div>
                  </div>

                  {/* 高速バスでのアクセス（名古屋方面） */}
                  <div className={`${accessColors.BG.PRIMARY} p-6 rounded-lg shadow-md`}>
                    <h3 className={`text-xl font-bold mb-4 ${accessColors.TEXT.DEFAULT} flex items-center`}>
                      <span className="mr-3">🚌</span>高速バスの場合（名古屋方面から）
                    </h3>
                    <div>
                      <p className={`mb-2 ${accessColors.TEXT.SEMI_MUTED}`}>中央高速バス（名鉄バスセンター）・伊那市下車【約3時間30分】</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className={`${accessColors.TEXT.MUTED} italic`}>
                    宿泊の場合は伊那市駅または伊那市バス停までお迎えに伺います。事前にお問い合わせください。
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* フッターの前に不透明な背景のセクションを追加 */}
          <section className={`py-8 ${accessColors.BG.PRIMARY}`}>
            <div className="container mx-auto px-4">
              <div className={`border-t border-primary/20 pt-8 text-center ${accessColors.TEXT.MUTED}`}>
                <p>詳細なアクセス情報については、お気軽にお問い合わせください。</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AccessPage;
