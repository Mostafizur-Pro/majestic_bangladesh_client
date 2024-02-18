import {configureStore} from'@reduxjs/toolkit'
import {apiSlice}from'../feature/api/api'
import loginSlice from './rtqQuery/auth/loginSlice';
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth:apiSlice
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
});