
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const backendURL = "http://localhost:8080";
export const userDetailsApi = createApi({
  reducerPath: 'userDetailsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: backendURL,
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("authToken");
      console.log(token)
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        headers.set('access-control-allow-origin', '*');
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserDetails: builder.mutation({
      query: (userId) => `/User/getUser/${userId}`,
      method: 'GET',
      transformResponse: (response) => response.data
    }),
    updateUserDetails: builder.mutation({
        query: (userData) => ({
          url: `/User/update/${userData.userId}`,
          method: 'PUT',
          body: userData,
          transformResponse: (response) => response.data
        }),
      }),
  }),
});

export const { useGetUserDetailsMutation, useUpdateUserDetailsMutation } = userDetailsApi;