import {configureStore} from "@reduxjs/toolkit"
import {api} from "../components/Main/Pagination/api/services"
import {authenticationApi} from "../shared/api/services/authentication"
import pageSlice from "../components/Main/Pagination/slices/pageSlice"

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        [authenticationApi.reducerPath]: authenticationApi.reducer,
        page: pageSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware, authenticationApi.middleware),
})
