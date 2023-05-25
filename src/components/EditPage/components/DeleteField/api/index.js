import {createApi} from "@reduxjs/toolkit/query/react"
import {axiosBaseQuery} from "../../../../../shared/api/services"

export const DeleteAccount = createApi({
    reducerPath: "DeleteAccount",
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => {
        return {
            DeleteAccount: build.mutation({
                query: ({id, role}) => ({
                    url: `/${role}/${id}`,
                    method: "DELETE",
                }),
            }),
        }
    },
})

export const {useDeleteAccountMutation} = DeleteAccount
