import React from 'react';

const FacilitiesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <div
        className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url("/images/facilities-hero.jpg")' }}
      >
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
            施設案内
          </h1>
          <p className="text-lg md:text-xl">
            山の民宿「木香」が提供する快適な空間と体験
          </p>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* お部屋セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-8 text-primary-dark text-center">
            お部屋
          </h2>
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="text-gray-700">
              当館のお部屋は、すべて山の景色が眺められる位置にあり、自然素材をふんだんに使った
              心地よい空間となっております。木のぬくもりと山の静けさに包まれながら、
              ゆったりとしたひとときをお過ごしください。
            </p>
          </div>

          <div className="space-y-12">
            {/* 和室 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3 h-64 md:h-auto bg-gray-200 flex items-center justify-center">
                {/* 実際の和室の画像に差し替え */}
                <span className="text-gray-500">和室イメージ</span>
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl font-bold mb-2 text-primary-dark">
                  和室
                </h3>
                <p className="text-accent mb-3 font-medium">定員: 2〜4名様</p>
                <p className="mb-4 text-gray-700">
                  畳の香りが心地よい、くつろぎの空間です。窓からは美しい山々の景色が一望でき、
                  四季折々の自然を感じることができます。
                </p>
                <div className="mb-4">
                  <h4 className="font-bold mb-2 text-gray-700">アメニティ</h4>
                  <ul className="grid grid-cols-2 gap-2 text-gray-700">
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      冷暖房完備
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      浴衣
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      タオル・バスタオル
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      歯ブラシセット
                    </li>
                  </ul>
                </div>
                <p className="text-lg font-bold text-accent-dark">
                  料金: お一人様 ¥12,000〜 (1泊2食付き)
                </p>
              </div>
            </div>

            {/* 洋室 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3 h-64 md:h-auto bg-gray-200 flex items-center justify-center">
                {/* 実際の洋室の画像に差し替え */}
                <span className="text-gray-500">洋室イメージ</span>
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl font-bold mb-2 text-primary-dark">
                  洋室
                </h3>
                <p className="text-accent mb-3 font-medium">定員: 2名様</p>
                <p className="mb-4 text-gray-700">
                  木の温もりを感じる洋室は、シックな色調でまとめられた落ち着きのある空間です。
                  快適なベッドで、山の静けさの中ぐっすりとお休みいただけます。
                </p>
                <div className="mb-4">
                  <h4 className="font-bold mb-2 text-gray-700">アメニティ</h4>
                  <ul className="grid grid-cols-2 gap-2 text-gray-700">
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      冷暖房完備
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      浴衣
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      タオル・バスタオル
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      歯ブラシセット
                    </li>
                  </ul>
                </div>
                <p className="text-lg font-bold text-accent-dark">
                  料金: お一人様 ¥13,000〜 (1泊2食付き)
                </p>
              </div>
            </div>

            {/* 特別室 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3 h-64 md:h-auto bg-gray-200 flex items-center justify-center">
                {/* 実際の特別室の画像に差し替え */}
                <span className="text-gray-500">特別室イメージ</span>
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl font-bold mb-2 text-primary-dark">
                  特別室「山帰来」
                </h3>
                <p className="text-accent mb-3 font-medium">定員: 2〜5名様</p>
                <p className="mb-4 text-gray-700">
                  当館最大の贅沢をご堪能いただける特別室。内風呂付きで、専用デッキからは山々の
                  パノラマビューをお楽しみいただけます。大切な記念日や特別な旅に最適です。
                </p>
                <div className="mb-4">
                  <h4 className="font-bold mb-2 text-gray-700">アメニティ</h4>
                  <ul className="grid grid-cols-2 gap-2 text-gray-700">
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      内風呂付き
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      専用デッキ
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      冷暖房完備
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      高級浴衣
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      上質なアメニティ
                    </li>
                  </ul>
                </div>
                <p className="text-lg font-bold text-accent-dark">
                  料金: お一人様 ¥18,000〜 (1泊2食付き)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お食事セクション */}
      <section className="py-16 bg-natural-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-10 text-primary-dark text-center">
            お食事
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="md:w-1/2">
              <p className="mb-4 text-gray-700">
                当館のお食事は、近隣の山や畑で採れた新鮮な食材を使用した「山里の手料理」をご提供しています。
                季節ごとに変わる旬の味わいと、代々受け継がれてきた伝統のレシピをぜひご堪能ください。
              </p>
              <p className="text-gray-700">
                朝食は、炊きたてのご飯と山の幸を活かした品々を。
                夕食は、囲炉裏を囲んで、地元の食材を使った郷土料理をお楽しみいただけます。
              </p>
            </div>
            <div className="md:w-1/2">
              {/* 実際の料理の画像に差し替え */}
              <div className="bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-gray-500">お食事イメージ</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary-dark">朝食</h3>
              <p className="text-gray-700">
                炊きたての山里米、季節の野菜の小鉢、山菜の天ぷら、自家製のぬか漬け、
                焼き魚など、シンプルながら体に優しい朝食をご用意しています。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary-dark">夕食</h3>
              <p className="text-gray-700">
                地元の山菜や川魚、きのこなどを使った郷土料理の数々。
                薪ストーブでじっくり煮込んだ煮物や、囲炉裏で焼く山の幸の炭火焼きなど、
                素材の味を活かした料理をお楽しみください。
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-yellow-700 max-w-3xl mx-auto">
            <p>
              ※アレルギーや苦手な食材がございましたら、事前にお知らせください。
              できる限り対応させていただきます。
            </p>
          </div>
        </div>
      </section>

      {/* お風呂セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-10 text-primary-dark text-center">
            お風呂
          </h2>
          <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              {/* 実際のお風呂の画像に差し替え */}
              <div className="bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-gray-500">温泉イメージ</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="mb-4 text-gray-700">
                当館の温泉は、山深くから湧き出る天然かけ流しの湯です。
                開放的な露天風呂からは四季折々の山の風景を眺めながら、
                日頃の疲れを癒していただけます。
              </p>
              <p className="mb-6 text-gray-700">
                泉質は単純温泉で、肌にやさしくお子様からご年配の方まで安心してご利用いただけます。
                夜は満天の星空の下で、朝は清々しい山の空気とともに温泉をお楽しみください。
              </p>
              <div className="bg-natural p-4 rounded-md inline-block">
                <h4 className="font-bold mb-1 text-primary-dark">営業時間</h4>
                <p className="text-gray-700">6:00〜9:00、15:00〜23:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 体験活動セクション */}
      <section className="py-16 bg-natural-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-8 text-primary-dark text-center">
            体験活動
          </h2>
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="text-gray-700">
              滞在中に山里での暮らしや自然を体験できる様々なアクティビティをご用意しています。
              日常では味わえない特別な思い出作りに、ぜひご参加ください。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                {/* 実際の画像に差し替え */}
                <span className="text-gray-500">山菜採り</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-primary-dark">
                  山菜採り体験
                </h3>
                <p className="text-gray-700 text-sm">
                  春には地元ガイドと一緒に山菜採りへ。採った山菜は夕食のお膳で召し上がれます。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                {/* 実際の画像に差し替え */}
                <span className="text-gray-500">薪割り</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-primary-dark">
                  薪割り体験
                </h3>
                <p className="text-gray-700 text-sm">
                  薪ストーブの燃料となる薪を割る体験ができます。自分で割った薪で沸かすお湯の温かさは格別です。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                {/* 実際の画像に差し替え */}
                <span className="text-gray-500">陶芸</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-primary-dark">
                  陶芸体験
                </h3>
                <p className="text-gray-700 text-sm">
                  地元の粘土を使って、オリジナルの器作り。完成品は後日お送りいたします。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                {/* 実際の画像に差し替え */}
                <span className="text-gray-500">星空観察</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-primary-dark">
                  星空観察
                </h3>
                <p className="text-gray-700 text-sm">
                  晴れた夜には、光害の少ない山の中から満天の星空を観察できます。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-yellow-700 max-w-3xl mx-auto">
            <p>
              ※各体験は季節や天候によって実施できない場合がございます。詳細は事前にお問い合わせください。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilitiesPage;
