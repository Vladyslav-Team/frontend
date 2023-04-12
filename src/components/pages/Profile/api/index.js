import {createApi} from "@reduxjs/toolkit/query/react"
import {axiosBaseQuery} from "../../../../shared/api/services"

export const GetAllInfoByID = createApi({
    reducerPath: "GetAllInfoByID",
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => {
        return {
            GetAllInfoByID: build.query({
                query: (id) => ({
                    url: `/talents/${id}`,
                    method: "GET",
                }),
            }),
            GetAllProof: build.query({
                query: (id) => ({
                    url: `/proofs${id}`,
                    method: "GET",
                }),
            }),
        }
    },
})

export const {useGetAllInfoByIDQuery, useGetAllProofQuery} = GetAllInfoByID
