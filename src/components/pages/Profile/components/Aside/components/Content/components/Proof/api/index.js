import {createApi} from "@reduxjs/toolkit/query/react"
import {axiosBaseQuery} from "../../../../../../../../../../shared/api/services"

export const ProofApi = createApi({
    reducerPath: "ProofApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => {
        return {
            GetProofs: build.query({
                query: ({id, page}) => ({
                    url: `/talents/${id}/proofs?page=${page ? page : 1}&newest=true`,
                    method: "GET",
                }),
            }),
            GetSkillsByProofs: build.query({
                query: (idProof) => ({
                    url: `/proofs/${idProof}/skills`,
                    method: "GET",
                }),
            }),
            GetSkills: build.query({
                query: (text) => ({
                    url: `/skills?text=${text}`,
                    method: "GET",
                }),
            }),
            AddSkill: build.mutation({
                query: ({talentId, proofId, body}) => ({
                    url: `/talents/${talentId}/proofs/${proofId}/skills`,
                    method: "POST",
                    data: body,
                }),
            }),
            DeleteSkill: build.mutation({
                query: ({talentId, proofId, skillId}) => ({
                    url: `/talents/${talentId}/proofs/${proofId}/skills/${skillId}`,
                    method: "DELETE",
                }),
            }),
        }
    },
})

export const {
    useGetProofsQuery,
    useGetSkillsByProofsQuery,
    useGetSkillsQuery,
    useAddSkillMutation,
    useDeleteSkillMutation,
} = ProofApi
