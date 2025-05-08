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
      <div className="products-hero">
        <h1>山の手作り特産品</h1>
        <p>自然の恵みと伝統の技から生まれた特別なアイテムをお届けします</p>
      </div>
      <div className="products-content">
        <div className="products-intro">
          <p>
            当民宿では、山里の恵みを活かした手作りの品々をご用意しております。
            地元の素材と昔ながらの知恵を大切に、一つ一つ丁寧に作り上げた特産品は、
            山の自然と人の温もりが感じられる逸品です。
          </p>
          <p>
            ご自宅用にはもちろん、大切な方へのギフトにもぜひご利用ください。
          </p>
        </div>
        {content}
      </div>
    </div>
  );
};

export default ProductsPage;