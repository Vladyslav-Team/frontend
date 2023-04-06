import {createApi} from "@reduxjs/toolkit/query/react"
import {axiosBaseQuery} from "./axiosInstances"

export const authenticationApi = createApi({
    reducerPath: "authenticationApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => {
        return {
            AddTalents: build.mutation({
                query: (body) => ({
                    url: "/talents",
                    method: "POST",
                    data: body,
                }),
            }),
            SigninTalent: build.mutation({
                query: (body) => ({
                    url: "/talents/login",
                    method: "POST",
                    auth: body,
                }),
            }),
        }
    },
})

export const {useAddTalentsMutation, useSigninTalentMutation} = authenticationApi
