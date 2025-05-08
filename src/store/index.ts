import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slices/exampleSlice';
import productsReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

// ストア自体の型を推論
export type RootState = ReturnType<typeof store.getState>;
// dispatch関数の型を推論
export type AppDispatch = typeof store.dispatch;
