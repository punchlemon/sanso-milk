import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>心安らぐひとときを</h1>
          <p className="hero-subtitle">自然に囲まれた静かな民宿へようこそ</p>
          <div className="hero-buttons">
            <a href="#about" className="button primary-button">詳しく見る</a>
            <Link to="/products" className="button secondary-button">特産品を見る</Link>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">民宿について</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                当民宿は、豊かな自然に囲まれた静かな環境で、心からリラックスできる空間をご提供しています。
                四季折々の美しい風景と、地元の新鮮な食材を使った料理をお楽しみいただけます。
              </p>
              <p>
                長年培ってきた経験と、おもてなしの心を大切に、お客様一人ひとりに寄り添ったサービスを心がけております。
                都会の喧騒を離れ、ゆったりとした時間をお過ごしください。
              </p>
            </div>
            <div className="about-image">
              {/* 実際の画像に差し替えてください */}
              <div className="placeholder-image">民宿の外観イメージ</div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">館内のご案内</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🍽️</div>
              <h3>厳選された食材</h3>
              <p>地元で採れた新鮮な食材を使用した、心のこもった手作り料理をご提供します。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌸</div>
              <h3>四季を感じる庭園</h3>
              <p>四季折々の花や植物が楽しめる庭園で、自然とのつながりを感じられます。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">♨️</div>
              <h3>天然温泉</h3>
              <p>源泉かけ流しの天然温泉で、日々の疲れを癒していただけます。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="products-preview-section">
        <div className="container">
          <h2 className="section-title">特産品のご紹介</h2>
          <p className="section-description">
            民宿で作られた手作りの特産品を販売しております。お土産やギフトにぜひご利用ください。
          </p>
          <div className="products-cta">
            <Link to="/products" className="button primary-button">
              商品一覧を見る
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">お問い合わせ</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p><strong>住所：</strong> 〒XXX-XXXX 〇〇県〇〇市〇〇町123-45</p>
              <p><strong>電話：</strong> 0X0-XXXX-XXXX</p>
              <p><strong>メール：</strong> info@example-minshuku.jp</p>
            </div>
            <div className="contact-map">
              {/* 実際の地図を埋め込む場合はこちら */}
              <div className="placeholder-map">地図がここに表示されます</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;