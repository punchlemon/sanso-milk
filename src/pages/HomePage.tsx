import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero mountain">
        <div className="hero-content">
          <h1>大自然の懐に抱かれる山の民宿</h1>
          <p className="hero-subtitle">心安らぐ静寂と温かい手料理でおもてなし</p>
          <div className="hero-buttons">
            <a href="#about" className="button primary-button">詳しく見る</a>
            <Link to="/products" className="button secondary-button">手作り特産品</Link>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">山小屋の民宿について</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                四季折々の美しい自然に囲まれた山あいの民宿は、都会の喧騒から離れ、
                大自然の息吹を肌で感じることができる特別な空間です。
                薪ストーブの暖かな灯りと、木の香り漂う館内で、心からのリラックスタイムをお過ごしください。
              </p>
              <p>
                地元で収穫された新鮮な山の幸を活かした温かい手料理は、当民宿の自慢のひとつ。
                昔ながらの製法で作る郷土料理と、四季折々の自然の恵みをお楽しみいただけます。
              </p>
              <p>
                静寂に包まれた山の風景を眺めながら、忙しい日常を忘れてゆったりと流れる時間をご堪能ください。
              </p>
            </div>
            <div className="about-image">
              {/* 実際の山小屋画像に差し替え */}
              <div className="placeholder-image">山小屋の外観</div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">山の民宿の魅力</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔥</div>
              <h3>薪ストーブの温もり</h3>
              <p>冬は薪ストーブの優しい温もりに包まれ、雪景色を眺めながら至福のひとときを。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🍲</div>
              <h3>山の幸の手料理</h3>
              <p>地元の季節の食材を使った心温まる手料理で、山里の豊かな味わいをご堪能いただけます。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌲</div>
              <h3>森林浴と散策</h3>
              <p>周囲の森を散策して、マイナスイオンたっぷりの自然を体感できるトレッキングコースも。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💍</div>
              <h3>山の結婚式</h3>
              <p>壮大な自然を背景に、アットホームで心温まる結婚式も承っております。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wedding-section">
        <div className="container">
          <h2 className="section-title">自然に囲まれた山の結婚式</h2>
          <div className="wedding-content">
            <div className="wedding-image">
              {/* 実際の結婚式の画像に差し替え */}
              <div className="placeholder-image">山の風景と結婚式</div>
            </div>
            <div className="wedding-text">
              <p>
                大自然の息吹を感じながら、大切な人たちに見守られる心温まる結婚式。
                山々に囲まれた静かな環境で、お二人だけの特別な一日を演出します。
              </p>
              <p>
                手作りの料理でのおもてなし、地元の花々で彩られた会場、そして何よりも自然と調和した
                アットホームな雰囲気が、ゲストの皆様の心に残る思い出となることでしょう。
              </p>
              <div className="wedding-cta">
                <a href="#contact" className="button primary-button">結婚式についてお問い合わせ</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="products-preview-section">
        <div className="container">
          <h2 className="section-title">山の手作り特産品</h2>
          <p className="section-description">
            地元の素材と伝統の技法で作られた特産品は、山の恵みがぎゅっと詰まった自慢の品々です。
            当館でしか手に入らない特別な味わいを、お土産やギフトにぜひどうぞ。
          </p>
          <div className="products-cta">
            <Link to="/products" className="button primary-button">
              特産品を見る
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">お問い合わせ</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p><strong>山の民宿 木香</strong></p>
              <p><strong>住所：</strong> 〒XXX-XXXX 〇〇県〇〇市〇〇町山路123-45</p>
              <p><strong>電話：</strong> 0X0-XXXX-XXXX</p>
              <p><strong>メール：</strong> info@yamaminshuku.jp</p>
              <p className="access-note">※山道のため、アクセス方法については事前にお問い合わせください。送迎も承っております。</p>
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