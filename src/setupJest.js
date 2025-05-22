// ESM形式からCommonJS形式に変更
const React = require('react');

// envMockの作成（インライン）
const envMock = {
  VITE_STRIPE_PUBLIC_KEY: 'test_stripe_key'
};

// import.meta のモック
if (typeof global.import === 'undefined') {
  global.import = {};
}

if (typeof global.import.meta === 'undefined') {
  global.import.meta = {};
}

global.import.meta.env = envMock;

// テスト中に環境変数を使用するモジュールのため
// 外部スコープの変数を参照しないようにモックを定義
jest.mock('../pages/CheckoutPage', () => ({
  __esModule: true,
  // ここでアロー関数を使い、文字列としてJSXを表現
  default: function MockCheckoutPage() {
    return {
      $$typeof: Symbol.for('react.element'),
      type: 'div',
      props: {
        'data-testid': 'checkout-page',
        children: 'Checkout Page'
      },
      ref: null
    };
  }
}));