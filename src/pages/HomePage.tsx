import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <div className="relative h-screen bg-cover bg-center flex items-center justify-center" 
           style={{backgroundImage: 'url("/images/hero-background.jpg")'}}>
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">山荘ミルク</h1>
          <p className="text-xl md:text-2xl mb-8">〜安全な食と健康を求めて〜</p>
          <Link to="/about" className="bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">施設について</Link>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* イントロセクション */}
      <section className="py-16 md:py-24 bg-natural-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-4 text-primary-dark">自然と調和する山荘</h2>
              <p className="mb-4 text-gray-700">
                山荘ミルクへようこそ。標高およそ1,000mの中央アルプスの麓、
                おいしい空気と四季折々の大自然に囲まれた当館は、
                のんびりとくつろげる特別な空間です。
              </p>
              <p className="mb-6 text-gray-700">
                いろんな人が集い、それぞれに自由な時間を楽しめる場所。
                安全な食と健康をテーマに、心と体がよろこぶひとときをお過ごしください。
              </p>
              <Link to="/about" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded transition-colors">もっと詳しく</Link>
            </div>
            <div className="md:w-1/2">
              {/* 実際の山荘外観写真に差し替え */}
              <div className="bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-gray-500">山荘外観</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-10 text-primary-dark text-center">山荘ミルクの魅力</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-natural-light p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-accent">🌿</div>
              <h3 className="text-xl font-bold mb-2 text-primary-dark">自然食へのこだわり</h3>
              <p className="text-gray-700">コーヒー・米・味噌・野菜など、できるだけ無農薬・有機栽培にこだわった食材を使用しています</p>
            </div>
            <div className="bg-natural-light p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-accent">🍞</div>
              <h3 className="text-xl font-bold mb-2 text-primary-dark">自家製無添加パン</h3>
              <p className="text-gray-700">バター・砂糖を一切使わず、塩と蜂蜜のみで天然酵母で7時間かけて焼き上げた自家製パン</p>
            </div>
            <div className="bg-natural-light p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-accent">☕</div>
              <h3 className="text-xl font-bold mb-2 text-primary-dark">こだわりのコーヒー</h3>
              <p className="text-gray-700">中央アルプスの伏流水でドリップした、まろやかな味わいのコーヒーをお楽しみください</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link to="/facilities" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded transition-colors">施設を見る</Link>
          </div>
        </div>
      </section>

      {/* 結婚式セクション */}
      <section className="py-16 bg-natural-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              {/* 実際の結婚式写真に差し替え */}
              <div className="bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-gray-500">山の結婚式</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-4 text-primary-dark">山荘での結婚式</h2>
              <p className="mb-4 text-gray-700">
                標高1,000mの大自然に囲まれた特別な場所で、お二人の大切な一日を過ごしませんか？
                四季折々の美しい景色の中で、心に残る結婚式をお手伝いします。
              </p>
              <p className="mb-6 text-gray-700">
                のんびりとした雰囲気の中で、ご家族や大切な方々と共に過ごす、
                自然と調和したアットホームなウェディングをご提案します。
              </p>
              <Link to="/wedding" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded transition-colors">詳しくはこちら</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 宿泊セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-8 text-primary-dark text-center">宿泊施設</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8">
            大自然の懐に包まれ、ゆっくりとお休みください。
            朝は小鳥のさえずりで爽やかに目が覚め、楽しい一日の始まりです。
          </p>
          <div className="bg-natural-light p-6 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-2 text-primary-dark">ウェストロッジ</h3>
            <p className="text-gray-700 mb-2">落ち着いたインテリアで、ちょっとぜいたくなプライベートタイムをお過ごしください。</p>
            <p className="text-gray-700 mb-2">※バス・トイレ付 ベッド2つ（3人目の方からロフトに布団）</p>
            <p className="text-gray-700 font-bold">シングルユース：11,000円 / ツインユース：13,200円</p>
          </div>
          <div className="mt-12 text-center">
            <Link to="/lodging" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded transition-colors">宿泊について詳しく</Link>
          </div>
        </div>
      </section>

      {/* ドッグランセクション */}
      <section className="py-16 bg-natural-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-4 text-primary-dark">ドッグラン</h2>
              <p className="mb-4 text-gray-700">
                ワンちゃんを思いっきり遊ばせたり、食事やティータイムを楽しんだり、
                他のお客さまを気にすることなく、ワンちゃんと一緒にゆったり過ごすことができます。
              </p>
              <p className="mb-4 text-gray-700">
                小型犬用、中型犬用、大型犬用の3つのエリアに分かれており、
                専用のレストランもございます。
              </p>
              <p className="mb-6 text-gray-700">
                <strong>営業時間：</strong>3/1〜12/20の営業時間内
                <br /><span className="text-sm">(定休日も雨天以外はご利用可能ですが、事前にご確認ください）</span>
              </p>
              <Link to="/dogrun" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded transition-colors">詳しくはこちら</Link>
            </div>
            <div className="md:w-1/2">
              {/* 実際のドッグランの写真に差し替え */}
              <div className="bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-gray-500">ドッグラン</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 食の会セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              {/* 実際の食の会の写真に差し替え */}
              <div className="bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-gray-500">食の会の様子</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-4 text-primary-dark">心と体がよろこぶ食の会</h2>
              <p className="mb-4 text-gray-700">
                この会は「健康で生きるための食事と生活習慣」を学ぶ会です。
                安全な食と健康について共に学び、考える機会を提供しています。
              </p>
              <p className="mb-6 text-gray-700">
                会員以外でも希望者は誰でも参加できます。食事がつきますので、
                事前のお申し込みをお願いいたします。
              </p>
              <Link to="/food-club" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded transition-colors">詳しくはこちら</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 商品セクション */}
      <section className="py-16 bg-natural-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-8 text-primary-dark text-center">自然食品・テイクアウト</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8">
            山荘ミルクのこだわり食材や自家製パン、お料理をご自宅でもお楽しみいただけます。
            テイクアウトも承っておりますので、お気軽にお問い合わせください。
          </p>
          <div className="mt-6 text-center">
            <Link to="/products" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded transition-colors">商品を見る</Link>
          </div>
          {/* 実際の特産品写真に差し替え */}
          <div className="mt-8 bg-gray-200 h-40 rounded-lg flex items-center justify-center shadow-lg max-w-4xl mx-auto">
            <span className="text-gray-500">自然食品の写真</span>
          </div>
        </div>
      </section>

      {/* アクセスセクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-4 text-primary-dark">アクセス</h2>
              <p className="mb-4 text-gray-700">
                <strong>住所：</strong>長野県伊那市横山風の谷9749
              </p>
              <p className="mb-4 text-gray-700">
                <strong>お車の場合：</strong>
                <br />中央道小黒川スマートインターから約10分
                <br />中央道伊那ICから20分
              </p>
              <p className="mb-6 text-gray-700">
                <strong>電車の場合：</strong>
                <br />最寄り駅からの送迎もございますので、ご予約時にお問い合わせください。
              </p>
              <Link to="/access" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded transition-colors">詳しいアクセス情報</Link>
            </div>
            <div className="md:w-1/2">
              {/* 実際の地図に差し替え */}
              <div className="bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-gray-500">アクセスマップ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 営業情報セクション */}
      <section className="py-12 bg-natural-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-6 text-primary-dark text-center">営業情報</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-8">
            <p className="mb-2 text-gray-700">
              <strong className="text-primary-dark">営業時間：</strong>11:00〜15:00
            </p>
            <p className="text-gray-700">
              <strong className="text-primary-dark">定休日：</strong>毎週 月曜日・火曜日
              <br /><span className="text-sm">(薔薇の季節の6月は月曜日・火曜日も営業 11:00〜15:00）</span>
            </p>
          </div>
          <div className="text-center">
            <Link to="/monthly-schedule" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded transition-colors">月間営業案内を見る</Link>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">山荘ミルクは あなたのお店です</h2>
            <p className="mb-6 text-lg">ご予約・お問い合わせは、お電話またはメールにて承っております</p>
            <div className="mb-6">
              <p className="text-2xl font-bold mb-1">0X0-XXXX-XXXX</p>
              <p className="text-xl">info@milk-co.jp</p>
            </div>
            <p className="text-sm text-natural-light">※繁忙期は電話がつながりにくい場合がございます。メールでのお問い合わせをおすすめします。</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;