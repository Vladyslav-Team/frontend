import React from "react"
import {Route, Routes} from "react-router-dom"
import {CardsList} from "../components/CardsList"
import {LoginPopup} from "../components/LoginPopup"
import {Endpoints} from "../shared/api/constants/endpoints"

const Router = () => {
    return (
        <Routes>
            <Route path={`${Endpoints.GET_ALL_TALENTS}`}>
                <Route index element={<CardsList />} />
                <Route path={"signup"} element={<h1>Sign up</h1>} />
                <Route path={`${Endpoints.POST_TALENT_LOGIN}`} element={<LoginPopup />} />
            </Route>
            <Route path="*" element={<h1>Error Page</h1>} />
        </Routes>
    )
}

export {Router}
