import {configureStore} from "@reduxjs/toolkit"
import {api} from "../components/Main/Pagination/api/services"
import {authenticationApi} from "../shared/api/services/authentication"
import {GetAllInfoByID} from "../components/pages/Profile/api"
import {EditApi} from "../components/EditPage/api"
import {HeaderApi} from "../components/Avatar/api"
import {DeleteAccount} from "../components/EditPage/components/DeleteField/api"
import {ProofApi} from "../components/pages/Profile/components/Aside/components/Content/components/Proof/api"
import {KudosApi} from "../components/Kudos/api"

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        [authenticationApi.reducerPath]: authenticationApi.reducer,
        [GetAllInfoByID.reducerPath]: GetAllInfoByID.reducer,
        [EditApi.reducerPath]: EditApi.reducer,
        [HeaderApi.reducerPath]: HeaderApi.reducer,
        [DeleteAccount.reducerPath]: DeleteAccount.reducer,
        [ProofApi.reducerPath]: ProofApi.reducer,
        [KudosApi.reducerPath]: KudosApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            api.middleware,
            authenticationApi.middleware,
            GetAllInfoByID.middleware,
            EditApi.middleware,
            HeaderApi.middleware,
            DeleteAccount.middleware,
            ProofApi.middleware,
            KudosApi.middleware
        ),
})
