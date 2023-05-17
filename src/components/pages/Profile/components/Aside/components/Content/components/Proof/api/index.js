import {createApi} from "@reduxjs/toolkit/query/react"
import {axiosBaseQuery} from "../../../../../../../../../../shared/api/services"

export const ProofApi = createApi({
    reducerPath: "ProofApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => {
        return {
            GetProofs: build.query({
                query: ({idTalent, page}) => ({
                    url: `/talents/${idTalent}/proofs?page=${
                        page ? page : 1
                    }&newest=true`,
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
        }
    },
})

export const {useGetProofsQuery, useGetSkillsByProofsQuery, useGetSkillsQuery} = ProofApi
