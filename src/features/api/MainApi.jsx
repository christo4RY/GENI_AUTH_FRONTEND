import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./constant/URLS";
import Cookies from "js-cookie";


export const MainApi = createApi({
  reducerPath: "MainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,  prepareHeaders: (Headers) => {
      const token = Cookies.get('token') ? JSON.parse(Cookies.get("token")) : null
      if(token){
        Headers.set('Authorization',`Bearer ${token}`)
        Headers.set('Content-Type','application/json')
      }
      return Headers
    }
  }),
  tagTypes: ["Product", "Auth", "Project"],
  endpoints: (builder) => ({}),
});