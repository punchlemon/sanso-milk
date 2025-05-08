import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../components/ProductCard';
import type { RootState } from '../index';

// 商品情報の取得をシミュレートする関数
const fetchProductsFromAPI = (): Promise<Product[]> => {
  // 実際のAPIが実装されるまで、モックデータを使用
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          name: '自家製ジャム',
          description: '地元産フルーツを使った手作りジャム',
          price: 1200,
          imageUrl: '/images/jam.jpg',
        },
        {
          id: '2',
          name: '手作り石鹸',
          description: '天然素材のみを使用した優しい石鹸',
          price: 800,
          imageUrl: '/images/soap.jpg',
        },
        {
          id: '3',
          name: 'ハーブティーセット',
          description: '民宿の庭で育てたハーブを使ったオリジナルブレンド',
          price: 1500,
          imageUrl: '/images/tea.jpg',
        },
        {
          id: '4',
          name: '手織りコースター',
          description: '伝統的な技法で作られた手織りコースター（4枚セット）',
          price: 2000,
          imageUrl: '/images/coasters.jpg',
        },
      ]);
    }, 500);
  });
};

// 商品情報を取得する非同期アクション
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetchProductsFromAPI();
    return response;
  }
);

interface ProductsState {
  items: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  status: 'idle',
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

// セレクター
export const selectAllProducts = (state: RootState) => state.products.items;
export const selectProductsStatus = (state: RootState) => state.products.status;
export const selectProductsError = (state: RootState) => state.products.error;

export default productsSlice.reducer;