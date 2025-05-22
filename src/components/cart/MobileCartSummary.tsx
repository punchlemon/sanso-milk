import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaArrowRight } from 'react-icons/fa';
import { getSectionColors } from '../../constants/theme';

interface MobileCartSummaryProps {
  cartItemsCount: number;
  cartTotal: number;
}

/**
 * モバイル用カート概要コンポーネント
 */
const MobileCartSummary: React.FC<MobileCartSummaryProps> = ({
  cartItemsCount,
  cartTotal,
}) => {
  const navigate = useNavigate();
  const contentColors = getSectionColors('light');
  
  return (
    <div className="lg:hidden mb-8 bg-white border-l-4 border-primary-dark shadow p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaShoppingCart className={contentColors.TEXT.DEFAULT} />
          <span className="text-lg font-bold">カート ({cartItemsCount})</span>
        </div>
        <span className={`${contentColors.ACCENT.DEFAULT} font-bold`}>
          合計: ¥{cartTotal.toLocaleString()}
        </span>
      </div>
      {cartItemsCount > 0 && (
        <button
          onClick={() => navigate('/checkout')}
          className={`w-full mt-4 py-2 ${contentColors.ACCENT.BG} ${contentColors.ACCENT.BG_HOVER} text-white transition-colors flex justify-center items-center`}
        >
          購入手続きへ <FaArrowRight className="ml-2" />
        </button>
      )}
    </div>
  );
};

export default MobileCartSummary;