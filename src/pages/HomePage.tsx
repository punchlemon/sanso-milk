import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>山の民宿 木香</h1>
          <p>大自然の中で、心安らぐひとときを</p>
          <Link to="/about" className="hero-button">民宿について</Link>
        </div>
      </div>

      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>自然と調和する山の民宿</h2>
              <p>
                山の民宿「木香」へようこそ。四季折々の美しい自然に囲まれた当館は、
                都会の喧騒から離れて、心身ともにリフレッシュしていただける特別な空間です。
              </p>
              <p>
                薪ストーブの温かな灯りと、山の幸を活かした手作り料理でおもてなし。
                静寂に包まれた山の風景と共に、ゆっくりと流れる時間をお楽しみください。
              </p>
              <Link to="/about" className="button">もっと詳しく</Link>
            </div>
            <div className="intro-image">
              {/* 実際の民宿の外観写真に差し替え */}
              <div className="placeholder-image">民宿外観</div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">木香の魅力</h2>
          <div className="features">
            <div className="feature-card">
              <div className="feature-icon">🏔️</div>
              <h3>雄大な自然</h3>
              <p>四季折々の美しい山の景色を窓から一望。森林浴効果で心身ともにリラックス</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔥</div>
              <h3>薪ストーブの温もり</h3>
              <p>冬は薪ストーブの心地よい暖かさ。パチパチと音を立てる炎を眺めながら特別なひとときを</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🍲</div>
              <h3>地元の山の幸</h3>
              <p>地元で採れた季節の食材を使用した、心温まる手作り料理の数々をお楽しみください</p>
            </div>
          </div>
          <div className="features-link">
            <Link to="/facilities" className="button">施設を見る</Link>
          </div>
        </div>
      </section>

      <section className="wedding-section">
        <div className="container">
          <div className="wedding-content">
            <div className="wedding-image">
              {/* 実際の結婚式写真に差し替え */}
              <div className="placeholder-image">山の結婚式</div>
            </div>
            <div className="wedding-text">
              <h2>山の結婚式</h2>
              <p>
                大自然に囲まれた特別な場所で、お二人の大切な一日を過ごしませんか？
                四季折々の美しい景色の中で、心に残る結婚式をお手伝いします。
              </p>
              <p>
                薪ストーブの温かな灯りに照らされた館内や、晴れた日には青空の下で。
                自然と調和したアットホームなウェディングをご提案します。
              </p>
              <Link to="/wedding" className="button">詳しくはこちら</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <h2 className="section-title">手作り特産品</h2>
          <p className="products-intro">
            山里の自然の恵みを活かした、心を込めた手作り特産品をご用意しております。
            当館でのお食事で気に入っていただいたものや、山の素材を活かした品々を
            ご自宅でもお楽しみいただけます。
          </p>
          <div className="products-link">
            <Link to="/products" className="button">特産品を見る</Link>
          </div>
          {/* 実際の特産品写真に差し替え */}
          <div className="products-image">
            <div className="placeholder-image">特産品の写真</div>
          </div>
        </div>
      </section>

      <section className="access-section">
        <div className="container">
          <div className="access-content">
            <div className="access-text">
              <h2>アクセス</h2>
              <p>
                緑豊かな山間にある当館は、都会の喧騒から離れた場所にございますが、
                〇〇ICからお車で約40分とアクセスも便利です。
              </p>
              <p>
                最寄り駅からの送迎も行っておりますので、お気軽にお問い合わせください。
                周辺の観光スポットへのアクセスも良好です。
              </p>
              <Link to="/access" className="button">詳しいアクセス情報</Link>
            </div>
            <div className="access-map">
              {/* 実際の地図に差し替え */}
              <div className="placeholder-image">アクセスマップ</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>山の自然に囲まれた特別な時間を</h2>
            <p>ご予約・お問い合わせは、お電話またはメールにて承っております</p>
            <div className="cta-contact">
              <p className="phone">0X0-XXXX-XXXX</p>
              <p className="email">info@yamaminshuku.jp</p>
            </div>
            <p className="cta-note">※繁忙期は電話がつながりにくい場合がございます。メールでのお問い合わせをおすすめします。</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;