import { configureStore } from "@reduxjs/toolkit";
/* When you create a slice, import it here */
// import countReducer from '../features/TestCounterSlice.js'
import userSlice from "../features/userSlice";
import CartSlice from "../features/CartSlice";
import { productsApiSlice } from "../services/productsApi";

export const store = configureStore({
  reducer: {
    api: productsApiSlice.reducer,
    user: userSlice,
    cart: CartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApiSlice.middleware),
});
