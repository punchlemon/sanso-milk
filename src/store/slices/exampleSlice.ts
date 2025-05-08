import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

// スライスの初期状態の型定義
interface ExampleState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

// 初期状態
const initialState: ExampleState = {
  value: 0,
  status: 'idle',
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = exampleSlice.actions;

// 他のコンポーネントからこのスライスの状態を選択するためのセレクター
export const selectCount = (state: RootState) => state.example.value;

export default exampleSlice.reducer;
