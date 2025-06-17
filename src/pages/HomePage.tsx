import React, { useState, useEffect } from 'react';
import ImageSlider from '../components/ImageSlider';
import { FONTS, getSectionColors } from '../constants/theme';

// 施設情報の型定義
const HomePage: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // アプリレベルでの画像読み込み完了を検知
  useEffect(() => {
    // アプリレベルでの画像読み込みが完了している場合
    const checkImagesLoaded = () => {
      // 画像読み込み状況をチェック（localStorage等で管理されることを想定）
      const loadedStatus = sessionStorage.getItem('imagesLoaded');
      if (loadedStatus === 'true') {
        setImagesLoaded(true);
      } else {
        // 少し遅延させてからアニメーションを開始
        const timer = setTimeout(() => {
          setImagesLoaded(true);
        }, 500);
        return () => clearTimeout(timer);
      }
    };

    checkImagesLoaded();
  }, []);

  // スライダー用の画像配列
  const sliderImages = [
    '/images/slider/image1.jpg',
    '/images/slider/image2.jpg',
    '/images/slider/image3.jpg',
    '/images/slider/image4.jpg',
    '/images/slider/image5.jpg',
    '/images/slider/image6.jpg',
  ];

  const conceptImages = [
    '/images/concept/image1.jpg',
    '/images/concept/image2.jpg',
  ];

  // 各セクション用のテーマカラーを取得
  const heroColors = getSectionColors('dark');
  const conceptColors = getSectionColors('light');
  const foodColors = getSectionColors('light');

  return (
    <div className={`min-h-screen`}>
      {/* 一面の写真 - ダークテーマ */}
      <section
        className={`relative h-screen w-full flex items-end justify-start overflow-hidden ${heroColors.BG.PRIMARY_DARK}`}
      >
        {/* 背景にスライダーを設置 */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <ImageSlider
            images={sliderImages}
            autoPlay={true}
            showArrows={false}
            showIndicators={false}
            className="w-full h-full"
            debug={false}
            startAnimation={imagesLoaded}
          />
          <div
            className={`absolute inset-0 ${heroColors.OVERLAY.LIGHT} z-5`}
          ></div>
        </div>

        {/* コンテンツ - 左下寄せ */}
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1
              className={`${FONTS.SERIF} ${heroColors.TEXT.DEFAULT} mb-8 leading-tight`}
              style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
            >
              美しい自然、おいしい食事
            </h1>
            <p
              className={`${heroColors.TEXT.SEMI_MUTED} mb-12 max-w-xl`}
              style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
            >
              標高1,000mの中央アルプス山麓に佇む隠れ家。
              <br />
              清らかな空気と星空、山々の恵みを感じる静寂の中で、
              <br />
              本来の自分を取り戻す贅沢なひとときをお過ごしください。
            </p>
            <div className={`text-sm ${heroColors.TEXT.MUTED}`}>
              山荘ミルク・長野県伊那市
            </div>
          </div>
        </div>
      </section>

      {/* コンセプト - ライトテーマ */}
      <section
        className={`py-24 lg:py-32 ${conceptColors.BG.PRIMARY} ${conceptColors.TEXT.DEFAULT}`}
      >
        <div className="container mx-auto px-6">
          <div className="relative">
            {/* 右上に浮かぶ写真 */}
            <div
              className="hidden lg:block absolute overflow-hidden shadow-xl z-10"
              style={{
                aspectRatio: '4/3',
                width: '45vw',
                right: '0%',
                top: 0,
              }}
            >
              <div
                className="h-full w-full bg-center bg-cover"
                style={{ backgroundImage: `url('${conceptImages[0]}')` }}
              ></div>
            </div>

            <div className="mb-12">
              <p
                className={`${conceptColors.TEXT.MUTED} mb-2 tracking-wider`}
                style={{ fontSize: 'clamp(0.75rem, 1vw, 1rem)' }}
              >
                コンセプト
              </p>
              <h2
                className={`${FONTS.SERIF} mb-6 lg:mb-8 ${conceptColors.TEXT.DEFAULT} leading-relaxed tracking-wider`}
                style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
              >
                満たされていく 心と体
              </h2>

              <div
                className={`${conceptColors.TEXT.SEMI_MUTED} leading-relaxed lg:max-w-[65%]`}
              >
                <p style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}>
                  日常を離れて、深呼吸したくなるような時間の中へ。
                </p>

                <p
                  style={{
                    fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                    lineHeight: '1.8',
                  }}
                >
                  四季のうつろいに触れ、山里の暮らしに包まれながら、
                  <br />
                  心と体が喜ぶ食事と、あたたかなもてなしを味わうひととき
                  <br />
                  そんな時間の中で、ふと本来の自分を取り戻していく——
                  <br />
                  何気ない瞬間が、少しずつ、心をほどいてくれるのです
                </p>

                <div className="relative pt-4">
                  <p
                    style={{
                      fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                      maxWidth: '100%',
                    }}
                  >
                    山荘ミルクは、そんな特別な時間が流れる場所です。
                  </p>
                </div>

                {/* 左下に浮かぶ写真 - レスポンシブ対応 */}
                <div
                  className="relative flex lg:justify-start justify-end w-full"
                  style={{ marginTop: '5vw' }}
                >
                  <div
                    className="block overflow-hidden shadow-xl z-10 w-[70vw] lg:w-[35vw]"
                    style={{
                      aspectRatio: '4/3',
                      minWidth: '320px', // 最小サイズを320pxに固定
                    }}
                  >
                    <div
                      className="h-full w-full bg-center bg-cover"
                      style={{ backgroundImage: `url('${conceptImages[1]}')` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 食事 - ライトテーマ */}
      <section
        className={`py-24 md:py-32 ${foodColors.BG.PRIMARY} ${foodColors.TEXT.DEFAULT}`}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse md:flex-row gap-12">
            <div className="md:w-1/2">
              <p
                className={`${foodColors.TEXT.MUTED} mb-2 tracking-wider`}
                style={{ fontSize: 'clamp(0.75rem, 1vw, 1rem)' }}
              >
                食事
              </p>
              <h2
                className={`${FONTS.SERIF} mb-8 ${foodColors.TEXT.DEFAULT} leading-relaxed tracking-wider`}
                style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
              >
                身体と心が喜ぶ
                <br />
                健康的な美食
              </h2>

              <div
                className={`space-y-6 ${foodColors.TEXT.SLIGHT_MUTED} leading-relaxed`}
              >
                <p style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}>
                  無農薬・有機栽培の食材を使用した健康的なお料理は、体にやさしく本物の味わいを堪能できます。中央アルプスの伏流水を使ったお料理は格別な味わいです。
                </p>

                <p style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}>
                  自家製天然酵母パンや、丁寧に水出ししたコーヒーなど、素材と時間にこだわった料理の数々をお楽しみください。
                </p>
              </div>
            </div>

            {/* 食事の画像エリア */}
            <div className="md:w-1/2">
              <div className="space-y-6">
                {/* メイン画像 - 料理の並んだテーブル */}
                <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden shadow-xl">
                  <img
                    src="/images/food/image2.jpg"
                    alt="山荘ミルクの美食 - お料理の数々"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
