import { configureStore } from "@reduxjs/toolkit";

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
