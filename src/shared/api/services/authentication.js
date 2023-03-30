import {createApi} from "@reduxjs/toolkit/query/react"
import {axiosBaseQuery} from "./axiosInstances"

export const authenticationApi = createApi({
    reducerPath: "autificationApi",
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

export const {useAddTalentsQuery} = authenticationApi