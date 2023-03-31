import {createApi} from "@reduxjs/toolkit/query/react"
import {axiosBaseQuery} from "./axiosInstances"

export const authenticationApi = createApi({
    reducerPath: "authenticationApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => {
        return {
            AddTalents: build.mutation({
                query: (body) => ({
                    url: "/signup",
                    method: "POST",
                    body: body,
                }),
            }),
        }
    },
})

export const {useAddTalentsMutation} = authenticationApi
