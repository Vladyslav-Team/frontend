import {createApi} from "@reduxjs/toolkit/query/react"
import {axiosBaseQuery} from "../../../shared/api/services"

export const KudosApi = createApi({
    reducerPath: "KudosApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => {
        return {
            AddKudos: build.mutation({
                query: ({proofId, skillId, body}) => ({
                    url: `/proofs/${proofId}/skills/${skillId}/kudos`,
                    method: "POST",
                    data: body,
                }),
            }),
            GetKudos: build.query({
                query: ({proofId}) => ({
                    url: `/proofs/${proofId}/kudos`,
                    method: "GET",
                }),
            }),
            GetSkillKudos: build.query({
                query: ({idProof, skillId}) => ({
                    url: `/proofs/${idProof}/skills/${skillId}/kudos`,
                    method: "GET",
                }),
            }),
        }
    },
})

export const {useAddKudosMutation, useGetKudosQuery, useGetSkillKudosQuery} = KudosApi
