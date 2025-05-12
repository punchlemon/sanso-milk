import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';

const HomePage: React.FC = () => {
  // スライダー用の画像配列 - 絶対パスを使用して確実に読み込む
  const sliderImages = [
    '/images/slider-image1.jpg',
    '/images/slider-image2.jpg',
    '/images/slider-image3.jpg',
  ];

  return (
    <div className="min-h-screen bg-[#0d1811] text-gray-100">
      {/* 一面の写真 */}
      <section className="relative h-screen w-full flex items-end justify-start overflow-hidden">
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
          <div className="absolute inset-0 bg-black/30 z-5"></div>
        </div>
        
        {/* コンテンツ - 左下寄せ */}
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif text-gray-50 mb-8 leading-tight">
              心安らぐ贅沢な時間
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-xl">
              標高1,000mの中央アルプス山麓に佇む隠れ家。
              清らかな空気と星空、山々の恵みを感じる静寂の中で、
              本来の自分を取り戻す贅沢なひとときをお過ごしください。
            </p>
            <div className="text-sm text-gray-300">
              山荘ミルク・長野県伊那市
            </div>
          </div>
        </div>
      </section>

      {/* コンセプト - 背景色をより暗く */}
      <section className="py-24 md:py-32 bg-[#0a1a0d] text-gray-100">
        <div className="container mx-auto px-6">
          <div className="mb-12 md:w-1/2">
            <p className="text-sm md:text-base text-gray-300/70 mb-2 tracking-wider">コンセプト</p>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-gray-50 leading-relaxed tracking-wider">
              大切な人と紡ぐ<br />かけがえのない時間
            </h2>
            
            <div className="space-y-6 text-gray-200 leading-relaxed max-w-3xl">
              <p className="text-base md:text-lg">
                忙しい日常から離れ、ゆったりと流れる時間の中で。
              </p>
              
              <p className="text-base md:text-lg">
                私たちが大切にしているのは、訪れる方々が
                本当の自分に還る体験です。四季折々の自然と
                山里の暮らしに触れながら、心と体が喜ぶ食事と
                おもてなしで満たされる時間。そして何より
                大切な人との絆を深める、かけがえのない記憶。
              </p>
              
              <p className="text-base md:text-lg">
                山荘ミルクは、そんな特別な時間が流れる場所です。
              </p>
            </div>
          </div>
          
          {/* コンセプトの画像 - より動的なレイアウト */}
          <div className="mt-12 relative">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5 md:row-span-2 overflow-hidden transform md:translate-y-12">
                <div className="h-64 md:h-full bg-[#0a150c] overflow-hidden shadow-xl">
                  <div className="h-full w-full bg-center bg-cover" 
                       style={{backgroundImage: "url('/images/src/slider-image1.jpg')"}}></div>
                </div>
              </div>
              
              <div className="md:col-span-4 md:col-start-6 overflow-hidden">
                <div className="h-64 bg-[#0a150c] overflow-hidden shadow-xl">
                  <div className="h-full w-full bg-center bg-cover" 
                       style={{backgroundImage: "url('/images/src/slider-image2.jpg')"}}></div>
                </div>
              </div>
              
              <div className="md:col-span-3 md:col-start-10 overflow-hidden">
                <div className="h-64 bg-[#0a150c] overflow-hidden shadow-xl">
                  <div className="h-full w-full bg-center bg-cover" 
                       style={{backgroundImage: "url('/images/src/slider-image3.jpg')"}}></div>
                </div>
              </div>
              
              <div className="hidden md:block md:col-span-7 md:col-start-6 md:row-start-2 overflow-hidden">
                <div className="h-64 bg-[#0a150c] overflow-hidden shadow-xl">
                  <div className="h-full w-full bg-center bg-cover" 
                       style={{backgroundImage: "url('/images/src/slider-image1.jpg')"}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 部屋 - より動的な画像レイアウト */}
      <section className="py-24 md:py-32 bg-[#0a150c] text-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/5">
              <p className="text-sm md:text-base text-gray-300/70 mb-2 tracking-wider">部屋</p>
              <h2 className="text-3xl md:text-5xl font-serif mb-8 text-gray-50 leading-relaxed tracking-wider">
                くつろぎと<br />安らぎの<br />客室
              </h2>
              
              <div className="space-y-6 text-gray-200 leading-relaxed">
                <p className="text-base md:text-lg">
                  中央アルプスの雄大な景色を望む客室は、木のぬくもりと自然素材にこだわりました。心が落ち着く空間で、日常を忘れてゆったりとした時間をお過ごしいただけます。
                </p>
                
                <p className="text-base md:text-lg">
                  全室に中央アルプスの清浄な空気と美しい眺望をご用意。静寂に包まれた夜には、満天の星空をお楽しみいただけます。
                </p>
              </div>
              
              <div className="mt-8">
                <Link
                  to="/lodging"
                  className="inline-flex items-center font-medium text-[#d4b896] hover:text-[#e5ceaf] transition-colors"
                >
                  <span>客室の詳細を見る</span>
                  <svg className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* 部屋の画像 - ダイナミックレイアウト */}
            <div className="md:w-3/5 grid grid-cols-12 gap-3">
              <div className="col-span-12 relative overflow-hidden shadow-2xl">
                <div className="h-80 w-full bg-center bg-cover" 
                    style={{backgroundImage: "url('/images/src/slider-image2.jpg')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="col-span-7 relative mt-3 overflow-hidden shadow-xl">
                <div className="h-56 w-full bg-center bg-cover" 
                    style={{backgroundImage: "url('/images/src/slider-image3.jpg')"}}></div>
              </div>
              
              <div className="col-span-5 relative mt-3 overflow-hidden shadow-xl">
                <div className="h-56 w-full bg-center bg-cover" 
                    style={{backgroundImage: "url('/images/src/slider-image1.jpg')"}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 食事 - 背景色をより暗く、画像をよりダイナミックに */}
      <section className="py-24 md:py-32 bg-[#0a1a0d] text-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse md:flex-row gap-12">
            {/* 食事の画像 - オーバーラップレイアウト */}
            <div className="md:w-1/2 relative">
              <div className="relative z-10 md:absolute md:top-12 md:left-0 md:w-4/5 overflow-hidden shadow-xl">
                <div className="h-64 w-full bg-center bg-cover" 
                    style={{backgroundImage: "url('/images/src/slider-image1.jpg')"}}></div>
              </div>
              
              <div className="hidden md:block md:absolute md:top-32 md:right-0 md:w-1/2 overflow-hidden shadow-2xl">
                <div className="h-80 w-full bg-center bg-cover" 
                    style={{backgroundImage: "url('/images/src/slider-image2.jpg')"}}></div>
              </div>
              
              <div className="relative z-[5] mt-4 md:absolute md:bottom-0 md:left-1/4 md:w-2/3 overflow-hidden shadow-xl">
                <div className="h-64 w-full bg-center bg-cover" 
                    style={{backgroundImage: "url('/images/src/slider-image3.jpg')"}}></div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <p className="text-sm md:text-base text-gray-300/70 mb-2 tracking-wider">食事</p>
              <h2 className="text-3xl md:text-5xl font-serif mb-8 text-gray-50 leading-relaxed tracking-wider">
                身体と心が喜ぶ<br />健康的な美食
              </h2>
              
              <div className="space-y-6 text-gray-200 leading-relaxed">
                <p className="text-base md:text-lg">
                  無農薬・有機栽培の食材を使用した健康的なお料理は、体にやさしく本物の味わいを堪能できます。中央アルプスの伏流水を使ったお料理は格別な味わいです。
                </p>
                
                <p className="text-base md:text-lg">
                  自家製天然酵母パンや、丁寧に水出ししたコーヒーなど、素材と時間にこだわった料理の数々をお楽しみください。
                </p>
              </div>
              
              <div className="mt-8">
                <Link
                  to="/food-club"
                  className="inline-flex items-center font-medium text-[#d4b896] hover:text-[#e5ceaf] transition-colors"
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

      {/* 予約・問い合わせ CTA */}
      <section className="py-16 md:py-20 bg-[#0a150c] text-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-50">
              特別な時間をお過ごしください
            </h2>
            <p className="text-lg mb-10 text-gray-200">
              ご予約・お問い合わせはこちらから。<br />
              皆様のお越しを心よりお待ちしております。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-[#8b6b4d] hover:bg-[#9d7c5d] text-white transition-colors shadow-lg"
              >
                ご予約はこちら
              </Link>
              <Link
                to="/access"
                className="px-8 py-3 bg-[#2a3c30] hover:bg-[#3a4c40] text-white transition-colors shadow-lg"
              >
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
