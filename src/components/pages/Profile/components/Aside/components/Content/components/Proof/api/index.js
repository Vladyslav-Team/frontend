import {createApi} from "@reduxjs/toolkit/query/react"
import {axiosBaseQuery} from "../../../../../../../../../../shared/api/services"

export const ProofApi = createApi({
    reducerPath: "ProofApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => {
        return {
            GetProofs: build.query({
                query: ({idTalent, page}) => ({
                    url: `/talents/${idTalent}/proofs?page=${page}&newest=false`,
                    method: "GET",
                }),
            }),
        }
    },
})

export const {useGetProofsQuery} = ProofApi
