import {createApi} from "@reduxjs/toolkit/query/react"
import {axiosBaseQuery} from "../../../../shared/api/services"

export const PaymentApi = createApi({
    reducerPath: "newsApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        GetStatus: builder.query({
            query: (id) => ({
                url: `sponsors/${id}/kudos`,
                method: "GET",
            }),
        }),
        FarmKudos: builder.mutation({
            query: ({id, amount}) => ({
                url: `sponsors/${id}/kudos?amount=${amount}`,
                method: "POST",
            }),
        }),
        Init: builder.mutation({
            query: (sponsorID) => ({
                url: `sponsors/${sponsorID}/kudos/checkout?sum=5.99`,
                method: "POST",
            }),
        }),
        Capture: builder.mutation({
            query: ({token, PayerID, sponsorID}) => ({
                url: `sponsors/${sponsorID}/kudos/capture?token=${token}&PayerID=${PayerID}`,
                method: "POST",
            }),
        }),
    }),
})

export const {
    useInitMutation,
    useCaptureMutation,
    useGetStatusQuery,
    useFarmKudosMutation,
} = PaymentApi
