import React from "react"
import {Route, Routes} from "react-router-dom"
import {Main} from "../components/Main"
import {SignUp} from "../components/pages/SignUp"
import {SigninPopup} from "../components/SigninPopup"
import {Endpoints} from "../shared/api/constants/endpoints"
import {PageNotFound} from "../components/404"

const Router = () => {
    return (
        <Routes>
            <Route index path="/" element={<Main />} />
            <Route path={`${Endpoints.GET_ALL_TALENTS}`}>
                <Route path="" element={<Main />} />
                <Route path={"signup"} element={<SignUp />} />
                <Route
                    path={`${Endpoints.POST_TALENT_SIGNIN}`}
                    element={<SigninPopup />}
                />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export {Router}
