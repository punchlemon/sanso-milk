import React from 'react';
// import { Link } from 'react-router-dom';
import {
  FONTS,
  // getSectionStyles,
  getSectionColors
} from '../constants/theme';

const DogRunPage: React.FC = () => {
  // const lightStyles = getSectionStyles('light');

  // セクションごとのカラーを取得
  const heroColors = getSectionColors('dark');
  const contentColors = getSectionColors('light');
  const facilitiesColors = getSectionColors('light');

  // ドッグラン画像
  const headerImage = '/images/dogrun/header.jpg';

  // ドッグランエリア情報
  const dogAreas = [
    {
      title: "小型犬用エリア",
      description: "5kg以下のワンちゃん向け。安心して遊べる専用スペースです。"
    },
    {
      title: "中型犬用エリア",
      description: "5kg〜15kgのワンちゃん向け。広々としたスペースで思いきり走れます。"
    },
    {
      title: "大型犬用エリア",
      description: "15kg以上のワンちゃん向け。十分な広さを確保した専用エリアです。"
    }
  ];

  // 利用規約（カテゴリ別に整理）
  const rules = {
    entry: [
      '凶暴性のある犬、発情中のメス犬、伝染性の病気の犬は入場できません。',
      'ワクチン未接種、狂犬病予防接種を受けていない犬は入場できません。',
      '愛犬を連れていない方は入場できません。',
      '小さなお子様は保護者同伴でないと入場できません。'
    ],
    usage: [
      '愛犬と一緒に入場し、愛犬の行動を監視してください。',
      '追突事故などに遭わないように他犬の行動にも注意してください。',
      '万一、犬同士の喧嘩が発生した場合には、飼い主は身の安全に注意の上、対処してください。また、他の犬の飼い主は愛犬が喧嘩に参加しないようコントロールするなど、喧嘩の鎮静化にご協力ください。',
      '排泄物はお持ち帰りください。',
      'その他、マナーの向上にご協力ください。'
    ],
    accidents: [
      '場内での事故等については飼い主の自己責任とさせていただきます。',
      '飼い主同士のトラブルが発生した場合には当事者間で解決してください。',
      '器物破損等の損害が発生した場合は、実費をご負担ただきます。'
    ]
  };

  // 料金体系
  const pricing = [
    {
      name: '一日チケット（ワンオーナー）',
      price: '500円',
      note: ''
    },
    {
      name: '一日チケット（10枚綴り）',
      price: '4,500円',
      note: ''
    },
    {
      name: 'フリーパスポート（年間）',
      price: '10,000円',
      note: '※フリーパスポート会員は上記期間中、いつでもご利用可能です。有効期間は一年間です。'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション - より画面いっぱいに表示 */}
      <section className="relative h-screen w-full flex items-center justify-center">
        {/* 背景画像 - 画面全体に表示 */}
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ 
              backgroundImage: `url(${headerImage})`,
              backgroundPosition: 'center center',
            }}
            aria-hidden="true"
          />
          {/* オーバーレイを薄くして画像をより鮮明に */}
          <div className="absolute inset-0 bg-black bg-opacity-30 z-5"></div>
        </div>
        
        {/* コンテンツ - シンプルに修正 */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className={`${FONTS.SERIF} ${heroColors.TEXT.DEFAULT} mb-6 leading-tight`} 
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            ドッグラン
          </h1>
          <p className={`${heroColors.TEXT.DEFAULT} mb-6 max-w-xl mx-auto`} 
             style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)' }}>
            愛犬と共に自然の中で過ごす特別な時間。<br />
            <span className="block mt-2">山々を望む広々とした空間で、心地よいひとときを。</span>
          </p>
        </div>
      </section>

      {/* 施設紹介セクション */}
      <section className={`py-16 ${contentColors.BG.PRIMARY} ${contentColors.TEXT.DEFAULT}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className={`${FONTS.SERIF} text-center mb-12 ${contentColors.TEXT.DEFAULT}`} 
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              施設のご案内
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8 mb-16">
              <div className="md:w-1/2">
                <img 
                  src="/images/dogrun/dogrun.jpg" 
                  alt="dog run overview" 
                  className="w-full h-auto rounded-lg shadow-md mb-8 object-cover"
                  style={{ aspectRatio: '600/400' }}
                />
                
                <div className={`${contentColors.TEXT.SEMI_MUTED}`}>
                  <h3 className={`text-lg font-bold mb-3 ${contentColors.TEXT.DEFAULT}`}>
                    広々としたドッグラン
                  </h3>
                  <p className="mb-4">
                    ワンちゃんを思いっきり遊ばせたり、
                  </p>
                  
                  <p>
                    当ドッグランは、ワンちゃんの大きさに合わせて3つのエリアに分かれています。
                    それぞれのエリアは安全に配慮し、快適に過ごせるよう設計されています。
                  </p>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <img 
                  src="/images/dogrun/cafe.jpg" 
                  alt="dog cafe" 
                  className="w-full h-auto rounded-lg shadow-md mb-8 object-cover"
                  style={{ aspectRatio: '600/400' }}
                />
                
                <div className={`${contentColors.TEXT.SEMI_MUTED}`}>
                  <h3 className={`text-lg font-bold mb-3 ${contentColors.TEXT.DEFAULT}`}>
                    ワンちゃん専用レストラン
                  </h3>
                  <p className="mb-4">
                    ドッグラン併設のレストランでは、オーナー様もワンちゃんも一緒にお食事していただくことができます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* エリア紹介セクション */}
      <section className={`py-16 ${facilitiesColors.BG.PRIMARY_LIGHT} ${facilitiesColors.TEXT.DEFAULT}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className={`${FONTS.SERIF} text-center mb-12 ${facilitiesColors.TEXT.DEFAULT}`} 
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              3つのエリア
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {dogAreas.map((area, index) => (
                <div key={index} className={`${facilitiesColors.BG.PRIMARY} rounded-lg shadow-md overflow-hidden`}>
                  <div className="h-48 overflow-hidden">
                    {/* 各エリアに対応する実際の画像を表示 */}
                    <img
                      src={`/images/dogrun/area${index + 1}.jpg`} 
                      alt={area.title}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        // エラー時のフォールバック処理
                        console.error(`画像の読み込みに失敗: ${index}`);
                        const fallbackEl = e.currentTarget;
                        fallbackEl.onerror = null;
                        fallbackEl.src = '/images/placeholders/dog-area-placeholder.jpg';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className={`text-lg font-bold mb-2 ${facilitiesColors.TEXT.DEFAULT}`}>
                      {area.title}
                    </h3>
                    <p className={`${facilitiesColors.TEXT.SEMI_MUTED}`}>
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 利用案内・料金のセクション */}
      <section className={`py-16 ${contentColors.BG.PRIMARY} ${contentColors.TEXT.DEFAULT}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className={`${FONTS.SERIF} text-center mb-12 ${contentColors.TEXT.DEFAULT}`}
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              利用案内
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className={`${contentColors.BG.PRIMARY_LIGHT} p-6 rounded-lg shadow-md`}>
                <h3 className={`text-lg font-bold mb-4 ${contentColors.TEXT.DEFAULT}`}>
                  営業時間
                </h3>
                <p className={`${contentColors.TEXT.SEMI_MUTED} mb-4`}>
                  3月1日〜12月20日の営業時間内でご利用いただけます。
                </p>
                <p className={`${contentColors.TEXT.DEFAULT} mb-2 font-bold`}>
                  通常営業時間：11:00〜15:00
                </p>
                <p className={`${contentColors.TEXT.MUTED} text-sm`}>
                  ※定休日（月曜日・火曜日）も雨天以外はご利用可能ですが、事前にご確認ください。<br />
                  ※6月（薔薇の季節）は月曜日・火曜日も営業しています。
                </p>
              </div>

              <div className={`${contentColors.BG.PRIMARY_LIGHT} p-6 rounded-lg shadow-md`}>
                <h3 className={`text-lg font-bold mb-4 ${contentColors.TEXT.DEFAULT}`}>
                  利用料金
                </h3>
                <div className="space-y-4">
                  {pricing.map((item, index) => (
                    <div key={index} className={`flex justify-between items-center py-3 ${index < pricing.length - 1 ? "border-b border-gray-200" : ""}`}>
                      <div className={`${contentColors.TEXT.DEFAULT} font-medium`}>
                        {item.name}
                      </div>
                      <div className={`${contentColors.ACCENT.DEFAULT} font-bold text-xl`}>{item.price}</div>
                    </div>
                  ))}
                </div>
                <div className={`mt-4 p-3 bg-accent/10 rounded-md ${contentColors.TEXT.MUTED} text-sm`}>
                  <p>※フリーパスポート会員は上記期間中、いつでもご利用可能です。有効期間は一年間です。</p>
                  <p className="mt-2">※営業期間：3月1日〜12月20日</p>
                  <p className="mt-1">※定休日も雨天以外はご利用可能ですが、事前にご確認ください。</p>
                </div>
              </div>
            </div>

            {/* 利用規程 - カテゴリ分けして表示 */}
            <div className={`${contentColors.BG.PRIMARY_LIGHT} p-6 rounded-lg shadow-sm border border-gray-100 mb-12`}>
              <h3 className={`text-lg font-bold mb-4 ${contentColors.TEXT.DEFAULT}`}>
                ドッグランご利用規程
              </h3>
              <p className={`text-sm ${contentColors.TEXT.MUTED} mb-5`}>
                安全に楽しくご利用いただくために下記の事項をお守りください。
              </p>
              
              <div className="space-y-6">
                {/* 入場制限 */}
                <div>
                  <h4 className={`text-base font-medium mb-2 ${contentColors.TEXT.DEFAULT} flex items-center`}>
                    <span className={`inline-flex items-center justify-center w-5 h-5 rounded-sm mr-2 bg-gray-200 text-gray-700 text-xs`}>1</span>
                    入場制限
                  </h4>
                  <ul className="space-y-1.5 pl-7">
                    {rules.entry.map((rule, index) => (
                      <li key={index} className={`${contentColors.TEXT.MUTED} text-sm`}>
                        ・{rule}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* 利用に当たって */}
                <div>
                  <h4 className={`text-base font-medium mb-2 ${contentColors.TEXT.DEFAULT} flex items-center`}>
                    <span className={`inline-flex items-center justify-center w-5 h-5 rounded-sm mr-2 bg-gray-200 text-gray-700 text-xs`}>2</span>
                    利用に当たって
                  </h4>
                  <ul className="space-y-1.5 pl-7">
                    {rules.usage.map((rule, index) => (
                      <li key={index} className={`${contentColors.TEXT.MUTED} text-sm`}>
                        ・{rule}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* 事故など */}
                <div>
                  <h4 className={`text-base font-medium mb-2 ${contentColors.TEXT.DEFAULT} flex items-center`}>
                    <span className={`inline-flex items-center justify-center w-5 h-5 rounded-sm mr-2 bg-gray-200 text-gray-700 text-xs`}>3</span>
                    事故などについて
                  </h4>
                  <ul className="space-y-1.5 pl-7">
                    {rules.accidents.map((rule, index) => (
                      <li key={index} className={`${contentColors.TEXT.MUTED} text-sm`}>
                        ・{rule}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DogRunPage;
