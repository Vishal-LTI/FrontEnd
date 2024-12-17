import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const backendURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8080"
    : import.meta.env.VITE_SERVER_URL;

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ name, contactNo, email, password, otp }, { rejectWithValue }) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const postdata = { email, otp };
      await axios.post(`${backendURL}/User/validate-otp`, postdata, config);
      const registerData = { name, contactNo, email, password, otp };
      await axios.post(`${backendURL}/User/register`, registerData, config);
      localStorage.setItem("userToken", registerData.jwtToken);
      localStorage.setItem("refreshToken", registerData.refreshToken);
      return registerData;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const initialState = {
  loading: false,
  success: false,
  error: null,
  otpVerified: false,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.otpVerified = false;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.otpVerified = true;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.otpVerified = false;
      });
  },
});

export default registerSlice.reducer;
