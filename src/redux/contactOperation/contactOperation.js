import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contacts",
  baseQuery: fetchBaseQuery({ baseUrl: "https://655f101a879575426b44759d.mockapi.io/contacts" }),
  tagTypes: ['contacts'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => ({
        url:`/`,
        method: 'GET',
    }),
    providesTags: ['contacts'],
    }),
   
      deleteContacts: builder.mutation({
        query: (id) => ({
          url:`/${id}`,
          method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
      }),
      addContacts: builder.mutation({
        query: (contacts) => ({
          url:`/`,
          method: 'POST', data : contacts,
      }),
      invalidatesTags: ['contacts'],
      }),
  }),
});

export const {  useGetContactsQuery, useDeleteContactsMutation, useAddContactsMutation } = contactsApi;