import React from 'react';
import { Link } from 'react-router-dom';

const LodgingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-natural-light py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold mb-8 text-primary-dark text-center">宿泊施設</h1>
        
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-12">
          <p className="text-gray-700 mb-6">
            大自然の懐に包まれ、ゆっくりとお休みください。
            朝は小鳥のさえずりで爽やかに目が覚め、楽しい一日の始まりです。
            標高1,000mの中央アルプスの麓で、澄んだ空気と静寂の中で過ごす特別なひとときをお楽しみください。
          </p>
          
          <h2 className="text-2xl font-serif font-bold mb-4 text-primary-dark">お部屋のご案内</h2>
          
          <div className="bg-natural-light p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-bold mb-2 text-primary-dark">ウェストロッジ</h3>
            <div className="mb-4">
              {/* 実際の部屋写真に差し替え */}
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-gray-500">ウェストロッジの写真</span>
              </div>
            </div>
            <p className="text-gray-700 mb-2">落ち着いたインテリアで、ちょっとぜいたくなプライベートタイムをお過ごしください。</p>
            <p className="text-gray-700 mb-2">※バス・トイレ付 ベッド2つ（3人目の方からロフトに布団）</p>
            <p className="text-gray-700 font-bold">シングルユース：11,000円 / ツインユース：13,200円</p>
            <ul className="mt-4 text-gray-700 list-disc pl-5">
              <li>定員: 2〜4名</li>
              <li>設備: バス・トイレ付、冷暖房完備</li>
              <li>アメニティ: タオル、バスタオル、歯ブラシセット</li>
            </ul>
          </div>
          
          {/* 必要に応じて他の部屋タイプを追加 */}
          
          <h2 className="text-2xl font-serif font-bold mb-4 text-primary-dark">お食事について</h2>
          <p className="text-gray-700 mb-4">
            宿泊のお客様には、無農薬・有機栽培にこだわった食材を使用した朝食をご用意しております。
            自家製無添加パンと淹れたての珈琲で、爽やかな朝のひとときをお過ごしください。
          </p>
          
          <div className="mb-4">
            {/* 実際の食事写真に差し替え */}
            <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-gray-500">朝食の写真</span>
            </div>
          </div>
          
          <h2 className="text-2xl font-serif font-bold mb-4 text-primary-dark">ご予約・料金</h2>
          <p className="text-gray-700 mb-2">
            ご予約は電話またはメールにて承っております。
            料金は季節や部屋タイプによって異なりますので、詳しくはお問い合わせください。
          </p>
          <div className="bg-natural-light p-4 rounded-lg mb-4">
            <p className="font-bold mb-1">ご予約・お問い合わせ</p>
            <p>電話: 0X0-XXXX-XXXX</p>
            <p>メール: info@milk-co.jp</p>
          </div>
          
          <p className="text-sm text-gray-600">
            ※キャンセルポリシー: ご予約日の3日前までは無料、2日前は30%、前日は50%、当日は100%のキャンセル料が発生します。
          </p>
        </div>
        
        <div className="text-center">
          <Link to="/" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded transition-colors">
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LodgingPage;