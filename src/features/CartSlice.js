import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value = [...state.value, action.payload];

      console.log(state.value);
    },
    removeFromCart: (state, action) => {
      state.value.forEach((product, index) => {
        if (product._id === action.payload) {
          state.value.splice(index, 1);
        }
      });
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
