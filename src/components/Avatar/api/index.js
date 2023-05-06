import {createApi} from "@reduxjs/toolkit/query/react"
import {axiosBaseQuery} from "../../../shared/api/services"

export const HeaderApi = createApi({
    reducerPath: "HeaderApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => {
        return {
            GetAvatarTalent: build.query({
                query: ({id, role}) => ({
                    url: `/${role}/image/${id}`,
                    method: "GET",
                }),
            }),
        }
    },
})

export const {useGetAvatarTalentQuery} = HeaderApi
