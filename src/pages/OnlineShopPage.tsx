import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard, { type Product } from '../components/ProductCard';
import {
  fetchProducts,
  selectAllProducts,
  selectProductsStatus,
  selectProductsError,
} from '../store/slices/productsSlice';
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  selectCartItems,
  selectCartTotal,
} from '../store/slices/cartSlice';
import type { AppDispatch } from '../store';
import { FONTS, getSectionColors } from '../constants/theme';
// 新しく作成したコンポーネントをインポート
import ShoppingCart from '../components/cart/ShoppingCart';
import MobileCartSummary from '../components/cart/MobileCartSummary';
import FloatingCartButton from '../components/cart/FloatingCartButton';

const OnlineShopPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  // テーマの適用
  const heroColors = getSectionColors('dark');
  const contentColors = getSectionColors('light');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveItem = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    dispatch(updateQuantity({ id: productId, quantity }));
  };

  // 商品リストのコンテンツ
  let productContent;
  if (status === 'loading') {
    productContent = (
      <div className="flex justify-center items-center py-12">
        <div className={`animate-pulse ${contentColors.TEXT.DEFAULT} text-lg`}>
          商品情報を読み込み中...
        </div>
      </div>
    );
  } else if (status === 'succeeded') {
    productContent = (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    );
  } else if (status === 'failed') {
    productContent = (
      <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 my-6">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション - ダークテーマ (画像全画面表示) */}
      <section className={`relative w-full ${heroColors.BG.PRIMARY_DARK}`}>
        {/* 画像コンテナ - 画面幅いっぱいに表示 */}
        <div className="flex flex-row w-full overflow-hidden">
          {/* 左側の画像 */}
          <div className="w-1/2 relative">
            <img 
              src="/images/onlineshop/hero1.jpg" 
              alt="食の会オンライン" 
              className="w-full h-full object-contain" 
            />
            <div className={`absolute inset-0 ${heroColors.OVERLAY.LIGHT} z-5`}></div>
          </div>
          
          {/* 右側の画像 */}
          <div className="w-1/2 relative">
            <img 
              src="/images/onlineshop/hero2.jpg" 
              alt="食の会オンライン" 
              className="w-full h-full object-contain"
            />
            <div className={`absolute inset-0 ${heroColors.OVERLAY.LIGHT} z-5`}></div>
          </div>
        </div>
        
        {/* コンテンツ - オーバーレイとして中央配置 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-3xl mx-auto text-center px-4 py-6">
            <h1 className={`${FONTS.SERIF} ${heroColors.TEXT.DEFAULT} mb-4 leading-tight`} 
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              食の会オンライン
            </h1>
            <p className={`${heroColors.TEXT.SEMI_MUTED} max-w-xl mx-auto`} 
              style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
              無農薬有機栽培の野菜と体にいい塩を使った手作りの食品
            </p>
          </div>
        </div>
      </section>

      {/* 商品コンテンツエリア - 新しいレイアウト */}
      <div className={`${contentColors.BG.PRIMARY} flex flex-col lg:flex-row`}>
        {/* 商品リスト - スクロール可能エリア */}
        <div className="w-full lg:w-3/4 overflow-y-auto h-[calc(100vh-100vh*0.7)] lg:h-[calc(100vh-70px)]">
          <div className="py-16 px-6">
            {/* モバイル用のみカートサマリーを表示 */}
            <div className="lg:hidden mb-8">
              <MobileCartSummary 
                cartItemsCount={cartItems.length} 
                cartTotal={cartTotal} 
              />
            </div>
            
            {/* 商品リストコンテンツ */}
            {productContent}
          </div>
        </div>
        
        {/* カート - 固定サイドバー (デスクトップのみ) */}
        <div className="hidden lg:block lg:w-1/4 h-[calc(100vh-70px)] overflow-hidden">
          <div className="h-full">
            <ShoppingCart 
              cartItems={cartItems}
              cartTotal={cartTotal}
              onQuantityChange={handleQuantityChange}
              onRemoveItem={handleRemoveItem}
            />
          </div>
        </div>
      </div>

      {/* モバイル向け固定カート表示ボタン */}
      <div className="lg:hidden">
        <FloatingCartButton cartItemsCount={cartItems.length} />
      </div>
    </div>
  );
};

export default OnlineShopPage;
