import {createApi} from "@reduxjs/toolkit/query/react"
import { createSelector } from "@reduxjs/toolkit"
import {axiosBaseQuery} from "../../../../../shared/api/services"

export const api = createApi({
    reducerPath: "api",
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => {
        return {
            getTalents: build.query({
                query: (page) => ({
                    url: `/talents?page=${page}`,
                    method: "GET",
                }),
            }),
        }
    },
})



export const {useGetTalentsQuery} = api


