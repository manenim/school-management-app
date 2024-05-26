import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Backend_URL } from "../lib/constants";

type Contact = {
  firstname: string;
  lastname: string;
  phoneNumber: string;
};

export const teachersApi = createApi({
  reducerPath: "teachersApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${Backend_URL}` }),
  tagTypes: ["Teachers"],

  endpoints: (builder) => ({
    getAllTeachers: builder.query({
      query: (token) => ({
        url: "/teachers",
        method: "GET",
        
      }),
      providesTags: ["Teachers"],
    }),

    addTeacher: builder.mutation({
      query: ({ newTeacher }) => ({
        url: "/teachers",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: newTeacher,
      }),
      invalidatesTags: ["Teachers"],
    }),
    // PATCH endpoint to update an existing contact
    updateTeacher: builder.mutation({
      query: ({ teacherId, updatedTeacher }) => ({
        url: `/contacts/${teacherId}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: updatedTeacher,
      }),
      invalidatesTags: ["Teachers"],
    }),
    // DELETE endpoint to remove a contact
    deleteTeacher: builder.mutation({
      query: ({ teacherId }) => ({
        url: `/contacts/${teacherId}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Teachers"],
    }),

    getTeacherById: builder.query({
      query: ( teacherId ) => ({
        url: `/teachers/${teacherId}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useGetAllTeachersQuery,
  useAddTeacherMutation,
  useUpdateTeacherMutation,
  useDeleteTeacherMutation,
  useGetTeacherByIdQuery,
} = teachersApi;
