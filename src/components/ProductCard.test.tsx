import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';
import type { Product } from './ProductCard';

describe('ProductCard', () => {
  const mockProduct: Product = {
    id: '1',
    name: 'テスト商品',
    price: 1000,
    imageUrl: '/test-image.jpg',
    description: '商品の説明',
  };

  const mockOnAddToCart = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);
    
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(`¥${mockProduct.price.toLocaleString()}`)).toBeInTheDocument();
    expect(screen.getByAltText(mockProduct.name)).toBeInTheDocument();
  });

  it('calls onAddToCart when add button is clicked', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);
    
    const addButton = screen.getByRole('button', { name: /カートに追加/i });
    fireEvent.click(addButton);
    
    expect(mockOnAddToCart).toHaveBeenCalledWith(mockProduct);
  });
});
