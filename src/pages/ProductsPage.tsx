import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard, { type Product } from '../components/ProductCard';
import { fetchProducts, selectAllProducts, selectProductsStatus, selectProductsError } from '../store/slices/productsSlice';
import { addToCart } from '../store/slices/cartSlice';
import type { AppDispatch } from '../store';

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
    content = (
      <div className="flex justify-center items-center py-12">
        <div className="animate-pulse text-gray-600 text-lg">商品情報を読み込み中...</div>
      </div>
    );
  } else if (status === 'succeeded') {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    content = (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-6">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <div className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center" 
           style={{backgroundImage: 'url("/images/products-hero.jpg")'}}>
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">山の手作り特産品</h1>
          <p className="text-lg md:text-xl">自然の恵みと伝統の技から生まれた特別なアイテムをお届けします</p>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* 商品コンテンツ */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="mb-4 text-gray-700">
              当民宿では、山里の恵みを活かした手作りの品々をご用意しております。
              地元の素材と昔ながらの知恵を大切に、一つ一つ丁寧に作り上げた特産品は、
              山の自然と人の温もりが感じられる逸品です。
            </p>
            <p className="text-gray-700">
              ご自宅用にはもちろん、大切な方へのギフトにもぜひご利用ください。
            </p>
          </div>
          {content}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;