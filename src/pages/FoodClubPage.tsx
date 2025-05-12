import React from 'react';
import { Link } from 'react-router-dom';

const FoodClubPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#071a14] text-gray-100">
      {/* ヘッダー画像セクション */}
      <div className="relative h-80 bg-gray-800 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-400">食の会ヘッダー画像</span>
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-0 w-full">
          <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl md:text-5xl font-serif text-gray-50 mb-4">
              心と体がよろこぶ食の会
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              健康で生きるための食事と生活習慣を共に学びましょう
            </p>
          </div>
        </div>
      </div>

      {/* 概要セクション */}
      <section className="py-16 bg-[#0a2c20]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-gray-200 mb-8 text-lg leading-relaxed">
              この会は「健康で生きるための食事と生活習慣」を学ぶ会です。
              安全な食と健康について共に学び、考える機会を提供しています。
              会員以外でも希望者は誰でも参加できます。食事がつきますので、
              事前のお申し込みをお願いいたします。
            </p>

            {/* 食の会の画像3枚 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="overflow-hidden">
                <div className="bg-gray-800 h-64 flex items-center justify-center">
                  <span className="text-gray-400">食の会イメージ1</span>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="bg-gray-800 h-64 flex items-center justify-center">
                  <span className="text-gray-400">食の会イメージ2</span>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="bg-gray-800 h-64 flex items-center justify-center">
                  <span className="text-gray-400">食の会イメージ3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 食へのこだわりセクション */}
      <section className="py-16 bg-[#071a14]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <p className="text-sm md:text-base text-gray-300/70 mb-2 tracking-wider">こだわり</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-8 text-gray-50 leading-relaxed tracking-wider">
                山荘ミルクの食へのこだわり
              </h2>
            </div>

            <p className="text-gray-200 mb-10 text-lg leading-relaxed">
              健康のための食にとことんこだわっています。使用している食材は全て無農薬有機栽培のものを選び抜いています。
              現代のイオン交換膜法で生成された塩を使わず、クリスタル岩塩を使った自家製の醤油、自家製のケチャップ、
              自家製の味噌など、一つひとつの調味料にもこだわりを持って作られています。
            </p>

            {/* 酵素玄米 */}
            <div className="mb-16">
              <div className="border-l-4 border-amber-700 pl-3 mb-6">
                <h3 className="text-2xl font-bold text-gray-50">酵素玄米</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    山荘ミルクでは、自家製の酵素玄米を提供しています。
                    酵素玄米は通常の白米と比べ、栄養価が高く、消化吸収がよく、
                    腸内環境を整える効果が期待できると言われています。
                  </p>
                  <p className="text-gray-200 leading-relaxed">
                    長時間熟成させることで、玄米本来の栄養素を最大限に引き出し、
                    食べやすく体に優しい形で提供しています。
                  </p>
                </div>
                <div>
                  {/* 酵素玄米の写真 */}
                  <div className="overflow-hidden shadow-lg">
                    <div className="bg-gray-800 h-64 flex items-center justify-center">
                      <span className="text-gray-400">酵素玄米の写真</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* こだわりの水 */}
            <div className="mb-16">
              <div className="border-l-4 border-amber-700 pl-3 mb-6">
                <h3 className="text-2xl font-bold text-gray-50">こだわりの水</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="order-2 md:order-1">
                  {/* 水の写真 */}
                  <div className="overflow-hidden shadow-lg">
                    <div className="bg-gray-800 h-64 flex items-center justify-center">
                      <span className="text-gray-400">伏流水の写真</span>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    山荘ミルクで使用している水は、中央アルプスの伏流水です。
                    大学教授により科学的に分析され、その純度と清浄さが証明されています。
                    この上質な水は、料理はもちろん、コーヒーや紅茶などのドリンクの味わいを一層引き立てます。
                  </p>
                  <p className="text-gray-200 italic">
                    ※水の詳細な成分分析結果などの詳しい情報は近日公開予定です。
                  </p>
                </div>
              </div>
            </div>

            {/* 水出しコーヒー */}
            <div className="mb-16">
              <div className="border-l-4 border-amber-700 pl-3 mb-6">
                <h3 className="text-2xl font-bold text-gray-50">1秒1滴水出しコーヒー</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    無農薬有機栽培の豆を使い、中央アルプスの伏流水で淹れる1秒1滴水出しコーヒーは、
                    渋みが少なくまろやかな味わいが特徴です。コーヒー本来の深い香りと甘みをお楽しみいただけます。
                  </p>
                </div>
                <div>
                  {/* コーヒーの写真 */}
                  <div className="overflow-hidden shadow-lg">
                    <div className="bg-gray-800 h-64 flex items-center justify-center">
                      <span className="text-gray-400">コーヒーの写真</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 自然療法 */}
            <div className="mb-16">
              <div className="border-l-4 border-amber-700 pl-3 mb-6">
                <h3 className="text-2xl font-bold text-gray-50">自然療法「ゴッドクリーナー」</h3>
              </div>

              <p className="text-gray-200 mb-4 leading-relaxed">
                山荘ミルクでは「ゴッドクリーナー」と呼ばれる体の毒素を抜く自然療法も提供しています。
                この療法は体内に蓄積された有害物質を効果的に排出し、心身のバランスを整えるのに役立ちます。
              </p>
              <p className="text-gray-200 leading-relaxed">
                詳細については、お問い合わせいただくか、食の会にご参加いただくことで詳しくご案内いたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 開催情報セクション */}
      <section className="py-16 bg-[#0a2c20]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <p className="text-sm md:text-base text-gray-300/70 mb-2 tracking-wider">参加方法</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-8 text-gray-50 leading-relaxed tracking-wider">
                食の会の開催情報
              </h2>
            </div>
            
            <div className="bg-[#071a14] p-8 mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold mb-4 text-gray-100 text-xl border-b border-gray-700 pb-2">開催日時</h3>
                  <p className="text-gray-200 mb-6">毎月第2土曜日 13:00〜15:00</p>
                  
                  <h3 className="font-bold mb-4 text-gray-100 text-xl border-b border-gray-700 pb-2">参加費</h3>
                  <p className="text-gray-200 mb-6">3,500円（食事・お茶付き）</p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-4 text-gray-100 text-xl border-b border-gray-700 pb-2">定員</h3>
                  <p className="text-gray-200 mb-6">15名（要予約）</p>
                  
                  <h3 className="font-bold mb-4 text-gray-100 text-xl border-b border-gray-700 pb-2">お申し込み方法</h3>
                  <p className="text-gray-200">
                    電話またはメールにて、3日前までにお申し込みください。
                    <br />
                    電話: 0X0-XXXX-XXXX
                    <br />
                    メール: info@milk-co.jp
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-200 text-lg leading-relaxed mb-10">
              健康で幸せな暮らしのために、食について一緒に学び、考える機会として、
              皆様のご参加をお待ちしております。
            </p>
            
            <div className="text-center mt-12">
              <Link
                to="/contact"
                className="bg-amber-800 hover:bg-amber-700 text-white px-8 py-3 inline-block transition-colors shadow-lg"
              >
                お申し込みはこちら
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodClubPage;
