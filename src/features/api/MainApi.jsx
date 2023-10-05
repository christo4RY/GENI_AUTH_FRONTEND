import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./constant/URLS";


export const MainApi = createApi({
  reducerPath: "MainApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, mode:'no-cors' }),
  tagTypes: ["Product", "Auth","Project"],
  endpoints: (builder) => ({}),
});