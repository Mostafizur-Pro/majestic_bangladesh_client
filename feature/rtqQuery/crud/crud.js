import { apiSlice } from "../api/apiSlice";

export const ListsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createAlist: builder.mutation({
      query: (data) => ({
        url: "/lists",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["createlist"],
    }),
    getAllLists: builder.query({
      query: () => "/lists",
      providesTags: [
        
      ],
    }),
    getListById: builder.query({
      query: (id) => `/lists/${id}`,
      providesTags: [
       
      ],
    }),
    updateListById: builder.mutation({
      query: (body) => ({
        url: `/lists/${body?.id}`,
        method: "PUT",
        body: body?.data,
      }),
      invalidatesTags: [],
    }),
    deleteAlist: builder.mutation({
      query: (id) => ({
        url: `/lists/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [],
    }),
  }),
});

export const {
  useCreateAlistMutation,
  useGetAllListsQuery,
  useGetListByIdQuery,
  useUpdateListByIdMutation,
  useDeleteAlistMutation,
} = ListsApi;
