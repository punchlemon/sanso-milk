import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 実際の実装ではAPIを呼び出してメッセージを送信
    console.log('送信されたフォームデータ:', formData);
    // フォーム送信成功の表示
    setFormSubmitted(true);
    // フォームをリセット
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-natural-light py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold mb-8 text-primary-dark text-center">
          お問い合わせ
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <p className="text-gray-700 mb-8">
              山荘ミルクへのご予約・お問い合わせは、以下のフォーム、お電話、またはメールにて承っております。
              お気軽にご連絡ください。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-natural-light p-6 rounded-lg">
                <h2 className="text-2xl font-serif font-bold mb-4 text-primary-dark">
                  お電話でのお問い合わせ
                </h2>
                <p className="text-2xl font-bold mb-2">0X0-XXXX-XXXX</p>
                <p className="text-gray-600 text-sm">
                  営業時間：11:00〜15:00
                  <br />
                  定休日：月曜日・火曜日
                </p>
              </div>

              <div className="bg-natural-light p-6 rounded-lg">
                <h2 className="text-2xl font-serif font-bold mb-4 text-primary-dark">
                  メールでのお問い合わせ
                </h2>
                <p className="text-2xl font-bold mb-2">info@milk-co.jp</p>
                <p className="text-gray-600 text-sm">
                  24時間受付
                  <br />
                  ※お返事は営業時間内となります
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-serif font-bold mb-6 text-primary-dark">
              お問い合わせフォーム
            </h2>

            {formSubmitted ? (
              <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
                <h3 className="text-green-800 font-bold text-lg mb-2">
                  お問い合わせありがとうございます
                </h3>
                <p className="text-green-700">
                  内容を確認次第、担当者よりご連絡いたします。
                  通常、1～2営業日以内にご返信いたしますので、しばらくお待ちください。
                </p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  お名前<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  メールアドレス<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-bold mb-2"
                >
                  お問い合わせ種別<span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary focus:border-primary"
                >
                  <option value="">選択してください</option>
                  <option value="宿泊予約">宿泊予約</option>
                  <option value="食事予約">食事予約</option>
                  <option value="イベント参加">イベント参加</option>
                  <option value="商品について">商品について</option>
                  <option value="結婚式について">結婚式について</option>
                  <option value="その他">その他</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-bold mb-2"
                >
                  お問い合わせ内容<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary focus:border-primary"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  送信する
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6 text-primary-dark">
              よくあるご質問
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-2 text-primary-dark">
                  予約はいつからできますか？
                </h3>
                <p className="text-gray-700">
                  ご宿泊は3ヶ月前から、お食事は1ヶ月前からご予約を承っております。
                  特に週末や祝日は混み合うことが多いため、お早めのご予約をおすすめします。
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2 text-primary-dark">
                  キャンセルポリシーを教えてください
                </h3>
                <p className="text-gray-700">
                  ご宿泊のキャンセルは、3日前までは無料、2日前は30%、前日は50%、当日は100%のキャンセル料が発生します。
                  お食事のキャンセルは前日までにご連絡いただければ無料です。当日のキャンセルは50%のキャンセル料をいただきます。
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2 text-primary-dark">
                  ペットと一緒に宿泊できますか？
                </h3>
                <p className="text-gray-700">
                  ペット同伴での宿泊は、一部のお部屋に限りお受けしております。
                  ドッグランも併設していますので、ワンちゃんと一緒に楽しい時間をお過ごしいただけます。
                  予約時にペット同伴の旨をお伝えください。
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2 text-primary-dark">
                  食事のアレルギーに対応していますか？
                </h3>
                <p className="text-gray-700">
                  アレルギーや食事制限がある場合は、予約時にお申し付けください。
                  可能な限り対応させていただきますが、設備の都合上対応できない場合もございますので、あらかじめご了承ください。
                </p>
              </div>
            </div>
          </div>
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

export default ContactPage;
