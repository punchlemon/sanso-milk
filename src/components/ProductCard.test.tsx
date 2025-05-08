import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard, { Product } from './ProductCard';

describe('ProductCard', () => {
  const mockProduct: Product = {
    id: '1',
    name: '特産品A',
    description: '民宿で作られた特産品です。',
    price: 1500,
    imageUrl: '/sample-image.jpg',
  };

  const mockOnAddToCart = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('商品情報が正しく表示される', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(
      screen.getByText(`¥${mockProduct.price.toLocaleString()}`),
    ).toBeInTheDocument();
    expect(screen.getByAltText(mockProduct.name)).toHaveAttribute(
      'src',
      mockProduct.imageUrl,
    );
  });

  test('カートに追加ボタンをクリックすると、onAddToCart関数が呼ばれる', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);

    const addToCartButton = screen.getByText('カートに追加');
    fireEvent.click(addToCartButton);

    expect(mockOnAddToCart).toHaveBeenCalledTimes(1);
    expect(mockOnAddToCart).toHaveBeenCalledWith(mockProduct);
  });

  test('imageUrlが指定されていない場合、画像は表示されない', () => {
    const productWithoutImage = { ...mockProduct, imageUrl: undefined };

    render(
      <ProductCard
        product={productWithoutImage}
        onAddToCart={mockOnAddToCart}
      />,
    );

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
