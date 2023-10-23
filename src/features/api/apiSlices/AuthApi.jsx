import { MainApi } from "../MainApi";
import { CHANGEPWD_URL, FORGOTPWD_URL, LOGIN_URL, LOGOUT_URL, REGISTER_URL, RESETPWD_URL, USERPROFILE_URL, VERIFYCODE_URL } from "../constant/URLS"


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
        getUserProfile:builder.query({
            query:()=>({
                url:USERPROFILE_URL,
                method:'GET'
            }),
            providesTags:['Auth']
        }),
        logoutUser: builder.mutation({
            query: () => ({
                url: LOGOUT_URL,
                method: "POST",
            }),
            invalidatesTags: ['Auth']
        }),
        updateProfile:builder.mutation({
            query:(data)=>({
                url:USERPROFILE_URL,
                method:'PATCH',
                body:data
            }),
            invalidatesTags:['Auth']
        }),
        userVerifyCode:builder.mutation({
            query: (data) => ({
                url: VERIFYCODE_URL,
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Auth']
        }),
        forgotPassword:builder.mutation({
            query:(data)=>({
                url:FORGOTPWD_URL,
                method:"POST",
                body:data
            }),
            invalidatesTags: ['Auth']
        }),
        resetPassword:builder.mutation({
            query:(data)=>({
                url:RESETPWD_URL,
                method:'POST',
                body:data
            }),
            invalidatesTags: ['Auth']
        }),
        changePassword:builder.mutation({
            query:(data)=>({
                url:CHANGEPWD_URL,
                method:'POST',
                body:data
            }),
            invalidatesTags: ['Auth']
        })
    })
})

export const { useSetUserMutation,useGetUserMutation,useGetUserProfileQuery,useUpdateProfileMutation,useLogoutUserMutation,useUserVerifyCodeMutation,useForgotPasswordMutation,useResetPasswordMutation,useChangePasswordMutation} = AuthApi