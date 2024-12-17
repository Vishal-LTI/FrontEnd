import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const backendURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8080"
    : import.meta.env.VITE_SERVER_URL;

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ userName, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${backendURL}/login`,
        { userName, password },
        config
      );

      localStorage.setItem("userToken", data.jwtToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      return data;
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
  userInfo: null,
  userToken: localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null,
  error: null,
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken');
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
      state.isLoggedIn = false;
    },
    setLoginStatus: (state) => {
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.userToken = payload.userToken;
        state.isLoggedIn = true;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.isLoggedIn = false;
      });
  },
});

export const { logout, setLoginStatus } = loginSlice.actions;
export default loginSlice.reducer;
