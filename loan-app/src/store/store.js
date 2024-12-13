import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import { authApi } from '../services/authServices';
import { loanApi } from '../services/loanServices';
import { userDetailsApi } from '../services/userServices';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [loanApi.reducerPath]: loanApi.reducer,
    [userDetailsApi.reducerPath]: userDetailsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, loanApi.middleware, 
      userDetailsApi.middleware),
});

export default store;
