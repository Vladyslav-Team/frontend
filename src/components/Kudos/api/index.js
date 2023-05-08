import {createApi} from "@reduxjs/toolkit/query/react"
import {axiosBaseQuery} from "../../../shared/api/services"

export const KudosApi = createApi({
    reducerPath: "KudosApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => {
        return {
            AddKudos: build.mutation({
                query: ({proofId}) => ({
                    url: `/proofs/${proofId}/kudos`,
                    method: "POST",
                }),
            }),
            GetKudos: build.query({
                query: ({proofId}) => ({
                    url: `/proofs/${proofId}/kudos`,
                    method: "GET",
                }),
            }),
        }
    },
})

export const {useAddKudosMutation, useGetKudosQuery} = KudosApi
