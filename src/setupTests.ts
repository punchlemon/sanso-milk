// jest-dom adds custom jest matchers for asserting on DOM nodes.
import '@testing-library/jest-dom';

// Vite環境変数のモック
(global as any).import = {
  meta: {
    env: {
      VITE_STRIPE_PUBLIC_KEY: 'test_stripe_key',
      // 他の環境変数もここに追加
      MODE: 'test',
      DEV: false,
      PROD: false
    }
  }
};

// TextEncoder/TextDecoderのポリフィル
if (typeof TextEncoder === 'undefined') {
  const util = require('util');
  global.TextEncoder = util.TextEncoder;
  global.TextDecoder = util.TextDecoder;
}

// Stripeモジュールのモック
jest.mock('@stripe/stripe-js', () => ({
  loadStripe: jest.fn(() => Promise.resolve({
    redirectToCheckout: jest.fn(() => Promise.resolve({ error: null }))
  }))
}));

// その他の共通モック設定をここに追加
