import React from 'react';
import { Link } from 'react-router-dom';

const FoodClubPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-natural-light py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold mb-8 text-primary-dark text-center">
          心と体がよろこぶ食の会
        </h1>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="mb-8">
            {/* 実際の食の会写真に差し替え */}
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-gray-500">食の会の写真</span>
            </div>
          </div>

          <p className="text-gray-700 mb-6">
            この会は「健康で生きるための食事と生活習慣」を学ぶ会です。
            安全な食と健康について共に学び、考える機会を提供しています。
            会員以外でも希望者は誰でも参加できます。食事がつきますので、
            事前のお申し込みをお願いいたします。
          </p>

          <h2 className="text-2xl font-serif font-bold mb-4 text-primary-dark">
            山荘ミルクの食へのこだわり
          </h2>
          <p className="text-gray-700 mb-6">
            健康のための食にとことんこだわっています。使用している食材は全て無農薬有機栽培のものを選び抜いています。
            現代のイオン交換膜法で生成された塩を使わず、クリスタル岩塩を使った自家製の醤油、自家製のケチャップ、
            自家製の味噌など、一つひとつの調味料にもこだわりを持って作られています。
          </p>

          <h2 className="text-2xl font-serif font-bold mb-4 text-primary-dark">
            酵素玄米
          </h2>
          <div className="bg-natural-light p-6 rounded-lg mb-6">
            <p className="text-gray-700 mb-4">
              山荘ミルクでは、自家製の酵素玄米を提供しています。
              酵素玄米は通常の白米と比べ、栄養価が高く、消化吸収がよく、
              腸内環境を整える効果が期待できると言われています。
            </p>
            <p className="text-gray-700">
              長時間熟成させることで、玄米本来の栄養素を最大限に引き出し、
              食べやすく体に優しい形で提供しています。
            </p>
          </div>

          <h2 className="text-2xl font-serif font-bold mb-4 text-primary-dark">
            こだわりの水
          </h2>
          <div className="bg-natural-light p-6 rounded-lg mb-6">
            <p className="text-gray-700 mb-4">
              山荘ミルクで使用している水は、中央アルプスの伏流水です。
              大学教授により科学的に分析され、その純度と清浄さが証明されています。
              この上質な水は、料理はもちろん、コーヒーや紅茶などのドリンクの味わいを一層引き立てます。
            </p>
            <p className="text-gray-700">
              <em>
                ※水の詳細な成分分析結果などの詳しい情報は近日公開予定です。
              </em>
            </p>
          </div>

          <h2 className="text-2xl font-serif font-bold mb-4 text-primary-dark">
            1秒1滴水出しコーヒー
          </h2>
          <div className="mb-8">
            {/* 実際のコーヒー写真に差し替え */}
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center shadow-lg mb-4">
              <span className="text-gray-500">コーヒーの写真</span>
            </div>
            <p className="text-gray-700">
              無農薬有機栽培の豆を使い、中央アルプスの伏流水で淹れる1秒1滴水出しコーヒーは、
              渋みが少なくまろやかな味わいが特徴です。コーヒー本来の深い香りと甘みをお楽しみいただけます。
            </p>
          </div>

          <h2 className="text-2xl font-serif font-bold mb-4 text-primary-dark">
            自然療法「ゴッドクリーナー」
          </h2>
          <div className="bg-natural-light p-6 rounded-lg mb-6">
            <p className="text-gray-700 mb-4">
              山荘ミルクでは「ゴッドクリーナー」と呼ばれる体の毒素を抜く自然療法も提供しています。
              この療法は体内に蓄積された有害物質を効果的に排出し、心身のバランスを整えるのに役立ちます。
            </p>
            <p className="text-gray-700">
              詳細については、お問い合わせいただくか、食の会にご参加いただくことで詳しくご案内いたします。
            </p>
          </div>

          <h2 className="text-2xl font-serif font-bold mb-4 text-primary-dark">
            食の会の開催情報
          </h2>
          <div className="bg-natural-light p-6 rounded-lg mb-6">
            <h3 className="text-lg font-bold mb-2 text-primary-dark">
              開催日時
            </h3>
            <p className="text-gray-700 mb-4">毎月第2土曜日 13:00〜15:00</p>

            <h3 className="text-lg font-bold mb-2 text-primary-dark">参加費</h3>
            <p className="text-gray-700 mb-4">3,500円（食事・お茶付き）</p>

            <h3 className="text-lg font-bold mb-2 text-primary-dark">定員</h3>
            <p className="text-gray-700 mb-4">15名（要予約）</p>

            <h3 className="text-lg font-bold mb-2 text-primary-dark">
              お申し込み方法
            </h3>
            <p className="text-gray-700">
              電話またはメールにて、3日前までにお申し込みください。
              <br />
              電話: 0X0-XXXX-XXXX
              <br />
              メール: info@milk-co.jp
            </p>
          </div>

          <p className="text-gray-700">
            健康で幸せな暮らしのために、食について一緒に学び、考える機会として、
            皆様のご参加をお待ちしております。
          </p>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded transition-colors"
          >
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodClubPage;
