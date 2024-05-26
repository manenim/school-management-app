import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Backend_URL } from "../lib/constants";


export const studentsApi = createApi({
  reducerPath: "studentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${Backend_URL}` }),
  tagTypes: ["Students"],

  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: (token?: string) => ({
        url: "/students",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Students"],
    }),

    addStudent: builder.mutation({
      query: ({ newStudent }) => ({
        url: "/students",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: newStudent,
      }),
      invalidatesTags: ["Students"],
    }),
    // PATCH endpoint to update an existing contact
    updateStudent: builder.mutation({
      query: ({ studentId, updatedStudent }) => ({
        url: `/contacts/${studentId}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: updatedStudent,
      }),
      invalidatesTags: ["Students"],
    }),
    // DELETE endpoint to remove a contact
    deleteStudent: builder.mutation({
      query: ({ studentId }) => ({
        url: `/contacts/${studentId}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Students"],
    }),

    getStudentById: builder.query({
      query: ( studentId ) => ({
        url: `/students/${studentId}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useGetAllStudentsQuery,
  useAddStudentMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
  useGetStudentByIdQuery,
} = studentsApi;
