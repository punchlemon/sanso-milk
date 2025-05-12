import React from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-[#f8f6f1] rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-[#e8e4da] flex items-center justify-center">
            <span className="text-gray-600 text-sm">写真準備中</span>
          </div>
        )}
        <div className="absolute top-2 left-2 bg-[#8b6b4d] text-white text-xs font-bold py-1 px-2 rounded-md">
          手作り
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-[#2a3c30]">
          {product.name}
        </h3>
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-[#8b6b4d] font-bold">
            ¥{product.price.toLocaleString()}
          </p>
          <button
            className="bg-[#2a3c30] hover:bg-[#1e2723] text-white text-sm py-1 px-3 rounded transition-colors"
            onClick={() => onAddToCart(product)}
            aria-label={`${product.name}をカートに追加`}
          >
            カートに追加
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
