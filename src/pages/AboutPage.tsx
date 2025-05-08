import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="page-hero">
        <h1>山小屋の民宿について</h1>
        <p>伝統と自然が織りなす、心安らぐ時間</p>
      </div>

      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>自然に囲まれた特別な空間</h2>
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

      <section className="history-section">
        <div className="container">
          <h2 className="section-title">民宿の歴史</h2>
          <div className="history-content">
            <div className="history-image">
              {/* 実際の歴史的な写真に差し替え */}
              <div className="placeholder-image">創業当時の写真</div>
            </div>
            <div className="history-text">
              <p>
                山の民宿「木香」は、1965年に現オーナーの祖父が山の自然を愛する人々に、
                その素晴らしさを体験してもらいたいとの思いから開業しました。
              </p>
              <p>
                当時はまだ電気も通っておらず、ランプの明かりと薪ストーブの温もりだけが
                訪れる人々を迎えていました。そんな素朴な始まりから半世紀以上が経ちましたが、
                自然との調和と温かなおもてなしの心は今も変わらず受け継がれています。
              </p>
              <p>
                3代目となった現在も、先代から受け継いだレシピで料理を作り、
                大切に守ってきた山の暮らしの知恵を皆様にお伝えしています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="container">
          <h2 className="section-title">私たちの想い</h2>
          <div className="philosophy-content">
            <p className="philosophy-text">
              山の民宿「木香」では、お客様に「自然の中で過ごす豊かな時間」をお届けすることをモットーにしています。
              忙しい日常から離れ、大自然の営みを感じ、薪ストーブの温もりに包まれながら過ごす時間は、
              きっと心に残る特別な思い出になることでしょう。
            </p>
            <div className="philosophy-values">
              <div className="value-item">
                <h3>自然との調和</h3>
                <p>周囲の自然環境を大切にし、四季の移ろいを感じる暮らしを提供します。</p>
              </div>
              <div className="value-item">
                <h3>心温まるおもてなし</h3>
                <p>訪れるすべての方に家族のような温かさで接し、居心地の良い空間を作ります。</p>
              </div>
              <div className="value-item">
                <h3>伝統の継承</h3>
                <p>山里の暮らしの知恵や手仕事の技術を大切に守り、次の世代に伝えていきます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>自然の中で特別なひとときを</h2>
            <p>山の民宿「木香」で、忘れられない思い出を作りませんか？</p>
            <div className="cta-buttons">
              <Link to="/facilities" className="button primary-button">施設を見る</Link>
              <Link to="/access" className="button secondary-button">アクセス情報</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;