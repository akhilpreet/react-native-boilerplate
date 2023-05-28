import { baseApi } from "./baseApi";

const baseApiWithTag = baseApi.enhanceEndpoints({
  addTagTypes: ["Foo"],
});

const extendedApi = baseApiWithTag.injectEndpoints({
  endpoints: (build) => ({
    getOneTodo: build.query({
      query: () => "todos/1",
    }),
    getAllTodos: build.query({
      query: () => "todos",
    }),
  }),
  overrideExisting: true,
});

export const { useGetAllTodosQuery, useGetOneTodoQuery } = extendedApi;
