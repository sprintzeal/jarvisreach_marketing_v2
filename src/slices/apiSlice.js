import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl:
    //  "https://jarvis-api.techemulsion.com/api",
    // "https://api.jarvisreach.com/api",
    // "https://api.jarvisreach.com/api",
    import.meta.env.VITE_LIVE_API_BASE_URL,
  // import.meta.env.VITE_APP_BACKEND_API_URL,
  // "http://localhost:5000/api",
  credentials: "include",
});

console.log("url", import.meta.env.VITE_APP_BACKEND_API_URL);

const auth = localStorage.getItem("auth");

export const apiSlice = createApi({
  baseQuery,
  prepareHeaders: (headers) => {
    return {
      ...headers,
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth?.result?.token}`,
    };
  },
  tagTypes: ["User", "Products", "Analytics"],
  endpoints: (builder) => ({}),
  keepUnusedDataFor: 0,
});
