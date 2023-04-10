import {createApi} from "@reduxjs/toolkit/query/react"
import {axiosBaseQuery} from "../../../shared/api/services"

export const EditApi = createApi({
    reducerPath: "authenticationApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => {
        return {
            EditTalent: build.mutation({
                query: ({payload, idTalent}) => ({
                    url: `/talents/${idTalent}`,
                    method: "PATCH",
                    data: payload,
                }),
            }),
        }
    },
})

export const {useEditTalentMutation} = EditApi
