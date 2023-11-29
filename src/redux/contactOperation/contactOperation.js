import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contacts",
  baseQuery: fetchBaseQuery({ baseUrl: "https://6566fb8564fcff8d730f7fe8.mockapi.io" }),
  tagTypes: ['contacts'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => ({
        url:`/contacts`,
        method: 'GET',
    }),
    providesTags: ['contacts'],
    }),
   
      deleteContacts: builder.mutation({
        query: (id) => ({
          url:`/contacts/${id}`,
          method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
      }),
      addContacts: builder.mutation({
        query: (contacts) => ({
          url:`/contacts`,
          method: 'POST',
          body : contacts,
      }),
      invalidatesTags: ['contacts'],
      }),
  }),
});

export const {  useGetContactsQuery, useDeleteContactsMutation, useAddContactsMutation } = contactsApi;