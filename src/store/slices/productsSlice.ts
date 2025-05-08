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
          name: '山の恵み 蜂蜜',
          description:
            '周辺の山に自生する花々から集められた純粋な蜂蜜です。濃厚な風味と深い香りが特徴です。',
          price: 1800,
          imageUrl: '/images/honey.jpg',
        },
        {
          id: '2',
          name: '山菜の手作り佃煮',
          description:
            '春に採れたての山菜を伝統的な製法で佃煮に。ご飯のお供やお酒のおつまみに最適です。',
          price: 1200,
          imageUrl: '/images/tsukudani.jpg',
        },
        {
          id: '3',
          name: '薪ストーブのクッキー',
          description:
            '当館の薪ストーブでじっくり焼き上げた手作りクッキー。素朴な甘さと香ばしさが魅力です。',
          price: 950,
          imageUrl: '/images/cookies.jpg',
        },
        {
          id: '4',
          name: '山のハーブティーセット',
          description:
            '山里で栽培したハーブを丁寧に乾燥させました。5種類のブレンドが楽しめるギフトセットです。',
          price: 2800,
          imageUrl: '/images/herbtea.jpg',
        },
        {
          id: '5',
          name: '地元産 栗の渋皮煮',
          description:
            '近隣の山で採れた大粒の栗を、伝統的な手法でじっくりと煮込んだ贅沢な一品です。',
          price: 1500,
          imageUrl: '/images/chestnut.jpg',
        },
        {
          id: '6',
          name: '手織りコースター',
          description:
            '地元の職人が一つ一つ手織りした木の温もりを感じるコースター。4枚セットでお届けします。',
          price: 3200,
          imageUrl: '/images/coaster.jpg',
        },
        {
          id: '7',
          name: '山のジャム詰め合わせ',
          description:
            '季節の果実を使った手作りジャム3種のセット。山ぶどう、りんご、いちごの味わいをお楽しみください。',
          price: 2400,
          imageUrl: '/images/jam-set.jpg',
        },
        {
          id: '8',
          name: '杉の森の入浴剤',
          description:
            '周辺の杉林から抽出したエッセンシャルオイルを使用。森林浴の香りを自宅でお楽しみいただけます。',
          price: 1300,
          imageUrl: '/images/bath-salt.jpg',
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
