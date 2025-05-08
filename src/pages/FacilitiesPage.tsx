import React from 'react';
import './FacilitiesPage.css';

const FacilitiesPage: React.FC = () => {
  return (
    <div className="facilities-page">
      <div className="page-hero">
        <h1>施設案内</h1>
        <p>山の民宿「木香」が提供する快適な空間と体験</p>
      </div>

      <section className="room-section">
        <div className="container">
          <h2 className="section-title">お部屋</h2>
          <div className="rooms-intro">
            <p>
              当館のお部屋は、すべて山の景色が眺められる位置にあり、自然素材をふんだんに使った
              心地よい空間となっております。木のぬくもりと山の静けさに包まれながら、
              ゆったりとしたひとときをお過ごしください。
            </p>
          </div>
          
          <div className="room-types">
            <div className="room-card">
              <div className="room-image">
                {/* 実際の和室の画像に差し替え */}
                <div className="placeholder-image">和室イメージ</div>
              </div>
              <div className="room-info">
                <h3>和室</h3>
                <p className="room-capacity">定員: 2〜4名様</p>
                <p className="room-description">
                  畳の香りが心地よい、くつろぎの空間です。窓からは美しい山々の景色が一望でき、
                  四季折々の自然を感じることができます。
                </p>
                <ul className="room-amenities">
                  <li>冷暖房完備</li>
                  <li>浴衣</li>
                  <li>タオル・バスタオル</li>
                  <li>歯ブラシセット</li>
                </ul>
                <p className="room-price">
                  料金: お一人様 ¥12,000〜 (1泊2食付き)
                </p>
              </div>
            </div>

            <div className="room-card">
              <div className="room-image">
                {/* 実際の洋室の画像に差し替え */}
                <div className="placeholder-image">洋室イメージ</div>
              </div>
              <div className="room-info">
                <h3>洋室</h3>
                <p className="room-capacity">定員: 2名様</p>
                <p className="room-description">
                  木の温もりを感じる洋室は、シックな色調でまとめられた落ち着きのある空間です。
                  快適なベッドで、山の静けさの中ぐっすりとお休みいただけます。
                </p>
                <ul className="room-amenities">
                  <li>冷暖房完備</li>
                  <li>浴衣</li>
                  <li>タオル・バスタオル</li>
                  <li>歯ブラシセット</li>
                </ul>
                <p className="room-price">
                  料金: お一人様 ¥13,000〜 (1泊2食付き)
                </p>
              </div>
            </div>

            <div className="room-card">
              <div className="room-image">
                {/* 実際の特別室の画像に差し替え */}
                <div className="placeholder-image">特別室イメージ</div>
              </div>
              <div className="room-info">
                <h3>特別室「山帰来」</h3>
                <p className="room-capacity">定員: 2〜5名様</p>
                <p className="room-description">
                  当館最大の贅沢をご堪能いただける特別室。内風呂付きで、専用デッキからは山々の
                  パノラマビューをお楽しみいただけます。大切な記念日や特別な旅に最適です。
                </p>
                <ul className="room-amenities">
                  <li>内風呂付き</li>
                  <li>専用デッキ</li>
                  <li>冷暖房完備</li>
                  <li>高級浴衣</li>
                  <li>上質なアメニティ</li>
                </ul>
                <p className="room-price">
                  料金: お一人様 ¥18,000〜 (1泊2食付き)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dining-section">
        <div className="container">
          <h2 className="section-title">お食事</h2>
          <div className="dining-content">
            <div className="dining-text">
              <p>
                当館のお食事は、近隣の山や畑で採れた新鮮な食材を使用した「山里の手料理」をご提供しています。
                季節ごとに変わる旬の味わいと、代々受け継がれてきた伝統のレシピをぜひご堪能ください。
              </p>
              <p>
                朝食は、炊きたてのご飯と山の幸を活かした品々を。
                夕食は、囲炉裏を囲んで、地元の食材を使った郷土料理をお楽しみいただけます。
              </p>
            </div>
            <div className="dining-image">
              {/* 実際の料理の画像に差し替え */}
              <div className="placeholder-image">お食事イメージ</div>
            </div>
          </div>
          
          <div className="meal-types">
            <div className="meal-card">
              <h3>朝食</h3>
              <p>
                炊きたての山里米、季節の野菜の小鉢、山菜の天ぷら、自家製のぬか漬け、
                焼き魚など、シンプルながら体に優しい朝食をご用意しています。
              </p>
            </div>
            <div className="meal-card">
              <h3>夕食</h3>
              <p>
                地元の山菜や川魚、きのこなどを使った郷土料理の数々。
                薪ストーブでじっくり煮込んだ煮物や、囲炉裏で焼く山の幸の炭火焼きなど、
                素材の味を活かした料理をお楽しみください。
              </p>
            </div>
          </div>
          
          <div className="cuisine-note">
            <p>
              ※アレルギーや苦手な食材がございましたら、事前にお知らせください。
              できる限り対応させていただきます。
            </p>
          </div>
        </div>
      </section>

      <section className="bath-section">
        <div className="container">
          <h2 className="section-title">お風呂</h2>
          <div className="bath-content">
            <div className="bath-image">
              {/* 実際のお風呂の画像に差し替え */}
              <div className="placeholder-image">温泉イメージ</div>
            </div>
            <div className="bath-text">
              <p>
                当館の温泉は、山深くから湧き出る天然かけ流しの湯です。
                開放的な露天風呂からは四季折々の山の風景を眺めながら、
                日頃の疲れを癒していただけます。
              </p>
              <p>
                泉質は単純温泉で、肌にやさしくお子様からご年配の方まで安心してご利用いただけます。
                夜は満天の星空の下で、朝は清々しい山の空気とともに温泉をお楽しみください。
              </p>
              <div className="bath-hours">
                <h4>営業時間</h4>
                <p>6:00〜9:00、15:00〜23:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="activities-section">
        <div className="container">
          <h2 className="section-title">体験活動</h2>
          <div className="activities-intro">
            <p>
              滞在中に山里での暮らしや自然を体験できる様々なアクティビティをご用意しています。
              日常では味わえない特別な思い出作りに、ぜひご参加ください。
            </p>
          </div>
          
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-image">
                {/* 実際の画像に差し替え */}
                <div className="placeholder-image mini">山菜採り</div>
              </div>
              <h3>山菜採り体験</h3>
              <p>
                春には地元ガイドと一緒に山菜採りへ。採った山菜は夕食のお膳で召し上がれます。
              </p>
            </div>
            
            <div className="activity-card">
              <div className="activity-image">
                {/* 実際の画像に差し替え */}
                <div className="placeholder-image mini">薪割り</div>
              </div>
              <h3>薪割り体験</h3>
              <p>
                薪ストーブの燃料となる薪を割る体験ができます。自分で割った薪で沸かすお湯の温かさは格別です。
              </p>
            </div>
            
            <div className="activity-card">
              <div className="activity-image">
                {/* 実際の画像に差し替え */}
                <div className="placeholder-image mini">陶芸</div>
              </div>
              <h3>陶芸体験</h3>
              <p>
                地元の粘土を使って、オリジナルの器作り。完成品は後日お送りいたします。
              </p>
            </div>
            
            <div className="activity-card">
              <div className="activity-image">
                {/* 実際の画像に差し替え */}
                <div className="placeholder-image mini">星空観察</div>
              </div>
              <h3>星空観察</h3>
              <p>
                晴れた夜には、光害の少ない山の中から満天の星空を観察できます。
              </p>
            </div>
          </div>
          
          <div className="activities-note">
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