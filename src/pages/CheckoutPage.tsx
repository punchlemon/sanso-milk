import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
  clearCart,
} from '../store/slices/cartSlice';
import { Link, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

// 環境変数からStripe公開キーを取得する
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

// 開発環境での警告を抑制するためのコンソールメッセージ
if (import.meta.env.DEV) {
  console.info(
    'Stripe is running in development mode - HTTPS warnings are expected and can be ignored.',
  );
}

// チェックアウトフォームのコンポーネント
const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripeがまだ読み込まれていない
      return;
    }

    setIsProcessing(true);
    setPaymentError(null);

    // CardElementから決済情報を取得
    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setPaymentError('カード情報が見つかりません。');
      setIsProcessing(false);
      return;
    }

    try {
      // 実際の実装では、サーバーサイドで決済処理を行う
      // ここではクライアントサイドで成功をシミュレート
      setTimeout(() => {
        setPaymentSuccess(true);
        setIsProcessing(false);
        dispatch(clearCart());
        // 完了画面に遷移（実装予定）
        // navigate('/checkout/success');
      }, 2000);
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentError(
        '決済処理中にエラーが発生しました。もう一度お試しください。',
      );
      setIsProcessing(false);
    }
  };

  if (paymentSuccess) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-accent mb-4">
          ご注文ありがとうございます！
        </h2>
        <p className="text-gray-700 mb-6">
          決済が完了しました。確認メールをお送りしました。
        </p>
        <Link
          to="/"
          className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded transition-colors"
        >
          ホームページに戻る
        </Link>
      </div>
    );
  }

  return (
    <form
      className="bg-white p-6 rounded-lg shadow-md mb-8"
      onSubmit={handleSubmit}
    >
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-primary-dark">お客様情報</h3>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 text-gray-700">
            お名前
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-natural rounded focus:outline-none focus:border-primary"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-gray-700">
            メールアドレス
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-natural rounded focus:outline-none focus:border-primary"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="postalCode" className="block mb-1 text-gray-700">
            郵便番号
          </label>
          <input
            id="postalCode"
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
            className="w-full p-2 border border-natural rounded focus:outline-none focus:border-primary"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block mb-1 text-gray-700">
            住所
          </label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full p-2 border border-natural rounded focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-primary-dark">決済情報</h3>
        <div className="p-3 border border-natural rounded mb-4">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#32325d',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#fa755a',
                  iconColor: '#fa755a',
                },
              },
            }}
          />
        </div>

        {paymentError && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {paymentError}
          </div>
        )}
      </div>

      <div className="bg-natural-light p-4 rounded mb-8">
        <h3 className="text-xl font-bold mb-4 text-primary-dark">注文内容</h3>
        <div className="space-y-2 mb-4">
          {cartItems.map((item) => (
            <div key={item.product.id} className="flex justify-between">
              <span className="text-gray-700">
                {item.product.name} x {item.quantity}
              </span>
              <span className="font-semibold text-primary-dark">
                ¥{(item.product.price * item.quantity).toLocaleString()}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-between border-t border-natural pt-3 font-semibold">
          <span className="text-primary-dark">合計:</span>
          <span className="text-accent-dark">
            ¥{cartTotal.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <Link
          to="/onlineshop"
          className="bg-transparent border border-primary text-primary hover:bg-natural hover:text-primary-dark py-2 px-6 rounded text-center transition-colors"
        >
          カートに戻る
        </Link>

        <button
          type="submit"
          className={`bg-accent hover:bg-accent-dark text-white font-bold py-2 px-6 rounded text-center transition-colors ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}
          disabled={!stripe || isProcessing}
        >
          {isProcessing
            ? '処理中...'
            : `¥${cartTotal.toLocaleString()}を支払う`}
        </button>
      </div>
    </form>
  );
};

// CheckoutPageコンポーネント
const CheckoutPage: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  // 現在は未使用だが、将来的にリダイレクト機能で使用予定
  const navigate = useNavigate();

  // カートが空の場合はカートページにリダイレクト
  React.useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/cart');
    }
  }, [cartItems, navigate]);

  // カートが空の場合は何も表示しない（リダイレクトが処理される）
  if (cartItems.length === 0) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto my-10 px-5">
      <h1 className="text-3xl font-serif font-bold mb-8 text-center text-primary-dark">
        お支払い
      </h1>

      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default CheckoutPage;
