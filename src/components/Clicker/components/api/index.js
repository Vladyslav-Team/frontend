import {createApi} from "@reduxjs/toolkit/query/react"
import {axiosBaseQuery} from "../../../../shared/api/services"

export const PaymentApi = createApi({
    reducerPath: "newsApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        Init: builder.mutation({
            query: () => ({
                url: "sponsors/28/kudos/checkout?sum=5",
                method: "POST",
            }),
        }),
        Capture: builder.mutation({
            query: ({token, PayerID}) => ({
                url: `sponsors/28/kudos/capture?token=${token}&PayerID=${PayerID}`,
                method: "POST",
            }),
        }),
    }),
})

export const {useInitMutation, useCaptureMutation} = PaymentApi
