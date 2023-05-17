import {createApi} from "@reduxjs/toolkit/query/react"
import {axiosBaseQuery} from "./axiosInstances"

export const SkillApi = createApi({
    reducerPath: "SkillApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => {
        return {
            GetSkills: build.query({
                query: (text) => ({
                    url: `/skills?text=${text}`,
                    method: "GET",
                }),
            }),
        }
    },
})

export const {useGetSkillsQuery} = SkillApi
