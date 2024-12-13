
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const backendURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : import.meta.env.VITE_SERVER_URL;
export const userDetailsApi = createApi({
  reducerPath: 'userDetailsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: backendURL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("userToken"); // Adjust how you retrieve the token as needed
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserDetails: builder.mutation({
      query: () => ({
        url: `/User/getUser/1`,
        method: 'GET',
      }),
    }),
    updateUserDetails: builder.mutation({
        query: (userData) => ({
          url: `/User/update/${userData.userId}`,
          method: 'PUT',
          body: userData,
        }),
      }),
  }),
});

export const { useGetUserDetailsMutation, useUpdateUserDetailsMutation } = userDetailsApi;
