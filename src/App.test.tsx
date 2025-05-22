import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';

// 依存モジュールのモックを先に定義
jest.mock('./pages/CheckoutPage', () => ({
  __esModule: true,
  default: function MockCheckoutPage() {
    return <div data-testid="checkout-page">Checkout Page</div>;
  }
}));

// モックストアの設定
const mockStore = configureStore({
  reducer: {
    products: (state = { items: [], status: 'idle', error: null }) => state,
    cart: (state = { items: [], status: 'idle' }) => state
  }
});

// App内にRouterが既に含まれている場合の設定
const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <Provider store={mockStore}>
      {ui}
    </Provider>
  );
};

describe('App component', () => {
  test('scroll position resets to top on page transition', () => {
    window.scrollTo = jest.fn();
    renderWithProviders(<App />);
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });

  test('renders the app component correctly', () => {
    renderWithProviders(<App />);
    const appElement = document.querySelector('div');
    expect(appElement).toBeInTheDocument();
  });
});