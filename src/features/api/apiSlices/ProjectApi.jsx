import { MainApi } from "../MainApi";
import { PROJECTS_URL } from "../constant/URLS";

export const ProjectApi = MainApi.injectEndpoints({
    endpoints: (builder) => ({
        getProjects: builder.query({
            query: (token) => ({
                url: PROJECTS_URL,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            }),
            providesTags: ['Project']
        }),
    })
})

export const { useGetProjectsQuery} = ProjectApi