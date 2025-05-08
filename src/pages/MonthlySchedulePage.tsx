import React from 'react';
import { Link } from 'react-router-dom';

const MonthlySchedulePage: React.FC = () => {
  // 実際の実装では、月間データをAPIやストアから取得することを想定
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  // ダミーデータ - 実際の実装では動的に生成または取得する
  const monthlySchedule = [
    {
      date: '2023-05-01',
      dayOfWeek: '月',
      isOpen: false,
      specialNote: '定休日',
    },
    {
      date: '2023-05-02',
      dayOfWeek: '火',
      isOpen: false,
      specialNote: '定休日',
    },
    { date: '2023-05-03', dayOfWeek: '水', isOpen: true, specialNote: '' },
    { date: '2023-05-04', dayOfWeek: '木', isOpen: true, specialNote: '' },
    { date: '2023-05-05', dayOfWeek: '金', isOpen: true, specialNote: '' },
    { date: '2023-05-06', dayOfWeek: '土', isOpen: true, specialNote: '' },
    { date: '2023-05-07', dayOfWeek: '日', isOpen: true, specialNote: '' },
    {
      date: '2023-05-08',
      dayOfWeek: '月',
      isOpen: false,
      specialNote: '定休日',
    },
    {
      date: '2023-05-09',
      dayOfWeek: '火',
      isOpen: false,
      specialNote: '定休日',
    },
    { date: '2023-05-10', dayOfWeek: '水', isOpen: true, specialNote: '' },
    { date: '2023-05-11', dayOfWeek: '木', isOpen: true, specialNote: '' },
    { date: '2023-05-12', dayOfWeek: '金', isOpen: true, specialNote: '' },
    {
      date: '2023-05-13',
      dayOfWeek: '土',
      isOpen: true,
      specialNote: '食の会 13:00〜',
    },
    { date: '2023-05-14', dayOfWeek: '日', isOpen: true, specialNote: '' },
    // 残りの日付も同様に
  ];

  // 特別なお知らせ
  const specialNotices = [
    '6月はバラの季節！月曜・火曜も営業しています（11:00〜15:00）',
    '5月13日（土）食の会を開催します（要予約）',
    'ゴールデンウィーク期間中は全日営業します',
  ];

  return (
    <div className="min-h-screen bg-natural-light py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold mb-8 text-primary-dark text-center">
          月間営業案内
        </h1>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary-dark">
              {currentYear}年{currentMonth}月
            </h2>
          </div>

          {/* 基本営業情報 */}
          <div className="bg-natural-light p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-bold mb-4 text-primary-dark">
              基本営業情報
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="mb-2 font-bold text-gray-700">営業時間</p>
                <p className="text-gray-700 mb-4">11:00〜15:00</p>
              </div>
              <div>
                <p className="mb-2 font-bold text-gray-700">定休日</p>
                <p className="text-gray-700">毎週 月曜日・火曜日</p>
                <p className="text-sm text-gray-600">
                  ※6月（バラの季節）は月曜・火曜も営業
                </p>
              </div>
            </div>
          </div>

          {/* 特別なお知らせ */}
          {specialNotices.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-primary-dark">
                今月のお知らせ
              </h3>
              <div className="bg-accent bg-opacity-10 p-4 rounded-lg border-l-4 border-accent">
                <ul className="list-disc pl-5 space-y-2">
                  {specialNotices.map((notice, index) => (
                    <li key={index} className="text-gray-700">
                      {notice}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* カレンダー表示 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-primary-dark">
              営業カレンダー
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-3 border">日付</th>
                    <th className="py-2 px-3 border">曜日</th>
                    <th className="py-2 px-3 border">営業状況</th>
                    <th className="py-2 px-3 border">特記事項</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlySchedule.map((day, index) => (
                    <tr key={index} className={day.isOpen ? '' : 'bg-gray-100'}>
                      <td className="py-2 px-3 border text-center">
                        {day.date.split('-')[2]}
                      </td>
                      <td
                        className={`py-2 px-3 border text-center ${day.dayOfWeek === '日' ? 'text-red-500' : day.dayOfWeek === '土' ? 'text-blue-500' : ''}`}
                      >
                        {day.dayOfWeek}
                      </td>
                      <td className="py-2 px-3 border text-center">
                        <span
                          className={`inline-block py-1 px-3 rounded-full text-white text-sm ${day.isOpen ? 'bg-green-500' : 'bg-red-500'}`}
                        >
                          {day.isOpen ? '営業' : '休業'}
                        </span>
                      </td>
                      <td className="py-2 px-3 border">{day.specialNote}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* イベント情報 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-primary-dark">
              今月のイベント
            </h3>
            <div className="bg-natural-light p-6 rounded-lg">
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2 text-primary-dark">
                  食の会
                </h4>
                <p className="text-gray-700 mb-2">
                  日時: 5月13日（土）13:00〜15:00
                </p>
                <p className="text-gray-700 mb-2">
                  内容: 健康で生きるための食事と生活習慣について学ぶ会
                </p>
                <p className="text-gray-700 mb-2">
                  参加費: 3,500円（食事・お茶付き）
                </p>
                <p className="text-gray-700">※要予約（3日前まで）</p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2 text-primary-dark">
                  バラ園オープン
                </h4>
                <p className="text-gray-700 mb-2">期間: 5月下旬〜6月中旬</p>
                <p className="text-gray-700">
                  美しく咲き誇るバラをお楽しみいただけます。6月はバラの季節として月曜・火曜も営業いたします。
                </p>
              </div>
            </div>
          </div>

          {/* 予約情報 */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-dark">
              ご予約・お問い合わせ
            </h3>
            <div className="bg-natural-light p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                宿泊・食事・イベント参加などのご予約、また営業についてのお問い合わせは下記までご連絡ください。
              </p>
              <div className="font-bold">
                <p className="text-gray-700">電話: 0X0-XXXX-XXXX</p>
                <p className="text-gray-700">メール: info@milk-co.jp</p>
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

export default MonthlySchedulePage;
