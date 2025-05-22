// React はJSXを使用する場合に暗黙的にインポートされるため、
// React 17以降では明示的なインポートは不要
import type { ReactElement } from 'react';

export default function CheckoutPage(): ReactElement {
  return <div data-testid="checkout-page">Checkout Page Mock</div>;
}