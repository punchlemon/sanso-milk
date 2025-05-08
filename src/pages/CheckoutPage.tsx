import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotal, clearCart } from '../store/slices/cartSlice';
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
  console.info('Stripe is running in development mode - HTTPS warnings are expected and can be ignored.');
}

// チェックアウトフォームのコンポーネント
const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      setPaymentError('決済処理中にエラーが発生しました。もう一度お試しください。');
      setIsProcessing(false);
    }
  };

  if (paymentSuccess) {
    return (
      <div className="payment-success">
        <h2>ご注文ありがとうございます！</h2>
        <p>決済が完了しました。確認メールをお送りしました。</p>
        <Link to="/" className="button">
          ホームページに戻る
        </Link>
      </div>
    );
  }

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <h3>お客様情報</h3>
        <div className="input-row">
          <label htmlFor="name">お名前</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="input-row">
          <label htmlFor="email">メールアドレス</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="input-row">
          <label htmlFor="postalCode">郵便番号</label>
          <input
            id="postalCode"
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </div>
        
        <div className="input-row">
          <label htmlFor="address">住所</label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
      </div>
      
      <div className="form-group">
        <h3>決済情報</h3>
        <div className="card-element-container">
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
        
        {paymentError && <div className="error-message">{paymentError}</div>}
      </div>
      
      <div className="order-summary">
        <h3>注文内容</h3>
        <div className="items-summary">
          {cartItems.map((item) => (
            <div key={item.product.id} className="item-summary">
              <span className="item-name">
                {item.product.name} x {item.quantity}
              </span>
              <span className="item-price">
                ¥{(item.product.price * item.quantity).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
        
        <div className="total-summary">
          <span className="total-label">合計:</span>
          <span className="total-price">¥{cartTotal.toLocaleString()}</span>
        </div>
      </div>
      
      <div className="checkout-actions">
        <Link to="/cart" className="back-button">
          カートに戻る
        </Link>
        
        <button
          type="submit"
          className="payment-button"
          disabled={!stripe || isProcessing}
        >
          {isProcessing ? '処理中...' : `¥${cartTotal.toLocaleString()}を支払う`}
        </button>
      </div>
    </form>
  );
};

// CheckoutPageコンポーネント
const CheckoutPage: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
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
    <div className="checkout-page">
      <h1>お支払い</h1>
      
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default CheckoutPage;