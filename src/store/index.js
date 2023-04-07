import {configureStore} from "@reduxjs/toolkit"
import {api} from "../components/Main/Pagination/api/services"
import {authenticationApi} from "../shared/api/services/authentication"
import {GetAllInfoByID} from "../components/pages/Profile/api"
import {EditApi} from "../components/EditPage/api"
import {HeaderApi} from "../components/Avatar/api"

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        [authenticationApi.reducerPath]: authenticationApi.reducer,
        [GetAllInfoByID.reducerPath]: GetAllInfoByID.reducer,
        [EditApi.reducerPath]: EditApi.reducer,
        [HeaderApi.reducerPath]: HeaderApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            api.middleware,
            authenticationApi.middleware,
            GetAllInfoByID.middleware,
            EditApi.middleware,
            HeaderApi.middleware
        ),
})
