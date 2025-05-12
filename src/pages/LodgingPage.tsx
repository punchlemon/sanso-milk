import React from 'react';
import { Link } from 'react-router-dom';

const LodgingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#071a14] text-gray-100">
      {/* ヘッダー画像セクション */}
      <div className="relative h-80 bg-gray-800 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-400">宿泊施設のヘッダー画像</span>
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-0 w-full">
          <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl md:text-5xl font-serif text-gray-50 mb-4">
              宿泊施設
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              自然に囲まれた静かな空間で、くつろぎの時間をお過ごしください
            </p>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <section className="py-16 bg-[#0a2c20]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-gray-200 mb-8 text-lg leading-relaxed">
              大自然の懐に包まれ、ゆっくりとお休みください。
              朝は小鳥のさえずりで爽やかに目が覚め、楽しい一日の始まりです。
              標高1,000mの中央アルプスの麓で、澄んだ空気と静寂の中で過ごす特別なひとときをお楽しみください。
            </p>

            <div className="mb-16">
              <p className="text-sm md:text-base text-gray-300/70 mb-2 tracking-wider">お部屋のご案内</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-8 text-gray-50 leading-relaxed tracking-wider">
                快適にお過ごしいただける<br />客室をご用意
              </h2>
            </div>

            {/* ウェストロッジ */}
            <div className="mb-16">
              <div className="border-l-4 border-amber-700 pl-3 mb-6">
                <h3 className="text-2xl font-bold text-gray-50">ウェストロッジ</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  {/* 部屋写真 */}
                  <div className="overflow-hidden shadow-lg mb-4">
                    <div className="bg-gray-800 h-64 flex items-center justify-center">
                      <span className="text-gray-400">ウェストロッジの写真</span>
                    </div>
                  </div>

                  {/* 小さい写真2枚 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="overflow-hidden">
                      <div className="bg-gray-800 h-32 flex items-center justify-center">
                        <span className="text-gray-400">客室詳細1</span>
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className="bg-gray-800 h-32 flex items-center justify-center">
                        <span className="text-gray-400">客室詳細2</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    落ち着いたインテリアで、ちょっとぜいたくなプライベートタイムをお過ごしください。
                  </p>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    ※バス・トイレ付 ベッド2つ（3人目の方からロフトに布団）
                  </p>
                  <p className="text-amber-300 mb-6 text-lg font-medium">
                    シングルユース：11,000円 / ツインユース：13,200円
                  </p>
                  
                  <div className="bg-[#071a14] p-6 mb-4">
                    <h4 className="font-bold mb-4 text-gray-100 text-lg">設備・アメニティ</h4>
                    <ul className="text-gray-200 list-disc pl-5 space-y-2">
                      <li>定員: 2〜4名</li>
                      <li>バス・トイレ付、冷暖房完備</li>
                      <li>Wi-Fi完備</li>
                      <li>タオル、バスタオル、歯ブラシセット</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* イーストロッジ - 2つ目の部屋タイプとして追加 */}
            <div className="mb-16">
              <div className="border-l-4 border-amber-700 pl-3 mb-6">
                <h3 className="text-2xl font-bold text-gray-50">イーストロッジ</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  {/* 部屋写真 */}
                  <div className="overflow-hidden shadow-lg mb-4">
                    <div className="bg-gray-800 h-64 flex items-center justify-center">
                      <span className="text-gray-400">イーストロッジの写真</span>
                    </div>
                  </div>

                  {/* 小さい写真2枚 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="overflow-hidden">
                      <div className="bg-gray-800 h-32 flex items-center justify-center">
                        <span className="text-gray-400">客室詳細1</span>
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className="bg-gray-800 h-32 flex items-center justify-center">
                        <span className="text-gray-400">客室詳細2</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    窓から中央アルプスの山々を一望できる、明るく開放的なお部屋です。自然の光が差し込む心地よい空間でリラックスできます。
                  </p>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    ※共同バス・トイレ ベッド2つ（3人目の方は布団）
                  </p>
                  <p className="text-amber-300 mb-6 text-lg font-medium">
                    シングルユース：9,500円 / ツインユース：11,800円
                  </p>
                  
                  <div className="bg-[#071a14] p-6 mb-4">
                    <h4 className="font-bold mb-4 text-gray-100 text-lg">設備・アメニティ</h4>
                    <ul className="text-gray-200 list-disc pl-5 space-y-2">
                      <li>定員: 2〜3名</li>
                      <li>共同バス・トイレ、冷暖房完備</li>
                      <li>Wi-Fi完備</li>
                      <li>タオル、バスタオル、歯ブラシセット</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お食事について */}
      <section className="py-16 bg-[#071a14]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <p className="text-sm md:text-base text-gray-300/70 mb-2 tracking-wider">お食事について</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-8 text-gray-50 leading-relaxed tracking-wider">
                健康と美味しさにこだわった<br />心温まる朝食
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  宿泊のお客様には、無農薬・有機栽培にこだわった食材を使用した朝食をご用意しております。
                  自家製無添加パンと淹れたての珈琲で、爽やかな朝のひとときをお過ごしください。
                </p>
                <p className="text-gray-200 leading-relaxed">
                  中央アルプスの麓で採れた新鮮な野菜や、地元の生産者から仕入れた無添加の食材を使用。
                  健康に配慮したお食事は、心も体も満たしてくれます。
                </p>
              </div>
              <div>
                {/* 食事写真 */}
                <div className="overflow-hidden shadow-lg">
                  <div className="bg-gray-800 h-64 flex items-center justify-center">
                    <span className="text-gray-400">朝食の写真</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 小さい写真3枚 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <div className="overflow-hidden">
                <div className="bg-gray-800 h-48 flex items-center justify-center">
                  <span className="text-gray-400">食事イメージ1</span>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="bg-gray-800 h-48 flex items-center justify-center">
                  <span className="text-gray-400">食事イメージ2</span>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="bg-gray-800 h-48 flex items-center justify-center">
                  <span className="text-gray-400">食事イメージ3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 予約・料金セクション */}
      <section className="py-16 bg-[#0a2c20]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <p className="text-sm md:text-base text-gray-300/70 mb-2 tracking-wider">ご予約・料金</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-8 text-gray-50 leading-relaxed tracking-wider">
                ご宿泊のご予約について
              </h2>
            </div>
            
            <p className="text-gray-200 mb-6 leading-relaxed">
              ご予約は電話またはメールにて承っております。
              料金は季節や部屋タイプによって異なりますので、詳しくはお問い合わせください。
            </p>
            
            <div className="bg-[#071a14] p-6 mb-8">
              <h4 className="font-bold mb-4 text-gray-100 text-lg">ご予約・お問い合わせ</h4>
              <div className="space-y-2 text-gray-200">
                <p>電話: 0X0-XXXX-XXXX</p>
                <p>メール: info@milk-co.jp</p>
              </div>
            </div>

            <div className="bg-[#071a14] p-6 mb-8">
              <h4 className="font-bold mb-4 text-gray-100 text-lg">キャンセルポリシー</h4>
              <ul className="text-gray-200 list-disc pl-5 space-y-2">
                <li>ご予約日の3日前までは無料</li>
                <li>2日前は30%のキャンセル料</li>
                <li>前日は50%のキャンセル料</li>
                <li>当日は100%のキャンセル料</li>
              </ul>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/contact"
                className="bg-amber-800 hover:bg-amber-700 text-white px-8 py-3 inline-block transition-colors shadow-lg"
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
