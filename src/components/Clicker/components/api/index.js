import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const PaymentApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/",
    }),
    endpoints: (builder) => ({
        Init: builder.mutation({
            query: () => ({
                url: "paypal/init?sum=5",
                method: "POST",
            }),
        }),
        Capture: builder.mutation({
            query: ({token, PayerID}) => ({
                url: `paypal/capture?token=${token}&PayerID=${PayerID}`,
                method: "POST",
            }),
        }),
    }),
})

export const {useInitMutation, useCaptureMutation} = PaymentApi
