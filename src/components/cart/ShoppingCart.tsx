import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaTimes, FaArrowRight } from 'react-icons/fa';
import { FONTS, getSectionColors } from '../../constants/theme';
import type { CartItem } from '../../store/slices/cartSlice';  // 明示的にtype importを使う

interface ShoppingCartProps {
  cartItems: CartItem[];
  cartTotal: number;
  onQuantityChange: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

/**
 * デスクトップ用カートコンポーネント
 */
const ShoppingCart: React.FC<ShoppingCartProps> = ({
  cartItems,
  cartTotal,
  onQuantityChange,
  onRemoveItem,
}) => {
  const navigate = useNavigate();
  const heroColors = getSectionColors('dark');
  const contentColors = getSectionColors('light');
  
  return (
    <div className={`h-full flex flex-col ${contentColors.BG.PRIMARY_LIGHT} border-l-4 ${heroColors.BG.PRIMARY}`}>
      {/* カートヘッダー */}
      <div className={`p-4 border-b ${heroColors.BG.PRIMARY} ${heroColors.TEXT.DEFAULT}`}>
        <h2 className={`${FONTS.SERIF} text-xl font-bold flex items-center`}>
          <FaShoppingCart className="mr-2" />
          カート ({cartItems.length})
        </h2>
      </div>
      
      {/* カートコンテンツ - スクロール可能 */}
      <div className="flex-1 overflow-y-auto p-4">
        {cartItems.length === 0 ? (
          <div className="py-8 text-center">
            <p className={contentColors.TEXT.MUTED}>カートに商品がありません</p>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div 
                key={item.product.id} 
                className="border-b border-natural pb-4 last:border-b-0"
              >
                <div className="flex gap-3">
                  <div className={`w-16 h-16 ${contentColors.BG.PRIMARY_DARK}`}>
                    {item.product.imageUrl && (
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className={contentColors.TEXT.DEFAULT}>{item.product.name}</h3>
                    <p className={`${contentColors.ACCENT.DEFAULT} font-semibold text-sm`}>
                      ¥{item.product.price.toLocaleString()}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onQuantityChange(item.product.id, Math.max(1, item.quantity - 1))}
                      className={`w-6 h-6 flex items-center justify-center ${contentColors.BG.PRIMARY_DARK} hover:${heroColors.BG.PRIMARY} hover:${heroColors.TEXT.DEFAULT} transition-colors`}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="font-medium w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onQuantityChange(item.product.id, item.quantity + 1)}
                      className={`w-6 h-6 flex items-center justify-center ${contentColors.BG.PRIMARY_DARK} hover:${heroColors.BG.PRIMARY} hover:${heroColors.TEXT.DEFAULT} transition-colors`}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`font-semibold ${contentColors.TEXT.DEFAULT}`}>
                      ¥{(item.product.price * item.quantity).toLocaleString()}
                    </span>
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className={`${contentColors.ACCENT.DEFAULT} ${contentColors.ACCENT.HOVER} text-sm`}
                      aria-label={`${item.product.name}を削除`}
                    >
                      <FaTimes />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* カートフッター - 固定表示 */}
      <div className={`border-t border-natural p-4 ${contentColors.BG.PRIMARY_LIGHT}`}>
        <div className="flex justify-between items-center mb-4">
          <span className={`${contentColors.TEXT.DEFAULT} font-bold`}>合計:</span>
          <span className={`${contentColors.ACCENT.DEFAULT} font-bold text-lg`}>
            ¥{cartTotal.toLocaleString()}
          </span>
        </div>
        {cartItems.length > 0 && (
          <button
            onClick={() => navigate('/checkout')}
            className={`w-full py-2 ${contentColors.ACCENT.BG} ${contentColors.ACCENT.BG_HOVER} ${heroColors.TEXT.DEFAULT} transition-colors flex justify-center items-center`}
          >
            購入手続きへ進む
            <FaArrowRight className="ml-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;