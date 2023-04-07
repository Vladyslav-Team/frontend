import {configureStore} from "@reduxjs/toolkit"
import {api} from "../components/Main/Pagination/api/services"
import {authenticationApi} from "../shared/api/services/authentication"
import {GetAllInfoByID} from "../components/pages/Profile/api"
import {DeleteAccount} from "../components/DeleteButton/api"

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        [authenticationApi.reducerPath]: authenticationApi.reducer,
        [GetAllInfoByID.reducerPath]: GetAllInfoByID.reducer,
        [DeleteAccount.reducerPath]: DeleteAccount.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            api.middleware,
            authenticationApi.middleware,
            GetAllInfoByID.middleware,
            DeleteAccount.middleware
        ),
})
