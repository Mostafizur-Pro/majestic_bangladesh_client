import {apiSlice}from'../../api/api'
import { userLoggedIn } from './loginSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/users/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              token: result.data.token,
              user: result.data.user,
            })
          );
          dispatch(
            userLoggedIn({
              token: result.data.token,
              user: result.data.user,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});