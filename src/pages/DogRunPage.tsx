import React from 'react';
import { Link } from 'react-router-dom';

const DogRunPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-natural-light py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold mb-8 text-primary-dark text-center">
          ドッグラン
        </h1>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="mb-8">
            {/* 実際のドッグランの写真に差し替え */}
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-gray-500">ドッグランの写真</span>
            </div>
          </div>

          <p className="text-gray-700 mb-6">
            山荘ミルクのドッグランへようこそ。ワンちゃんを思いっきり遊ばせたり、
            食事やティータイムを楽しんだり、他のお客さまを気にすることなく、
            ワンちゃんと一緒にゆったり過ごすことができる空間です。
          </p>

          <h2 className="text-2xl font-serif font-bold mb-4 text-primary-dark">
            施設について
          </h2>
          <p className="text-gray-700 mb-4">
            当ドッグランは、ワンちゃんの大きさに合わせて3つのエリアに分かれています。
            それぞれのエリアは安全に配慮し、快適に過ごせるよう設計されています。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-natural-light p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2 text-primary-dark">
                小型犬用エリア
              </h3>
              <p className="text-gray-700">
                5kg以下のワンちゃん向け。安心して遊べる専用スペースです。
              </p>
            </div>
            <div className="bg-natural-light p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2 text-primary-dark">
                中型犬用エリア
              </h3>
              <p className="text-gray-700">
                5kg〜15kgのワンちゃん向け。広々としたスペースで思いきり走れます。
              </p>
            </div>
            <div className="bg-natural-light p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2 text-primary-dark">
                大型犬用エリア
              </h3>
              <p className="text-gray-700">
                15kg以上のワンちゃん向け。十分な広さを確保した専用エリアです。
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-serif font-bold mb-4 text-primary-dark">
            ワンちゃん専用レストラン
          </h2>
          <p className="text-gray-700 mb-6">
            ドッグラン併設のレストランでは、オーナー様もワンちゃんも一緒に食事をお楽しみいただけます。
            健康にこだわった自然食のお食事と、ワンちゃん用の特別メニューもご用意しています。
          </p>

          <div className="mb-8">
            {/* 実際のレストラン写真に差し替え */}
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-gray-500">
                ワンちゃん専用レストランの写真
              </span>
            </div>
          </div>

          <h2 className="text-2xl font-serif font-bold mb-4 text-primary-dark">
            利用案内
          </h2>
          <div className="bg-natural-light p-6 rounded-lg mb-6">
            <h3 className="text-lg font-bold mb-2 text-primary-dark">
              営業時間
            </h3>
            <p className="text-gray-700 mb-4">
              3月1日〜12月20日の営業時間内でご利用いただけます。
            </p>
            <p className="text-gray-700 mb-2 font-bold">
              通常営業時間：11:00〜15:00
            </p>
            <p className="text-sm text-gray-600 mb-4">
              ※定休日（月曜日・火曜日）も雨天以外はご利用可能ですが、事前にご確認ください。
              <br />
              ※6月（薔薇の季節）は月曜日・火曜日も営業しています。
            </p>

            <h3 className="text-lg font-bold mb-2 text-primary-dark">
              利用料金
            </h3>
            <p className="text-gray-700">1時間：800円 / 終日：1,500円</p>
            <p className="text-sm text-gray-600">
              ※レストランのご利用でドッグラン1時間無料
            </p>
          </div>

          <h2 className="text-2xl font-serif font-bold mb-4 text-primary-dark">
            ご利用規約
          </h2>
          <ul className="text-gray-700 list-disc pl-5 mb-6">
            <li>
              狂犬病予防接種、各種ワクチン接種済みの犬のみご利用いただけます。
            </li>
            <li>ノミ・ダニ等の寄生虫の予防をしていることが条件となります。</li>
            <li>発情期の犬はご遠慮ください。</li>
            <li>攻撃的な性格の犬は入場をお断りすることがあります。</li>
            <li>犬の排泄物は飼い主様が責任を持って処理してください。</li>
            <li>
              ドッグラン内での事故やトラブルについては、当施設では責任を負いかねます。
            </li>
          </ul>

          <p className="text-gray-700">
            その他、詳細についてはお電話またはメールにてお問い合わせください。
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

export default DogRunPage;
