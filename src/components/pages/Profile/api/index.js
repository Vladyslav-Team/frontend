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
            AddProof: build.mutation({
                query: ({id, payload}) => ({
                    url: `/talents/${id}/proofs`,
                    method: "POST",
                    data: payload,
                }),
            }),
            ChangeStatusProof: build.mutation({
                query: ({talentId, proofId, status}) => ({
                    url: `/talents/${talentId}/proofs/${proofId}/${status}`,
                    method: "PATCH",
                }),
            }),
        }
    },
})

export const {
    useGetAllInfoByIDQuery,
    useGetAllProofQuery,
    useAddProofMutation,
    useChangeStatusProofMutation,
} = GetAllInfoByID
