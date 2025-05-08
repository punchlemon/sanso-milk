import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  selectCartItems, 
  selectCartTotal, 
  removeFromCart, 
  updateQuantity 
} from '../store/slices/cartSlice';

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const handleRemoveItem = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    dispatch(updateQuantity({ id: productId, quantity }));
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <h1>ショッピングカート</h1>
        <p>カートに商品がありません。</p>
        <Link to="/products" className="continue-shopping-button">
          商品一覧に戻る
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>ショッピングカート</h1>
      
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.product.id} className="cart-item">
            <div className="cart-item-image">
              {item.product.imageUrl && (
                <img src={item.product.imageUrl} alt={item.product.name} />
              )}
            </div>
            
            <div className="cart-item-details">
              <h3>{item.product.name}</h3>
              <p className="price">¥{item.product.price.toLocaleString()}</p>
              <p className="description">{item.product.description}</p>
            </div>
            
            <div className="cart-item-actions">
              <div className="quantity-controls">
                <button 
                  onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                  className="quantity-button"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                  className="quantity-button"
                >
                  +
                </button>
              </div>
              
              <div className="subtotal">
                小計: ¥{(item.product.price * item.quantity).toLocaleString()}
              </div>
              
              <button 
                onClick={() => handleRemoveItem(item.product.id)}
                className="remove-button"
              >
                削除
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cart-summary">
        <div className="cart-total">
          <span>合計:</span>
          <span className="total-amount">¥{cartTotal.toLocaleString()}</span>
        </div>
        
        <div className="cart-actions">
          <Link to="/products" className="continue-shopping-button">
            買い物を続ける
          </Link>
          <Link to="/checkout" className="checkout-button">
            購入手続きへ進む
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;