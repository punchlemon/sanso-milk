import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard, { type Product } from '../components/ProductCard';
import { fetchProducts, selectAllProducts, selectProductsStatus, selectProductsError } from '../store/slices/productsSlice';
import { addToCart } from '../store/slices/cartSlice';
import type { AppDispatch } from '../store';
import './ProductsPage.css';

const ProductsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
    // フィードバックを表示（実際はToastやメッセージなどを表示するといいでしょう）
    console.log('Added to cart:', product);
  };

  let content;

  if (status === 'loading') {
    content = <div className="loading">商品情報を読み込み中...</div>;
  } else if (status === 'succeeded') {
    content = (
      <div className="products-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    );
  } else if (status === 'failed') {
    content = <div className="error">{error}</div>;
  }

  return (
    <div className="products-page">
      <h1>商品一覧</h1>
      <p>こちらが当民宿自慢の商品です。</p>
      {content}
    </div>
  );
};

export default ProductsPage;