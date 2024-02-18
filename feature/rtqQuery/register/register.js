import { apiSlice } from "../api/apiSlice";
 

export const registerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/users/register",
        method: "POST",
        body: data,
      }),
    }),
   
  }),
});

export const { useRegisterMutation } = registerApi;
