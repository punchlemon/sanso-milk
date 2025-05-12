import React from 'react';
import ContentCard from '../components/ContentCard';
// 直接ContentItem型を定義して問題を回避
type ContentType = 'event' | 'service' | 'facility' | 'news' | 'product' | 'activity';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  linkUrl?: string;
  type: ContentType;
  tags?: string[];
  iconSvg?: React.ReactNode;
  date?: string;
  featured?: boolean;
  buttonText?: string;
}
import { Link } from 'react-router-dom';

// 部屋情報データ
const roomData: ContentItem[] = [
  {
    id: 'japanese-room',
    title: '和室',
    description: '畳の香りが心地よい、くつろぎの空間です。窓からは美しい山々の景色が一望でき、四季折々の自然を感じることができます。冷暖房完備、浴衣、タオル・バスタオル、歯ブラシセットをご用意しています。',
    imageUrl: '/images/facilities/japanese-room.jpg', // 実際の画像パスに変更
    type: 'facility',
    tags: ['定員: 2〜4名様', '1泊2食付き'],
    buttonText: '詳細を見る',
    linkUrl: '/lodging#japanese-room',
    featured: false,
  },
  {
    id: 'western-room',
    title: '洋室',
    description: '木の温もりを感じる洋室は、シックな色調でまとめられた落ち着きのある空間です。快適なベッドで、山の静けさの中ぐっすりとお休みいただけます。冷暖房完備、浴衣、タオル・バスタオル、歯ブラシセットをご用意しています。',
    imageUrl: '/images/facilities/western-room.jpg', // 実際の画像パスに変更
    type: 'facility',
    tags: ['定員: 2名様', '1泊2食付き'],
    buttonText: '詳細を見る',
    linkUrl: '/lodging#western-room',
    featured: false,
  },
  {
    id: 'special-room',
    title: '特別室「山帰来」',
    description: '当館最大の贅沢をご堪能いただける特別室。内風呂付きで、専用デッキからは山々のパノラマビューをお楽しみいただけます。大切な記念日や特別な旅に最適です。内風呂付き、専用デッキ、冷暖房完備、高級浴衣、上質なアメニティをご用意しています。',
    imageUrl: '/images/facilities/special-room.jpg', // 実際の画像パスに変更
    type: 'facility',
    tags: ['定員: 2〜5名様', '1泊2食付き'],
    buttonText: '詳細を見る',
    linkUrl: '/lodging#special-room',
    featured: true,
  }
];

// お風呂情報
const bathInfo: ContentItem = {
  id: 'hot-spring',
  title: '山荘の温泉',
  description: '当館の温泉は、山深くから湧き出る天然かけ流しの湯です。開放的な露天風呂からは四季折々の山の風景を眺めながら、日頃の疲れを癒していただけます。泉質は単純温泉で、肌にやさしくお子様からご年配の方まで安心してご利用いただけます。',
  imageUrl: '/images/facilities/bath.jpg', // 実際の画像パスに変更
  type: 'facility',
  tags: ['営業時間: 6:00〜9:00、15:00〜23:00', '天然温泉'],
  featured: false,
};

// 食事情報
const diningInfo: ContentItem = {
  id: 'dining',
  title: '自慢のお食事',
  description: '当館のお食事は、近隣の山や畑で採れた新鮮な食材を使用した「山里の手料理」をご提供しています。季節ごとに変わる旬の味わいと、代々受け継がれてきた伝統のレシピをぜひご堪能ください。朝食は、炊きたてのご飯と山の幸を活かした品々を。夕食は、囲炉裏を囲んで、地元の食材を使った郷土料理をお楽しみいただけます。',
  imageUrl: '/images/facilities/dining.jpg', // 実際の画像パスに変更
  type: 'service',
  tags: ['朝食: 和定食', '夕食: 囲炉裏料理'],
  featured: true,
};

// 体験活動情報
const activityData: ContentItem[] = [
  {
    id: 'mountain-vegetable',
    title: '山菜採り体験',
    description: '春には地元ガイドと一緒に山菜採りへ。採った山菜は夕食のお膳で召し上がれます。貴重な山の恵みを味わう体験ができます。',
    imageUrl: '/images/facilities/mountain-vegetable.jpg', // 実際の画像パスに変更
    type: 'activity',
    tags: ['春季限定', '約2時間'],
    buttonText: '予約する',
    linkUrl: '/contact',
    featured: false,
  },
  {
    id: 'woodcutting',
    title: '薪割り体験',
    description: '薪ストーブの燃料となる薪を割る体験ができます。自分で割った薪で沸かすお湯の温かさは格別です。山里の暮らしを身近に感じられる体験です。',
    imageUrl: '/images/facilities/woodcutting.jpg', // 実際の画像パスに変更
    type: 'activity',
    tags: ['通年', '約1時間'],
    buttonText: '予約する',
    linkUrl: '/contact',
    featured: false,
  },
  {
    id: 'pottery',
    title: '陶芸体験',
    description: '地元の粘土を使って、オリジナルの器作り。完成品は後日お送りいたします。記念の一品を作りませんか？',
    imageUrl: '/images/facilities/pottery.jpg', // 実際の画像パスに変更
    type: 'activity',
    tags: ['通年', '約2時間'],
    buttonText: '予約する',
    linkUrl: '/contact',
    featured: false,
  },
  {
    id: 'stargazing',
    title: '星空観察',
    description: '晴れた夜には、光害の少ない山の中から満天の星空を観察できます。ガイド付きで星座や天体の解説も行います。',
    imageUrl: '/images/facilities/stargazing.jpg', // 実際の画像パスに変更
    type: 'activity',
    tags: ['晴天時のみ', '約1時間'],
    buttonText: '予約する',
    linkUrl: '/contact',
    featured: true,
  }
];

const FacilitiesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <div
        className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url("/images/facilities-hero.jpg")' }}
      >
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            施設案内
          </h1>
          <p className="text-lg md:text-xl">
            山荘ミルクが提供する快適な空間と体験
          </p>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* ナビゲーションタブ - ページ内リンク */}
      <div className="bg-white shadow-sm sticky top-[72px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar py-2 space-x-4">
            <a href="#rooms" className="whitespace-nowrap px-4 py-2 text-primary-dark hover:text-accent transition-colors font-medium">お部屋</a>
            <a href="#dining" className="whitespace-nowrap px-4 py-2 text-primary-dark hover:text-accent transition-colors font-medium">お食事</a>
            <a href="#bath" className="whitespace-nowrap px-4 py-2 text-primary-dark hover:text-accent transition-colors font-medium">お風呂</a>
            <a href="#activities" className="whitespace-nowrap px-4 py-2 text-primary-dark hover:text-accent transition-colors font-medium">体験活動</a>
          </div>
        </div>
      </div>

      {/* お部屋セクション - ContentCardを使用 */}
      <section id="rooms" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-primary-dark">
              お部屋
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-gray-700">
              当館のお部屋は、すべて山の景色が眺められる位置にあり、自然素材をふんだんに使った
              心地よい空間となっております。木のぬくもりと山の静けさに包まれながら、
              ゆったりとしたひとときをお過ごしください。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomData.map(room => (
              <ContentCard key={room.id} item={room} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/lodging" className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md transition-colors">
              <span>お部屋の詳細をもっと見る</span>
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* お食事セクション - ContentCardを使用 */}
      <section id="dining" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-primary-dark">
              お食事
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-2/3">
              <ContentCard item={diningInfo} size="horizontal" />
            </div>
            
            <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-md self-stretch">
              <h3 className="text-xl font-bold mb-4 text-primary-dark border-b pb-2">提供メニュー</h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-accent mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  朝食
                </h4>
                <p className="text-gray-700 text-sm">
                  炊きたての山里米、季節の野菜の小鉢、山菜の天ぷら、自家製のぬか漬け、
                  焼き魚など、シンプルながら体に優しい朝食をご用意しています。
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-accent mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  夕食
                </h4>
                <p className="text-gray-700 text-sm">
                  地元の山菜や川魚、きのこなどを使った郷土料理の数々。
                  薪ストーブでじっくり煮込んだ煮物や、囲炉裏で焼く山の幸の炭火焼きなど、
                  素材の味を活かした料理をお楽しみください。
                </p>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 text-sm text-yellow-700">
                <p className="flex items-start">
                  <svg className="w-5 h-5 mr-1 shrink-0 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>アレルギーや苦手な食材がございましたら、事前にお知らせください。できる限り対応させていただきます。</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お風呂セクション - ContentCardを使用 */}
      <section id="bath" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-primary-dark">
              お風呂
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-2/3">
              <ContentCard item={bathInfo} size="horizontal" />
            </div>
            
            <div className="lg:w-1/3 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-primary-dark flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                温泉の効能
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">疲労回復に効果的</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">神経痛・筋肉痛の緩和</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">冷え性の改善</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">リラックス効果</span>
                </li>
              </ul>
              
              <div className="mt-4 pt-4 border-t border-blue-200">
                <h4 className="font-bold text-blue-700 mb-2">泉質</h4>
                <p className="text-gray-700 text-sm">単純温泉（アルカリ性単純泉）</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 体験活動セクション - ContentCardを使用 */}
      <section id="activities" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-primary-dark">
              体験活動
            </h2>
          </div>

          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-gray-700">
              滞在中に山里での暮らしや自然を体験できる様々なアクティビティをご用意しています。
              日常では味わえない特別な思い出作りに、ぜひご参加ください。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activityData.map(activity => (
              <ContentCard key={activity.id} item={activity} size="small" />
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-yellow-700 max-w-3xl mx-auto">
            <p className="flex items-start">
              <svg className="w-5 h-5 mr-2 shrink-0 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>各体験は季節や天候によって実施できない場合がございます。詳細は事前にお問い合わせください。</span>
            </p>
          </div>
        </div>
      </section>

      {/* お問い合わせ誘導セクション */}
      <section className="py-10 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">施設に関するご質問はお気軽に</h2>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-white text-primary-dark hover:bg-gray-100 px-6 py-3 rounded-md transition-colors font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            お問い合わせはこちら
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FacilitiesPage;
