import { apiSlice } from "./apiSlice";

const PLANS_URL = "/plans";
const PACKAGES_URL = "/packages";
const CUSTOMER_URL = "/users";
const PROFILE_URL = "/profiles";
const HELP_URL = "/help";
export const customerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogList: builder.query({
      query: ({ page, limit }) => ({
        url: `/blog/blogs${page ? `?page=${page}` : ""}${
          limit ? `&limit=${limit}` : ""
        }`,
        method: "GET",
      }),
      providesTags: ["BlogList"],
    }),
    getCategoryQuestions: builder.query({
      query: ({ id, search }) => {
        const searchParam = search
          ? `?search=${encodeURIComponent(search)}`
          : "";

        return {
          url: `${HELP_URL}/help-supports-category/${id}${searchParam}`,
          method: "GET",
        };
      },
      providesTags: ["Help"],
    }),

    getHelp: builder.query({
      query: ({ page, limit }) => {
        return {
          url: `${HELP_URL}/help-supports${page ? `?page=${page}` : ""}${
            limit ? `&limit=${limit}` : ""
          }`,
          method: "GET",
        };
      },
      providesTags: ["Help"],
    }),
    getCreateCategory: builder.query({
      query: ({ page, limit, search, pagination }) => ({
        url: `${HELP_URL}/categories${page ? `?page=${page}` : ""}${
          limit ? `&limit=${limit}` : ""
        }&search=${search}${pagination === false ? "&pagination=false" : ""}
        `,
        method: "GET",
      }),
      providesTags: ["Customer"],
    }),
    getCategoryAnswer: builder.query({
      query: ({ id }) => {
        return {
          url: `${HELP_URL}/help-supports/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Help"],
    }),
  }),
});

export const {
  useGetBlogListQuery,
  useGetCategoryAnswerQuery,
  useGetCreateCategoryQuery,
  useGetHelpQuery,
  useLazyGetCategoryQuestionsQuery,
} = customerApiSlice;
