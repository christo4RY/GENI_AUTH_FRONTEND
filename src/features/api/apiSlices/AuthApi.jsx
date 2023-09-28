import { MainApi } from "../MainApi";
import { LOGIN_URL, REGISTER_URL } from "../constant/URLS"


export const AuthApi = MainApi.injectEndpoints({
    endpoints: (builder) => ({
        setUser: builder.mutation({
            query: (data) => ({
                url: REGISTER_URL,
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Auth']
        }),
        getUser: builder.mutation({
            query: (data) => ({
                url: 'login',
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Auth']
        }),
    })
})

export const { useSetUserMutation,useGetUserMutation,useLogoutUserMutation} = AuthApi