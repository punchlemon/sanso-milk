import React from 'react';
import './AccessPage.css';

const AccessPage: React.FC = () => {
  return (
    <div className="access-page">
      <div className="page-hero">
        <h1>アクセス情報</h1>
        <p>山の民宿「木香」へのご案内</p>
      </div>

      <section className="location-section">
        <div className="container">
          <div className="map-card">
            <div className="map-container">
              {/* 実際の地図埋め込みに差し替え */}
              <div className="placeholder-map">Googleマップ表示エリア</div>
            </div>
            <div className="map-info">
              <h2>山の民宿「木香」</h2>
              <p className="address">
                〒XXX-XXXX<br />
                〇〇県〇〇市〇〇町山路123-45
              </p>
              <div className="contact-info">
                <p><strong>電話：</strong> 0X0-XXXX-XXXX</p>
                <p><strong>メール：</strong> info@yamaminshuku.jp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="transportation-section">
        <div className="container">
          <h2 className="section-title">交通手段</h2>
          <div className="transportation-methods">
            <div className="transport-card">
              <div className="transport-icon">🚗</div>
              <h3>お車でお越しの場合</h3>
              <ul>
                <li>〇〇自動車道「〇〇IC」から約40分</li>
                <li>〇〇自動車道「××IC」から約50分</li>
                <li>※カーナビには「山の民宿 木香」とご入力ください</li>
                <li>※最後の5kmは山道となります。冬季は積雪の可能性がありますので、チェーンのご準備をお勧めします</li>
              </ul>
              <div className="parking-info">
                <p><strong>駐車場：</strong> 15台（無料）</p>
              </div>
            </div>

            <div className="transport-card">
              <div className="transport-icon">🚅</div>
              <h3>電車・バスでお越しの場合</h3>
              <ul>
                <li>JR〇〇線「〇〇駅」から路線バスで約30分、「〇〇バス停」下車後徒歩15分</li>
                <li>または「〇〇駅」からタクシーで約20分</li>
                <li>※事前にご連絡いただければ、〇〇駅または〇〇バス停まで送迎いたします（要予約）</li>
              </ul>
              <div className="pickup-info">
                <p><strong>送迎サービス：</strong> 15:00〜17:00（要予約）</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="route-section">
        <div className="container">
          <h2 className="section-title">周辺地図・アクセスマップ</h2>
          <div className="route-info">
            <div className="route-map">
              {/* 実際のアクセスマップ画像に差し替え */}
              <div className="placeholder-image">アクセス詳細マップ</div>
            </div>
            <div className="route-text">
              <h3>ご案内</h3>
              <p>
                当館は山間部に位置しているため、スマートフォンの地図アプリでは正確な位置が表示されない場合がございます。
                上記の地図を参考に、目印となる「〇〇神社」を過ぎて約500m先の山道を登った場所にございます。
              </p>
              <p>
                初めてお越しのお客様は、事前にお電話でご連絡いただければ詳しくご案内させていただきます。
                また、天候によっては道路状況が変わることもございますので、お越しの際はお気をつけてお越しください。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="area-info-section">
        <div className="container">
          <h2 className="section-title">周辺観光情報</h2>
          <div className="area-info">
            <div className="tourist-spots">
              <h3>観光スポット</h3>
              <ul className="spot-list">
                <li>
                  <span className="spot-name">〇〇滝</span>
                  <span className="spot-distance">車で15分</span>
                </li>
                <li>
                  <span className="spot-name">△△温泉</span>
                  <span className="spot-distance">車で20分</span>
                </li>
                <li>
                  <span className="spot-name">××高原</span>
                  <span className="spot-distance">車で30分</span>
                </li>
                <li>
                  <span className="spot-name">□□神社</span>
                  <span className="spot-distance">徒歩30分</span>
                </li>
                <li>
                  <span className="spot-name">◇◇美術館</span>
                  <span className="spot-distance">車で40分</span>
                </li>
              </ul>
            </div>
            
            <div className="area-images">
              {/* 実際の写真に差し替え */}
              <div className="area-image-item">
                <div className="placeholder-image mini">滝の写真</div>
                <p>〇〇滝</p>
              </div>
              <div className="area-image-item">
                <div className="placeholder-image mini">温泉の写真</div>
                <p>△△温泉</p>
              </div>
              <div className="area-image-item">
                <div className="placeholder-image mini">高原の写真</div>
                <p>××高原</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="note-section">
        <div className="container">
          <div className="note-card">
            <h3>ご宿泊のお客様へのご案内</h3>
            <div className="note-content">
              <p>
                <strong>チェックイン：</strong> 15:00〜18:00<br />
                <strong>チェックアウト：</strong> 10:00
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

      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">お問い合わせ</h2>
          <div className="contact-content">
            <div className="contact-text">
              <p>
                ご不明な点やご質問がございましたら、お電話またはメールにてお気軽にお問い合わせください。
                送迎のご予約や特別なご要望なども承っております。
              </p>
            </div>
            <div className="contact-methods">
              <div className="contact-method">
                <h3>お電話</h3>
                <p>0X0-XXXX-XXXX<br />(受付時間：9:00〜18:00)</p>
              </div>
              <div className="contact-method">
                <h3>メール</h3>
                <p>info@yamaminshuku.jp<br />(24時間受付)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessPage;