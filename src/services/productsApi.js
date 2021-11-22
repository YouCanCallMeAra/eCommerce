import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
  // when we attach this to our redux store, where are we keeping the data in the reducers
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://serene-eyrie-59879.herokuapp.com/",
  }),

  endpoints: (builder) => {
    return {
      getProducts: builder.query({
        query: () => "/products",
      }),
      getProductById: builder.query({
        query: (id) => `/products/${id}`,
      }),
      getCategories: builder.query({
        query: () => "/categories",
      }),
      getCategoryByCategory: builder.query({
        query: (category) => `/products?category=${category}`,
      }),
      //   registerUser: builder.mutation({
      //     query: (userObject) => ({
      //       url: "/register",
      //       method: "POST",
      //       body: userObject,
      //     }),
      //   }),
      //   loginUser: builder.mutation({
      //     query: (userObject) => ({
      //       url: "/login",
      //       method: "POST",
      //       body: userObject,
      //     }),
      //   }),
    };
  },
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
  useGetCategoryByCategoryQuery,
} = productsApiSlice;
