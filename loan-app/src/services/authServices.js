import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { sendOtp } from '../features/auth/authActions';

const backendURL = "http://localhost:8080"


export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: backendURL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userToken;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (registrationData) => ({
        url: 'User/register',
        method: 'POST',
        body: registrationData,
      }),
    }),
    sendOtp: builder.mutation({
      query: (userData) => ({
        url: 'User/send-otp',
        method: 'POST',
        body: userData,
      }),
    }),
    validateOtp: builder.mutation({
      query: (userData) => ({
        url: 'User/validate-otp',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useSendOtpMutation, useValidateOtpMutation } = authApi;
