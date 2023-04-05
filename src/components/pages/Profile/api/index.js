import {createApi} from "@reduxjs/toolkit/query/react"
import {axiosBaseQuery} from "../../../../shared/api/services"

export const GetAllInfoByID = createApi({
    reducerPath: "GetAllInfoByID",
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => {
        return {
            GetAllInfoByID: build.query({
                query: (id, token) => ({
                    url: "/talents/2",
                    method: "GET",
                }),
            }),
        }
    },
})

export const {useGetAllInfoByIDQuery} = GetAllInfoByID
