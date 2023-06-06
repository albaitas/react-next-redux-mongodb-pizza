import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  total: 0,
  quantity: 0
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
      state.quantity += 1;
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((pizza) => pizza._id !== action.payload[0]);
      state.total -= action.payload[1] * action.payload[2];
      state.quantity -= 1;
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    }
  }
});
export const { addProduct, deleteProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
