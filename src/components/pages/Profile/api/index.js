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
            ChangeProof: build.mutation({
                query: ({talentId, proofId, payload}) => ({
                    url: `/talents/${talentId}/proofs/${proofId}`,
                    method: "PATCH",
                    data: payload,
                }),
            }),
            ChangeStatusProof: build.mutation({
                query: ({talentId, proofId, status}) => ({
                    url: `/talents/${talentId}/proofs/${proofId}/${status}`,
                    method: "PATCH",
                }),
            }),
            DeleteProof: build.mutation({
                query: ({talentId, proofId}) => ({
                    url: `/talents/${talentId}/proofs/${proofId}`,
                    method: "DELETE",
                }),
            }),
            AddSkillProfile: build.mutation({
                query: ({talentId, body}) => ({
                    url: `/talents/${talentId}/skills`,
                    method: "POST",
                    data: body,
                }),
            }),
            DeleteSkillProfile: build.mutation({
                query: ({talentId, skillId}) => ({
                    url: `/talents/${talentId}/skills/${skillId}`,
                    method: "DELETE",
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
    useChangeProofMutation,
    useDeleteProofMutation,
    useAddSkillProfileMutation,
    useDeleteSkillProfileMutation
} = GetAllInfoByID
