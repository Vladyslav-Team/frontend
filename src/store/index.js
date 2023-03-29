import {configureStore} from "@reduxjs/toolkit"
import {api} from "../components/Main/Pagination/api/services"
import pageSlice from "../components/Main/Pagination/slices/pageSlice"
export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        page: pageSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})
