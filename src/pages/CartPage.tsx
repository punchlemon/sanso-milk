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
      <div className="max-w-4xl mx-auto my-10 px-5 text-center py-16">
        <h1 className="text-3xl font-serif font-bold mb-8 text-primary-dark">ショッピングカート</h1>
        <p className="text-gray-700 mb-8">カートに商品がありません。</p>
        <Link to="/products" className="inline-block bg-transparent border border-primary text-primary hover:bg-natural hover:text-primary-dark py-2 px-6 rounded transition-colors">
          商品一覧に戻る
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-10 px-5">
      <h1 className="text-3xl font-serif font-bold mb-8 text-center text-primary-dark">ショッピングカート</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        {cartItems.map((item) => (
          <div key={item.product.id} className="flex flex-col md:flex-row items-start md:items-center gap-6 py-5 border-b border-natural last:border-b-0">
            <div className="w-full md:w-24 h-24">
              {item.product.imageUrl && (
                <img src={item.product.imageUrl} alt={item.product.name} className="w-full h-full object-cover rounded" />
              )}
            </div>
            
            <div className="flex-grow">
              <h3 className="text-lg font-bold mb-2 text-primary-dark">{item.product.name}</h3>
              <p className="text-accent-dark font-semibold mb-2">¥{item.product.price.toLocaleString()}</p>
              <p className="text-gray-600 text-sm">{item.product.description}</p>
            </div>
            
            <div className="flex flex-col md:items-end gap-4 w-full md:w-auto">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                  className="w-8 h-8 flex items-center justify-center bg-natural hover:bg-natural-dark hover:text-white rounded transition-colors"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="font-medium">{item.quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center bg-natural hover:bg-natural-dark hover:text-white rounded transition-colors"
                >
                  +
                </button>
              </div>
              
              <div className="font-semibold text-primary-dark">
                小計: ¥{(item.product.price * item.quantity).toLocaleString()}
              </div>
              
              <button 
                onClick={() => handleRemoveItem(item.product.id)}
                className="text-accent-dark hover:text-accent text-sm"
              >
                削除
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between text-xl font-semibold mb-6 pb-4 border-b border-natural">
          <span className="text-primary-dark">合計:</span>
          <span className="text-accent-dark">¥{cartTotal.toLocaleString()}</span>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <Link to="/products" className="inline-block bg-transparent border border-primary text-primary hover:bg-natural hover:text-primary-dark py-2 px-6 rounded text-center transition-colors">
            買い物を続ける
          </Link>
          <Link to="/checkout" className="inline-block bg-accent hover:bg-accent-dark text-white py-2 px-6 rounded text-center transition-colors">
            購入手続きへ進む
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;