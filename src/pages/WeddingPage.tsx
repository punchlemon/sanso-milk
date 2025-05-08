import React from 'react';

const WeddingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <div
        className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url("/images/wedding-hero.jpg")' }}
      >
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
            山の結婚式
          </h1>
          <p className="text-lg md:text-xl">
            自然に囲まれた、アットホームな山里のウェディング
          </p>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* イントロセクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-10 text-primary-dark text-center">
            雄大な自然が彩る特別な一日
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="mb-4 text-gray-700">
                山の民宿「木香」では、四季折々の美しい自然を背景に、
                お二人らしい温かな結婚式を実現することができます。
                壮大な山々に囲まれた静かな環境で、大切な方々に見守られながら、
                心に残る思い出に残るウェディングを。
              </p>
              <p className="text-gray-700">
                格式ばった儀式ではなく、自然と調和し、お二人らしさを大切にした
                アットホームな雰囲気で、ゲストの皆様とともに特別な時間を過ごしていただけます。
                手作りの料理でのおもてなし、自然の素材を活かした装飾など、
                山里ならではのあたたかさが溢れる結婚式を一緒に創り上げませんか。
              </p>
            </div>
            <div className="md:w-1/2">
              {/* 実際の結婚式の写真に差し替え */}
              <div className="bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-gray-500">山の結婚式のイメージ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 四季セクション */}
      <section className="py-16 bg-natural-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-10 text-primary-dark text-center">
            四季折々の山の結婚式
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 春 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5 h-48 md:h-auto bg-gray-200 flex items-center justify-center">
                {/* 実際の春の写真に差し替え */}
                <span className="text-gray-500">春の風景</span>
              </div>
              <div className="md:w-3/5 p-6">
                <h3 className="text-xl font-bold mb-2 text-primary-dark">
                  春の結婚式
                </h3>
                <p className="mb-4 text-gray-700">
                  新緑と山桜が美しい春。山菜や春野菜をふんだんに使った料理と、
                  山桜をあしらった装飾で、新たな門出にふさわしい清々しい挙式が叶います。
                </p>
                <p className="text-accent font-medium">3月中旬〜5月下旬</p>
              </div>
            </div>

            {/* 夏 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5 h-48 md:h-auto bg-gray-200 flex items-center justify-center">
                {/* 実際の夏の写真に差し替え */}
                <span className="text-gray-500">夏の風景</span>
              </div>
              <div className="md:w-3/5 p-6">
                <h3 className="text-xl font-bold mb-2 text-primary-dark">
                  夏の結婚式
                </h3>
                <p className="mb-4 text-gray-700">
                  緑深い森と澄んだ青空が広がる夏。山の涼しい風を感じながらの
                  屋外挙式や、夜には星空の下で幻想的な披露宴も可能です。
                </p>
                <p className="text-accent font-medium">6月上旬〜9月中旬</p>
              </div>
            </div>

            {/* 秋 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5 h-48 md:h-auto bg-gray-200 flex items-center justify-center">
                {/* 実際の秋の写真に差し替え */}
                <span className="text-gray-500">秋の風景</span>
              </div>
              <div className="md:w-3/5 p-6">
                <h3 className="text-xl font-bold mb-2 text-primary-dark">
                  秋の結婚式
                </h3>
                <p className="mb-4 text-gray-700">
                  錦秋の山々が色鮮やかに彩る秋。紅葉をバックにした写真撮影や、
                  きのこや栗など秋の味覚を堪能できる披露宴が人気です。
                </p>
                <p className="text-accent font-medium">9月下旬〜11月中旬</p>
              </div>
            </div>

            {/* 冬 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5 h-48 md:h-auto bg-gray-200 flex items-center justify-center">
                {/* 実際の冬の写真に差し替え */}
                <span className="text-gray-500">冬の風景</span>
              </div>
              <div className="md:w-3/5 p-6">
                <h3 className="text-xl font-bold mb-2 text-primary-dark">
                  冬の結婚式
                </h3>
                <p className="mb-4 text-gray-700">
                  静かな雪景色に包まれる冬。薪ストーブの温もりに包まれながらの
                  挙式は、特別な親密さを感じられる冬だけの魅力です。
                </p>
                <p className="text-accent font-medium">12月上旬〜3月上旬</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* プラン紹介セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-10 text-primary-dark text-center">
            プラン紹介
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-natural-light p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-primary-dark">
                一日貸切プラン
              </h3>
              <div className="text-lg font-bold mb-4 text-accent-dark">
                ¥580,000〜（20名様）
              </div>
              <div className="mb-4">
                <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-700">
                  <li>民宿全館貸切</li>
                  <li>挙式 + 披露宴</li>
                  <li>料理・ケーキ</li>
                  <li>衣装1着（和装/洋装）</li>
                  <li>写真撮影</li>
                  <li>宿泊（新郎新婦）</li>
                </ul>
              </div>
              <p className="text-gray-700">
                山の自然を独り占めして、ゆったりとした時間の流れの中で
                お二人らしい特別な一日をお過ごしいただけます。
              </p>
            </div>

            <div className="bg-natural-light p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-primary-dark">
                食事会ウェディング
              </h3>
              <div className="text-lg font-bold mb-4 text-accent-dark">
                ¥380,000〜（15名様）
              </div>
              <div className="mb-4">
                <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-700">
                  <li>お食事会形式披露宴</li>
                  <li>料理・ケーキ</li>
                  <li>簡易装飾</li>
                  <li>写真撮影</li>
                </ul>
              </div>
              <p className="text-gray-700">
                挙式は別の場所で行い、ご家族や親しい方々との食事会を重視した
                アットホームなプラン。山の恵みを活かした料理でおもてなしします。
              </p>
            </div>

            <div className="bg-natural-light p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-primary-dark">
                フォトウェディング
              </h3>
              <div className="text-lg font-bold mb-4 text-accent-dark">
                ¥180,000〜（カップル）
              </div>
              <div className="mb-4">
                <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-700">
                  <li>衣装1着（和装/洋装）</li>
                  <li>ヘアメイク</li>
                  <li>ロケーション撮影</li>
                  <li>写真データ・アルバム</li>
                  <li>宿泊1泊（2食付）</li>
                </ul>
              </div>
              <p className="text-gray-700">
                四季折々の山の風景を背景に、思い出に残る写真撮影を。
                撮影後は当館でのんびり過ごす1泊付きのプランです。
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-600">
            <p className="mb-1">
              ※表示価格はすべて税込です。人数の追加や季節によって料金が変動します。
            </p>
            <p>
              ※各プランの詳細は、お問い合わせください。お二人のご要望に合わせてカスタマイズも可能です。
            </p>
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-16 bg-natural-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-10 text-primary-dark text-center">
            ウェディングギャラリー
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* 実際の写真に差し替え */}
            <div className="bg-gray-200 h-40 md:h-64 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-gray-500">写真1</span>
            </div>
            <div className="bg-gray-200 h-40 md:h-64 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-gray-500">写真2</span>
            </div>
            <div className="bg-gray-200 h-40 md:h-64 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-gray-500">写真3</span>
            </div>
            <div className="bg-gray-200 h-40 md:h-64 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-gray-500">写真4</span>
            </div>
            <div className="bg-gray-200 h-40 md:h-64 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-gray-500">写真5</span>
            </div>
            <div className="bg-gray-200 h-40 md:h-64 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-gray-500">写真6</span>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-10 text-primary-dark text-center">
            よくあるご質問
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-bold mb-2 text-primary-dark">
                Q. どれくらい前から予約が必要ですか？
              </h3>
              <p className="text-gray-700">
                A.
                人気の春と秋シーズンは1年前からのご予約をおすすめしております。冬と夏は半年前からのご予約で対応可能な場合が多いです。
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-bold mb-2 text-primary-dark">
                Q. 宿泊施設はありますか？
              </h3>
              <p className="text-gray-700">
                A.
                はい、当館に最大20名様までご宿泊いただけます。さらに多くのゲスト様には、近隣の宿をご紹介することも可能です。
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-bold mb-2 text-primary-dark">
                Q. 雨天時の対応はどうなりますか？
              </h3>
              <p className="text-gray-700">
                A.
                屋内での挙式・披露宴会場をご用意しております。薪ストーブの温かな灯りの中での挙式も素敵な思い出になります。
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-bold mb-2 text-primary-dark">
                Q. ドレスやタキシードはレンタルできますか？
              </h3>
              <p className="text-gray-700">
                A.
                基本的な和装・洋装のレンタルは可能です。提携している衣装店からの取り寄せも承ります。
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-bold mb-2 text-primary-dark">
                Q. アクセスが不便な場合、ゲストの送迎はできますか？
              </h3>
              <p className="text-gray-700">
                A.
                最寄り駅からの送迎バスの手配が可能です（別料金）。詳細はお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">
            お問い合わせ・見学予約
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-center mb-8">
              山の民宿「木香」での結婚式に興味をお持ちいただき、ありがとうございます。
              詳細のお問い合わせや見学のご予約は、下記の方法でお気軽にご連絡ください。
              専門のウェディングプランナーがお二人のご希望をお伺いします。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3">
                  お電話でのお問い合わせ
                </h3>
                <p className="text-lg">0X0-XXXX-XXXX</p>
                <p className="text-sm">(受付時間：10:00〜18:00)</p>
              </div>

              <div className="bg-primary p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3">
                  メールでのお問い合わせ
                </h3>
                <p className="text-lg">wedding@yamaminshuku.jp</p>
                <p className="text-sm">(24時間受付)</p>
              </div>

              <div className="bg-primary p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3">見学予約</h3>
                <p>
                  実際の会場や周囲の景色をご覧いただける見学会を定期的に開催しております。日程はお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingPage;
