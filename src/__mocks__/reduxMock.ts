// Redux関連のモック
export const mockStore = {
  getState: jest.fn(() => ({
    products: {
      items: [],
      status: 'idle',
      error: null
    },
    cart: {
      items: [],
      status: 'idle'
    }
  })),
  subscribe: jest.fn(),
  dispatch: jest.fn()
};