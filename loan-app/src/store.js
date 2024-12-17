import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authService";
import { loanApi } from "./services/loanServices";
import { userApi } from "./services/userServices";
import { dummyApi } from "./services/dummyService";
const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [loanApi.reducerPath]: loanApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [dummyApi.reducerPath]: dummyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      loanApi.middleware,
      dummyApi.middleware,
      userApi.middleware
    ),
});

export default store;
