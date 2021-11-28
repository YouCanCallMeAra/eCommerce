import { createSlice } from "@reduxjs/toolkit";

const localData = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const initialState = { value: [...localData()] };

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value = [...state.value, action.payload];
      localStorage.setItem("cart", JSON.stringify(state.value));
      // console.log(state.value);
    },
    removeFromCart: (state, action) => {
      state.value.map((product, index) => {
        if (product._id === action.payload) {
          return (
            state.value.splice(index, 1) &&
            localStorage.setItem("cart", JSON.stringify(state.value))
          );
        } else {
          return "";
        }
      });
    },
  },
  // incrementQuantity: (state, action) => {
  //   let itemIndex = state.value.findIndex(
  //     (product) => product._id === action.payload
  //   );
  //   state.value[itemIndex].count++;
  //   localStorage.setItem("cart", JSON.stringify(state.value));
  // },
  // decrementQuantity: (state, action) => {
  //   let itemIndex = state.value.findIndex(
  //     (product) => product._id === action.payload
  //   );
  //   state.value[itemIndex].count--;
  //   localStorage.setItem("cart", JSON.stringify(state.value));
  // },
});

export const {
  addToCart,
  removeFromCart,
  // incrementQuantity,
  // decrementQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;
