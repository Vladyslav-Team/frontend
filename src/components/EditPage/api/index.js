import {createApi} from "@reduxjs/toolkit/query/react"
import {axiosBaseQuery} from "../../../shared/api/services"

export const EditApi = createApi({
    reducerPath: "authenticationApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => {
        return {
            EditUserInfo: build.mutation({
                query: ({payload, id, role}) => ({
                    url: `/${role}/${id}`,
                    method: "PATCH",
                    data: payload,
                }),
            }),
        }
    },
})

export const {useEditUserInfoMutation} = EditApi
