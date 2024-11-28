import { createSlice } from '@reduxjs/toolkit';
import { registerUser, userLogin, sendOtp } from './authActions';

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

const initialState = {
  loading: false,
  userInfo: {
    name: 'John Doe',
    contact: '9876543210',
    email: 'john@test.com'
  },
  userToken,
  error: null,
  success: false,
  otpSent: false,
  otpVerified: false,
  isLoggedIn:false,
  isAdmin:false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken'); // delete token from storage
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
      state.otpSent = false;
      state.otpVerified = false;
      state.isLoggedIn = false;
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
    },
    setLoginStatus:(state) => {
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    // login user
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.userToken;
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    // send OTP
    builder.addCase(sendOtp.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.otpSent = false;
    });
    builder.addCase(sendOtp.fulfilled, (state) => {
      state.loading = false;
      state.otpSent = true; // OTP sent successfully
    });
    builder.addCase(sendOtp.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.otpSent = false;
    });

    // register user
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.otpVerified = false;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
      state.otpVerified = true; // OTP verified
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.otpVerified = false;
    });
  },
});

export const { logout, setCredentials, setLoginStatus } = authSlice.actions;

export default authSlice.reducer;
