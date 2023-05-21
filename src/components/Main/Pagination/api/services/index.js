import {createApi} from "@reduxjs/toolkit/query/react"
import {axiosBaseQuery} from "../../../../../shared/api/services"

export const api = createApi({
    reducerPath: "api",
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => {
        return {
            getTalents: build.query({
                query: ({pageURL, typeCards, sortURL, skills}) => ({
                    url: `/${typeCards}?page=${pageURL}&newest=${
                        sortURL === "newest"
                    }&skills=${encodeURIComponent(skills.join(","))}`,
                    method: "GET",
                }),
            }),
        }
    },
})

export const {useGetTalentsQuery} = api
