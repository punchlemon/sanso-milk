import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../components/ProductCard';
import type { RootState } from '../index';

// カート内の商品アイテム（数量を追加）
export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  // 合計金額など計算はセレクターで行うため、ここにはstateとして持たない
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingIndex = state.items.findIndex(
        (item) => item.product.id === action.payload.id,
      );

      if (existingIndex >= 0) {
        // 既に商品がカートにある場合は数量を増やす
        state.items[existingIndex].quantity += 1;
      } else {
        // 新しい商品の場合はカートに追加
        state.items.push({
          product: action.payload,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      // 商品IDを受け取り、該当商品をカートから削除
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload,
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>,
    ) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.product.id === id);

      if (existingItem) {
        if (quantity <= 0) {
          // 数量が0以下の場合は商品を削除
          state.items = state.items.filter((item) => item.product.id !== id);
        } else {
          // 数量を更新
          existingItem.quantity = quantity;
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// アクションをエクスポート
export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

// セレクター
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartItemCount = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

export default cartSlice.reducer;
