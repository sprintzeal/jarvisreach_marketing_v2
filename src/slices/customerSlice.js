import { Update } from "@mui/icons-material";
import { apiSlice } from "./apiSlice";

const CUSTOMER_URL = "/users";
const PROFILE_URL = "/profiles";
const FOLDERS_URL = "/folders";
const VIEW_URL = "/views";

export const customerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogCategorized: builder.query({
      query: ({ page, limit }) =>
        `/blog/blogs/categorized${page ? `?page=${page}` : ""}${
          limit ? `&limit=${limit}` : ""
        }`,
      method: "GET",
    }),
    plansMarketing: builder.query({
      query: ({ duration }) =>
        `plans/marketing/getPlans${duration ? `?duration=${duration}` : ""}`,
      method: "GET",
    }),
  }),
});

export const { useGetBlogCategorizedQuery, usePlansMarketingQuery } =
  customerApiSlice;
