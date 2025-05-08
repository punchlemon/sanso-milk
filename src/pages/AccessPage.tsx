import React from 'react';

const AccessPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <div
        className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url("/images/access-hero.jpg")' }}
      >
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
            アクセス情報
          </h1>
          <p className="text-lg md:text-xl">山の民宿「木香」へのご案内</p>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* 地図セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 h-64 md:h-auto bg-gray-200 flex items-center justify-center">
                {/* 実際の地図埋め込みに差し替え */}
                <span className="text-gray-500">Googleマップ表示エリア</span>
              </div>
              <div className="md:w-1/3 p-6 bg-natural-light">
                <h2 className="text-2xl font-bold mb-3 text-primary-dark">
                  山の民宿「木香」
                </h2>
                <p className="text-gray-700 mb-4">
                  〒XXX-XXXX
                  <br />
                  〇〇県〇〇市〇〇町山路123-45
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-bold">電話：</span> 0X0-XXXX-XXXX
                  </p>
                  <p className="text-gray-700">
                    <span className="font-bold">メール：</span>{' '}
                    info@yamaminshuku.jp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 交通手段セクション */}
      <section className="py-16 bg-natural-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-10 text-primary-dark text-center">
            交通手段
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-accent">🚗</div>
              <h3 className="text-xl font-bold mb-4 text-primary-dark">
                お車でお越しの場合
              </h3>
              <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                <li>〇〇自動車道「〇〇IC」から約40分</li>
                <li>〇〇自動車道「××IC」から約50分</li>
                <li>※カーナビには「山の民宿 木香」とご入力ください</li>
                <li>
                  ※最後の5kmは山道となります。冬季は積雪の可能性がありますので、チェーンのご準備をお勧めします
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-gray-700">
                  <span className="font-bold">駐車場：</span> 15台（無料）
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-accent">🚅</div>
              <h3 className="text-xl font-bold mb-4 text-primary-dark">
                電車・バスでお越しの場合
              </h3>
              <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                <li>
                  JR〇〇線「〇〇駅」から路線バスで約30分、「〇〇バス停」下車後徒歩15分
                </li>
                <li>または「〇〇駅」からタクシーで約20分</li>
                <li>
                  ※事前にご連絡いただければ、〇〇駅または〇〇バス停まで送迎いたします（要予約）
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-gray-700">
                  <span className="font-bold">送迎サービス：</span>{' '}
                  15:00〜17:00（要予約）
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 詳細マップセクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-10 text-primary-dark text-center">
            周辺地図・アクセスマップ
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              {/* 実際のアクセスマップ画像に差し替え */}
              <div className="bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-gray-500">アクセス詳細マップ</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold mb-4 text-primary-dark">
                ご案内
              </h3>
              <p className="mb-4 text-gray-700">
                当館は山間部に位置しているため、スマートフォンの地図アプリでは正確な位置が表示されない場合がございます。
                上記の地図を参考に、目印となる「〇〇神社」を過ぎて約500m先の山道を登った場所にございます。
              </p>
              <p className="text-gray-700">
                初めてお越しのお客様は、事前にお電話でご連絡いただければ詳しくご案内させていただきます。
                また、天候によっては道路状況が変わることもございますので、お越しの際はお気をつけてお越しください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 周辺観光情報セクション */}
      <section className="py-16 bg-natural-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-10 text-primary-dark text-center">
            周辺観光情報
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4 text-primary-dark">
                観光スポット
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">〇〇滝</span>
                  <span className="text-sm bg-natural px-2 py-1 rounded">
                    車で15分
                  </span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">△△温泉</span>
                  <span className="text-sm bg-natural px-2 py-1 rounded">
                    車で20分
                  </span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">××高原</span>
                  <span className="text-sm bg-natural px-2 py-1 rounded">
                    車で30分
                  </span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">□□神社</span>
                  <span className="text-sm bg-natural px-2 py-1 rounded">
                    徒歩30分
                  </span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">◇◇美術館</span>
                  <span className="text-sm bg-natural px-2 py-1 rounded">
                    車で40分
                  </span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center shadow-md mb-2">
                    <span className="text-gray-500 text-sm">滝の写真</span>
                  </div>
                  <p className="text-gray-700 text-sm">〇〇滝</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center shadow-md mb-2">
                    <span className="text-gray-500 text-sm">温泉の写真</span>
                  </div>
                  <p className="text-gray-700 text-sm">△△温泉</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center shadow-md mb-2">
                    <span className="text-gray-500 text-sm">高原の写真</span>
                  </div>
                  <p className="text-gray-700 text-sm">××高原</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 宿泊案内セクション */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary-light bg-opacity-20 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-primary-dark">
              ご宿泊のお客様へのご案内
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-bold">チェックイン：</span> 15:00〜18:00
                <br />
                <span className="font-bold">チェックアウト：</span> 10:00
              </p>
              <p>
                チェックインが18:00を過ぎる場合は、必ず事前にご連絡ください。
                また、天候や道路状況により到着が遅れる場合も、お電話にてお知らせいただければ幸いです。
              </p>
              <p>
                最寄りのコンビニエンスストアやスーパーマーケットは車で約15分の場所にありますので、
                必要なものは事前にお買い求めいただくことをおすすめします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="py-16 bg-natural-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-6 text-primary-dark text-center">
            お問い合わせ
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-gray-700">
                ご不明な点やご質問がございましたら、お電話またはメールにてお気軽にお問い合わせください。
                送迎のご予約や特別なご要望なども承っております。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-3 text-primary-dark">
                  お電話
                </h3>
                <p className="text-lg font-semibold mb-1">0X0-XXXX-XXXX</p>
                <p className="text-gray-600 text-sm">(受付時間：9:00〜18:00)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-3 text-primary-dark">
                  メール
                </h3>
                <p className="text-lg font-semibold mb-1">
                  info@yamaminshuku.jp
                </p>
                <p className="text-gray-600 text-sm">(24時間受付)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessPage;
