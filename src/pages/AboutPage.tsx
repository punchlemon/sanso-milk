import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <div
        className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url("/images/about-hero.jpg")' }}
      >
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
            山小屋の民宿について
          </h1>
          <p className="text-lg md:text-xl">
            伝統と自然が織りなす、心安らぐ時間
          </p>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* 紹介セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary-dark">
                自然に囲まれた特別な空間
              </h2>
              <p className="mb-4 text-gray-700">
                四季折々の美しい自然に囲まれた山あいの民宿は、都会の喧騒から離れ、
                大自然の息吹を肌で感じることができる特別な空間です。
                薪ストーブの暖かな灯りと、木の香り漂う館内で、心からのリラックスタイムをお過ごしください。
              </p>
              <p className="mb-4 text-gray-700">
                地元で収穫された新鮮な山の幸を活かした温かい手料理は、当民宿の自慢のひとつ。
                昔ながらの製法で作る郷土料理と、四季折々の自然の恵みをお楽しみいただけます。
              </p>
              <p className="text-gray-700">
                静寂に包まれた山の風景を眺めながら、忙しい日常を忘れてゆったりと流れる時間をご堪能ください。
              </p>
            </div>
            <div className="md:w-1/2">
              {/* 実際の山小屋画像に差し替え */}
              <div className="bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-gray-500">山小屋の外観</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 歴史セクション */}
      <section className="py-16 bg-natural-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-10 text-primary-dark text-center">
            民宿の歴史
          </h2>
          <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              {/* 実際の歴史的な写真に差し替え */}
              <div className="bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-gray-500">創業当時の写真</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="mb-4 text-gray-700">
                山の民宿「木香」は、1965年に現オーナーの祖父が山の自然を愛する人々に、
                その素晴らしさを体験してもらいたいとの思いから開業しました。
              </p>
              <p className="mb-4 text-gray-700">
                当時はまだ電気も通っておらず、ランプの明かりと薪ストーブの温もりだけが
                訪れる人々を迎えていました。そんな素朴な始まりから半世紀以上が経ちましたが、
                自然との調和と温かなおもてなしの心は今も変わらず受け継がれています。
              </p>
              <p className="text-gray-700">
                3代目となった現在も、先代から受け継いだレシピで料理を作り、
                大切に守ってきた山の暮らしの知恵を皆様にお伝えしています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 理念セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-8 text-primary-dark text-center">
            私たちの想い
          </h2>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-gray-700 text-center text-lg italic">
              山の民宿「木香」では、お客様に「自然の中で過ごす豊かな時間」をお届けすることをモットーにしています。
              忙しい日常から離れ、大自然の営みを感じ、薪ストーブの温もりに包まれながら過ごす時間は、
              きっと心に残る特別な思い出になることでしょう。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-natural-light p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary-dark">
                自然との調和
              </h3>
              <p className="text-gray-700">
                周囲の自然環境を大切にし、四季の移ろいを感じる暮らしを提供します。
              </p>
            </div>
            <div className="bg-natural-light p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary-dark">
                心温まるおもてなし
              </h3>
              <p className="text-gray-700">
                訪れるすべての方に家族のような温かさで接し、居心地の良い空間を作ります。
              </p>
            </div>
            <div className="bg-natural-light p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary-dark">
                伝統の継承
              </h3>
              <p className="text-gray-700">
                山里の暮らしの知恵や手仕事の技術を大切に守り、次の世代に伝えていきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              自然の中で特別なひとときを
            </h2>
            <p className="text-lg mb-8">
              山の民宿「木香」で、忘れられない思い出を作りませんか？
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/facilities"
                className="bg-accent hover:bg-accent-dark text-white font-bold py-3 px-6 rounded transition-colors"
              >
                施設を見る
              </Link>
              <Link
                to="/access"
                className="bg-transparent hover:bg-white border-2 border-white hover:text-primary-dark text-white font-bold py-3 px-6 rounded transition-colors"
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

export default AboutPage;
