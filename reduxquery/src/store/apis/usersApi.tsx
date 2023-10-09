import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}; //Burada pause kurmamın sebebi projede belirli hazırlıklar yapmaya çalışıyorum fakat veri çok hızlı yüklendiği için yaptığım değişiklikleri göremiyorum
// Yaptığım değişiklikleri görebilmek için pause isimlibir const value'sı açtım.
const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    },
  }),

  endpoints(builder) {
    return {
      fetchUsers: builder.query({
        query: () => {
          return {
            url: "/users",
            method: "GET",
          };
        },
      }),
      addUser: builder.mutation({
        query: () => {
          return {
            url: "/users",
            method: "POST",
            body: {
              name: "Umut",
            },
          };
        },
      }),
      removeUser: builder.mutation({
        query: (user) => {
          return {
            url: `/users/${user}`, // Fixed a missing comma here
            method: "DELETE",
            body: {
              name: "Umut",
            },
          };
        },
      }),
    };
  },
});

export const { useFetchUsersQuery, useAddUserMutation, useRemoveUserMutation } =
  usersApi;

export { usersApi };
