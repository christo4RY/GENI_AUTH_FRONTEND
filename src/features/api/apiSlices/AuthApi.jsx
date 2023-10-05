import { MainApi } from "../MainApi";
import { LOGIN_URL, LOGOUT_URL, REGISTER_URL, VERIFYCODE_URL } from "../constant/URLS"


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
                url: LOGIN_URL,
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Auth']
        }),
        logoutUser: builder.mutation({
            query: (data) => ({
                url: LOGOUT_URL,
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Auth']
        }),
        userVerifyCode:builder.mutation({
            query: (data) => ({
                url: VERIFYCODE_URL,
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Auth']
        })
    })
})

export const { useSetUserMutation,useGetUserMutation,useLogoutUserMutation,useUserVerifyCodeMutation} = AuthApi