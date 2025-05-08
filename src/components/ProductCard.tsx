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
      {product.imageUrl && (
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="product-image" 
        />
      )}
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">¥{product.price.toLocaleString()}</p>
        <button 
          className="add-to-cart-button" 
          onClick={() => onAddToCart(product)}
        >
          カートに追加
        </button>
      </div>
    </div>
  );
};

export default ProductCard;