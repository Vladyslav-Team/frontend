import {createApi} from "@reduxjs/toolkit/query/react"
import {axiosBaseQuery} from "../../../../../shared/api/services"

export const api = createApi({
    reducerPath: "api",
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => {
        return {
            getTalents: build.query({
                query: ({pageURL, typeCards, sort}) => ({
                    url: `/${typeCards}?page=${pageURL}${
                        !sort ? "&newest=true" : "&newest=false"
                    }`,
                    method: "GET",
                }),
            }),
        }
    },
})

export const {useGetTalentsQuery} = api
