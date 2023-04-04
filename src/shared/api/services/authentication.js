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
                    body: body,
                }),
            }),
            SigninTalent: build.mutation({
                query: (body) => ({
                    url: "/talents/login",
                    method: "POST",
                    auth: {
                        username: "rhodaburgess@mailinator.cm",
                        password: "eaes@vXl1z",
                    },
                }),
            }),
        }
    },
})

export const {useAddTalentsMutation, useSigninTalentMutation} = authenticationApi
