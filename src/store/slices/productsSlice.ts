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
          name: '自家製キムチ',
          description:
            '無農薬有機栽培の食材とクリスタル岩塩で手作りした絶品のキムチ',
          price: 1800,
          imageUrl: '/images/products/kimuchi.jpg',
        },
        {
          id: '2',
          name: '自家製味噌',
          description:
            '無農薬有機栽培の食材とクリスタル岩塩で手作りした絶品の味噌',
          price: 1800,
          imageUrl: '/images/products/miso.jpg',
        },
        {
          id: '3',
          name: '自家製醤油',
          description:
            '無農薬有機栽培の食材とクリスタル岩塩で手作りした絶品の醤油',
          price: 1800,
          imageUrl: '/images/products/soysauce.jpg',
        },
        {
          id: '4',
          name: '自家製ケチャップ',
          description:
            '無農薬有機栽培の食材とクリスタル岩塩で手作りした絶品のケチャップ',
          price: 1800,
          imageUrl: '/images/products/ketchup.jpg',
        },
        {
          id: '5',
          name: 'クリスタル岩塩',
          description:
            '',
          price: 1800,
          imageUrl: '/images/products/salt.jpg',
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
  },
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
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = 'succeeded';
          state.items = action.payload;
        },
      )
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
