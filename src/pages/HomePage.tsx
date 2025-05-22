import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import { FONTS, STYLES, getSectionColors } from '../constants/theme';

// 施設情報の型定義
interface Facility {
  title: string;
  description: string;
  image?: string;  // 後方互換性のために残す
  images?: string[];  // 複数画像に対応
  path: string;
}

const HomePage: React.FC = () => {
  // スライダー用の画像配列
  const sliderImages = [
    '/images/slider/image1.jpg',
    '/images/slider/image2.jpg',
    '/images/slider/image3.jpg',
    '/images/slider/image4.jpg',
  ];

  const conceptImages = [
    '/images/concept/image1.jpg',
    '/images/concept/image2.jpg',
  ];

  // 各セクション用のテーマカラーを取得
  const heroColors = getSectionColors('dark');
  const conceptColors = getSectionColors('light');
  const facilitiesColors = getSectionColors('light');
  const foodColors = getSectionColors('light');
  const ctaColors = getSectionColors('light');
  
  // 施設情報を配列で管理
  const facilities: Facility[] = [
    {
      title: "宿泊施設",
      description: "イーストロッジ・ウェストロッジを備えた寛ぎの空間",
      images: [
        '/images/facilities/image1-1.jpg',
        '/images/facilities/image1-2.jpg',
      ],
      path: "/lodging"
    },
    {
      title: "ドッグラン＆カフェ",
      description: "愛犬と一緒に楽しめる専用施設",
      image: '/images/facilities/dogrun.jpg',
      path: "/dogrun"
    },
    {
      title: "イベントホール",
      description: "結婚式、同窓会など特別な集いの場",
      image: "/images/src/slider-image3.jpg",
      path: "/wedding"
    },
    {
      title: "アウトドアダイニング",
      description: "自然の中で楽しむ開放的なお食事体験",
      image: "/images/src/slider-image1.jpg",
      path: "/food-club"
    },
    {
      title: "インドアレストラン",
      description: "上質な空間で味わう厳選料理",
      image: "/images/src/slider-image2.jpg",
      path: "/food-club"
    },
    {
      title: "オープンガーデン",
      description: "四季折々の花々に囲まれた癒しの空間",
      image: "/images/src/slider-image3.jpg",
      path: "/facilities"
    }
  ];

  return (
    <div className={`min-h-screen`}>
      {/* 一面の写真 - ダークテーマ */}
      <section className={`relative h-screen w-full flex items-end justify-start overflow-hidden ${heroColors.BG.PRIMARY_DARK}`}>
        {/* 背景にスライダーを設置 */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <ImageSlider
            images={sliderImages}
            autoPlay={true}
            showArrows={false}
            showIndicators={false}
            className="w-full h-full"
            debug={false}
          />
          <div className={`absolute inset-0 ${heroColors.OVERLAY.LIGHT} z-5`}></div>
        </div>
        
        {/* コンテンツ - 左下寄せ */}
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className={`${FONTS.SERIF} ${heroColors.TEXT.DEFAULT} mb-8 leading-tight`} 
                style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}>
              美しい自然、おいしい食事
            </h1>
            <p className={`${heroColors.TEXT.SEMI_MUTED} mb-12 max-w-xl`} 
               style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
              標高1,000mの中央アルプス山麓に佇む隠れ家。<br />
              清らかな空気と星空、山々の恵みを感じる静寂の中で、<br />
              本来の自分を取り戻す贅沢なひとときをお過ごしください。
            </p>
            <div className={`text-sm ${heroColors.TEXT.MUTED}`}>
              山荘ミルク・長野県伊那市
            </div>
          </div>
        </div>
      </section>

      {/* コンセプト - ライトテーマ */}
      <section className={`py-24 lg:py-32 ${conceptColors.BG.PRIMARY} ${conceptColors.TEXT.DEFAULT}`}>
        <div className="container mx-auto px-6">
          <div className="relative">
            {/* 右上に浮かぶ写真 */}
            <div className="hidden lg:block absolute overflow-hidden shadow-xl z-10" 
                 style={{
                   aspectRatio: "4/3",
                   width: "45vw",
                   right: "0%",
                   top: 0
                 }}>
              <div className="h-full w-full bg-center bg-cover" 
                  style={{backgroundImage: `url('${conceptImages[0]}')`}}></div>
            </div>
            
            <div className="mb-12">
              <p className={`${conceptColors.TEXT.MUTED} mb-2 tracking-wider`} 
                 style={{ fontSize: 'clamp(0.75rem, 1vw, 1rem)' }}>
                コンセプト
              </p>
              <h2 className={`${FONTS.SERIF} mb-6 lg:mb-8 ${conceptColors.TEXT.DEFAULT} leading-relaxed tracking-wider`} 
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
                満たされていく 心と体
              </h2>
              
              <div className={`${conceptColors.TEXT.SEMI_MUTED} leading-relaxed lg:max-w-[65%]`}>
                <p style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}>
                  日常を離れて、深呼吸したくなるような時間の中へ。
                </p>
                
                <p style={{ 
                    fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                    lineHeight: '1.8'
                  }}>
                  四季のうつろいに触れ、山里の暮らしに包まれながら、<br />
                  心と体が喜ぶ食事と、あたたかなもてなしを味わうひととき<br />
                  そんな時間の中で、ふと本来の自分を取り戻していく——<br />
                  何気ない瞬間が、少しずつ、心をほどいてくれるのです
                </p>
                
                <div className="relative pt-4">
                  <p style={{ 
                      fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                      maxWidth: '100%'
                    }}>
                    山荘ミルクは、そんな特別な時間が流れる場所です。
                  </p>
                </div>
                
                {/* 左下に浮かぶ写真 - レスポンシブ対応 */}
                <div className="relative flex lg:justify-start justify-end w-full" style={{ marginTop: '5vw' }}>
                  <div className="block overflow-hidden shadow-xl z-10 w-[70vw] lg:w-[35vw]" 
                       style={{
                         aspectRatio: "4/3",
                         minWidth: "320px", // 最小サイズを320pxに固定
                       }}>
                    <div className="h-full w-full bg-center bg-cover" 
                        style={{backgroundImage: `url('${conceptImages[1]}')`}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 施設 - ライトテーマ */}
      <section className={`py-24 md:py-32 ${facilitiesColors.BG.PRIMARY_LIGHT} ${facilitiesColors.TEXT.DEFAULT}`}>
        <div className="container mx-auto px-6">
          <div className="mb-16 md:w-3/5 md:ml-12 lg:ml-24">
            <p className={`${facilitiesColors.TEXT.MUTED} mb-2 tracking-wider`} 
               style={{ fontSize: 'clamp(0.75rem, 1vw, 1rem)' }}>
              施設案内
            </p>
            <h2 className={`${FONTS.SERIF} mb-8 ${facilitiesColors.TEXT.DEFAULT} leading-relaxed tracking-wider`} 
                style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
              心地よい時間を彩る<br />多彩な施設
            </h2>
            
            <div className={`space-y-6 ${facilitiesColors.TEXT.SLIGHT_MUTED} leading-relaxed max-w-xl`}>
              <p style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}>
                山荘ミルクでは、自然と調和した様々な施設で、
                お客様それぞれの理想的な過ごし方を叶えます。
                中央アルプスの麓で、新たな時間の流れを体験してください。
              </p>
            </div>
          </div>
          
          {/* 施設カード */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-8 flex overflow-x-auto pb-4 gap-4 snap-x" 
               style={{ 
                 scrollbarWidth: 'none',
                 msOverflowStyle: 'none',
                 WebkitOverflowScrolling: 'touch',
               }}>
            {/* スクロールバー非表示 */}
            <style dangerouslySetInnerHTML={{__html: `
              div.overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
            `}} />
            
            {facilities.map((facility, index) => (
              <div 
                key={index}
                className={`group relative rounded-none shadow-xl ${heroColors.BG.PRIMARY} hover:${heroColors.BG.PRIMARY_DARK} transition-all duration-300 flex-shrink-0 w-[85%] sm:w-[45%] md:w-[47%] lg:w-full snap-start`}
              >
                <Link to={facility.path} className="block">
                  <div className="h-64 w-full overflow-hidden">
                    {facility.images && facility.images.length >= 2 ? (
                      // 画像が複数ある場合はフレックスレイアウトで並べて表示
                      <div className="flex h-full w-full">
                        {/* 左側の画像 */}
                        <div className="w-1/2 overflow-hidden">
                          <div 
                            className="h-full w-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105" 
                            style={{
                              backgroundImage: `url('${facility.images[0]}')`,
                              backgroundPosition: "center right"
                            }}
                          ></div>
                        </div>
                        
                        {/* 右側の画像 */}
                        <div className="w-1/2 overflow-hidden">
                          <div 
                            className="h-full w-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105" 
                            style={{
                              backgroundImage: `url('${facility.images[1]}')`,
                              backgroundPosition: "center left"
                            }}
                          ></div>
                        </div>
                      </div>
                    ) : (
                      // 単一画像の場合は従来通り表示
                      <div 
                        className="h-full w-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105" 
                        style={{backgroundImage: `url('${facility.image || (facility.images && facility.images[0])}')`,}}
                      ></div>
                    )}
                  </div>
                  <div className={`absolute inset-0 ${heroColors.GRADIENT.HERO} opacity-70`}></div>
                  <div className="absolute bottom-0 left-0 p-6 z-10">
                    <h3 className={`text-xl md:text-2xl ${FONTS.SERIF} ${heroColors.TEXT.DEFAULT} mb-2`}>{facility.title}</h3>
                    <p className={`text-sm ${heroColors.TEXT.MUTED} mb-4`}>{facility.description}</p>
                    <span className={`inline-flex items-center ${heroColors.ACCENT2.DEFAULT} text-sm font-medium`}>
                      詳細を見る
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 食事 - ダークテーマ */}
      <section className={`py-24 md:py-32 ${foodColors.BG.PRIMARY} ${foodColors.TEXT.DEFAULT}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse md:flex-row gap-12">
            {/* 食事の画像 - オーバーラップレイアウト */}
            <div className="md:w-1/2 relative">
              <div className="relative z-10 md:absolute md:top-12 md:left-0 overflow-hidden shadow-xl"
                   style={{ 
                     aspectRatio: "4/3",
                     width: "clamp(90%, 80% + 5vw, 75%)" 
                   }}>
                <div className="h-full w-full bg-center bg-cover" 
                    style={{backgroundImage: "url('/images/src/slider-image1.jpg')"}}></div>
              </div>
              
              <div className="hidden lg:block lg:absolute lg:top-32 lg:right-0 overflow-hidden shadow-2xl"
                   style={{ 
                     aspectRatio: "3/4",
                     width: "clamp(40%, 45% + 3vw, 50%)" 
                   }}>
                <div className="h-full w-full bg-center bg-cover" 
                    style={{backgroundImage: "url('/images/src/slider-image2.jpg')"}}></div>
              </div>
              
              <div className="relative z-[5] mt-4 md:absolute md:bottom-0 md:left-1/4 overflow-hidden shadow-xl"
                   style={{ 
                     aspectRatio: "4/3",
                     width: "clamp(60%, 65% - 2vw, 70%)" 
                   }}>
                <div className="h-full w-full bg-center bg-cover" 
                    style={{backgroundImage: "url('/images/src/slider-image3.jpg')"}}></div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <p className={`${foodColors.TEXT.MUTED} mb-2 tracking-wider`} style={{ fontSize: 'clamp(0.75rem, 1vw, 1rem)' }}>食事</p>
              <h2 className={`${FONTS.SERIF} mb-8 ${foodColors.TEXT.DEFAULT} leading-relaxed tracking-wider`} style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
                身体と心が喜ぶ<br />健康的な美食
              </h2>
              
              <div className={`space-y-6 ${foodColors.TEXT.SLIGHT_MUTED} leading-relaxed`}>
                <p style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}>
                  無農薬・有機栽培の食材を使用した健康的なお料理は、体にやさしく本物の味わいを堪能できます。中央アルプスの伏流水を使ったお料理は格別な味わいです。
                </p>
                
                <p style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}>
                  自家製天然酵母パンや、丁寧に水出ししたコーヒーなど、素材と時間にこだわった料理の数々をお楽しみください。
                </p>
              </div>
              
              <div className="mt-8">
                <Link
                  to="/food-club"
                  className={`inline-flex items-center font-medium ${foodColors.ACCENT.DEFAULT} ${foodColors.ACCENT.HOVER} transition-colors`}
                >
                  <span>食事の詳細を見る</span>
                  <svg className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 予約・問い合わせ CTA - ライトテーマ */}
      <section className={`py-16 md:py-20 ${ctaColors.BG.PRIMARY_LIGHT} ${ctaColors.TEXT.DEFAULT}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`font-bold mb-6 ${ctaColors.TEXT.DEFAULT}`} 
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              特別な時間をお過ごしください
            </h2>
            <p className={`mb-10 ${ctaColors.TEXT.SLIGHT_MUTED}`} 
               style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
              ご予約・お問い合わせはこちらから。<br />
              皆様のお越しを心よりお待ちしております。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className={STYLES.BUTTON.PRIMARY}>
                ご予約はこちら
              </Link>
              <Link to="/access" className={STYLES.BUTTON.SECONDARY}>
                アクセス情報
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
