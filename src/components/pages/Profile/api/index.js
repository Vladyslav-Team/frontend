import {createApi} from "@reduxjs/toolkit/query/react"
import {axiosBaseQuery} from "../../../../shared/api/services"

export const GetAllInfoByID = createApi({
    reducerPath: "GetAllInfoByID",
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => {
        return {
            GetAllInfoByID: build.query({
                query: (id, token) => ({
                    url: `/talents/${id}`,
                    method: "GET",
                    headers: {
                        Authorization: token && `Bearer ${token} `,
                    },
                }),
            }),
        }
    },
})

export const {useGetAllInfoByIDQuery} = GetAllInfoByID
