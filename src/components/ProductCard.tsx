import React from 'react';
import './ProductCard.css';

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
    <div className="product-card">
      <div className="product-image-container">
        {product.imageUrl ? (
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="product-image" 
          />
        ) : (
          <div className="product-image-placeholder">
            <span>写真準備中</span>
          </div>
        )}
        <div className="handmade-label">手作り</div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <p className="product-price">¥{product.price.toLocaleString()}</p>
          <button 
            className="add-to-cart-button" 
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