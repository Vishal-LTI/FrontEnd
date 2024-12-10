import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8080"
    : import.meta.env.VITE_SERVER_URL;

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ userName, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
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

      // store user's token in local storage
      localStorage.setItem("userToken", data.jwtToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ name, contactNo, email, password, otp }, { rejectWithValue }) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const postdata = { email, otp };
      console.log(postdata);
      await axios.post(`${backendURL}/User/validate-otp`, postdata, config);
      const registerData = { name, contactNo, email, password, otp };
      console.log(registerData);
      await axios.post(`${backendURL}/User/register`, registerData, config);
      // store user's token in local storage
      localStorage.setItem("userToken", registerData.jwtToken);
      localStorage.setItem("refreshToken", registerData.refreshToken);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const sendOtp = createAsyncThunk(
  "auth/sendOtp",
  async ({ email }, { rejectWithValue }) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const postdata = { email, otp: null };
      console.log(postdata);
      await axios.post(`${backendURL}/User/send-otp`, postdata, config);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
