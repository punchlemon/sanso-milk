import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { getSectionColors } from '../../constants/theme';

interface FloatingCartButtonProps {
  cartItemsCount: number;
}

/**
 * モバイル用フローティングカートボタン
 */
const FloatingCartButton: React.FC<FloatingCartButtonProps> = ({
  cartItemsCount,
}) => {
  const navigate = useNavigate();
  const heroColors = getSectionColors('dark');
  
  return (
    <div className="lg:hidden">
      <button
        onClick={() => navigate('/cart')}
        className={`fixed bottom-8 right-8 z-10 ${heroColors.BG.PRIMARY} ${heroColors.TEXT.DEFAULT} p-4 shadow-lg hover:${heroColors.BG.PRIMARY_DARK} transition-colors flex items-center gap-2 rounded-full`}
        aria-label="カートを表示"
      >
        <FaShoppingCart />
        <span className="font-bold">{cartItemsCount}</span>
      </button>
    </div>
  );
};

export default FloatingCartButton;