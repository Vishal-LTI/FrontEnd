// services/loanApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loanApi = createApi({
  reducerPath: 'loanApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080',
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('userToken')
      if (token) {
        headers.set('authorization', token);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    applyLoan: builder.mutation({
      query: (loanData) => ({
        url: `/loan/apply?userId=${loanData.userId}`,
        method: 'POST',
        body: loanData,
      }),
    }),
  }),
});

export const { useApplyLoanMutation } = loanApi;
