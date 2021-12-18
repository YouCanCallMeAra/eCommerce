import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = localStorage.getItem("authToken");

export const productsApiSlice = createApi({
  // when we attach this to our redux store, where are we keeping the data in the reducers
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    prepareHeaders: (headers) => {
      if (token) {
        headers.set("authorization", token);
      }
      return headers;
    },
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

      getBrands: builder.query({
        query: () => "/brands",
      }),
      getBrandsbyBrand: builder.query({
        query: (brand) => `/products?brand=${brand}`,
      }),
      getGenders: builder.query({
        query: () => "/genders",
      }),
      getGendersByGender: builder.query({
        query: (gender) => `/products?gender=${gender}`,
      }),
      registerUser: builder.mutation({
        query: (data) => ({
          url: "register",
          method: "POST",
          body: data,
        }),
      }),
      loginUser: builder.mutation({
        query: (data) => ({
          url: "login",
          method: "POST",
          body: data,
        }),
      }),
    };
  },
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
  useGetCategoryByCategoryQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetBrandsQuery,
  useGetBrandsbyBrandQuery,
  useGetGendersQuery,
  useGetGendersByGenderQuery,
} = productsApiSlice;
