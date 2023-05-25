import {createApi} from "@reduxjs/toolkit/query/react"
import {axiosBaseQuery} from "./axiosInstances"

export const authenticationApi = createApi({
    reducerPath: "authenticationApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => {
        return {
            AddTalents: build.mutation({
                query: ({role, body}) => ({
                    url: `/${role}`,
                    method: "POST",
                    data: body,
                }),
            }),
            SigninTalent: build.mutation({
                query: ({body}) => ({
                    url: "/login",
                    method: "POST",
                    auth: body,
                }),
            }),
            SignOutTalent: build.mutation({
                query: () => ({
                    url: "/logout",
                    method: "GET",
                }),
            }),
        }
    },
})

export const {useAddTalentsMutation, useSigninTalentMutation, useSignOutTalentMutation} =
    authenticationApi
