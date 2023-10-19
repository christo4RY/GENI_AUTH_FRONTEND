import { MainApi } from "../MainApi";
import { GOTOPROJECT_URL, PROJECTS_URL } from "../constant/URLS";

export const ProjectApi = MainApi.injectEndpoints({
    endpoints: (builder) => ({
        getProjects: builder.query({
            query: () => ({
                url: PROJECTS_URL,
                method: "GET",
            }),
            providesTags: ['Project']
        }),
        goToProject:builder.mutation({
            query:({user_id,project_url})=>({
                url:`${GOTOPROJECT_URL}/${user_id}`,
                method:"POST",
                body:{project_url}
            }),
            providesTags: ['Project']
        })
    })
})

export const { useGetProjectsQuery,useGoToProjectMutation} = ProjectApi