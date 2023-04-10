import {createApi} from "@reduxjs/toolkit/query/react"
import {axiosBaseQuery} from "../../../../../../../../../../shared/api/services"

export const ProofApi = createApi({
    reducerPath: "ProofApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => {
        return {
            GetProofs: build.query({
                query: (idTalent) => ({
                    url: `/talents/${idTalent}/proofs`,
                    method: "GET",
                }),
            }),
        }
    },
})

export const {useGetProofsQuery} = ProofApi
