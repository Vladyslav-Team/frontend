import React from "react"
import {Route, Routes} from "react-router-dom"
import {Main} from "../components/Main"
import {SignUp} from "../components/pages/SignUp"
import {LoginPopup} from "../components/LoginPopup"
import {Endpoints} from "../shared/api/constants/endpoints"
import {PageNotFound} from "../components/404"

const Router = () => {
    return (
        <Routes>
            <Route index path="/" element={<Main />} />
            <Route path={`${Endpoints.GET_ALL_TALENTS}`}>
                <Route path="" element={<Main url={"talents?page"} type={"Talents"} />} />
                <Route path={"signup"} element={<SignUp />} />
                <Route path={`${Endpoints.POST_TALENT_LOGIN}`} element={<LoginPopup />} />
            </Route>
            <Route path={"/proofs"}>
                <Route path="" element={<Main url={"proofs?page"} type={"Proofs"} />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export {Router}
