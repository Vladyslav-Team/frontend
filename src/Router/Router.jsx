import React from "react"
import {Route, Routes} from "react-router-dom"
import {Main} from "../components/Main"
import {SignUp} from "../components/pages/SignUp"
import {LoginPopup} from "../components/LoginPopup"
import {Endpoints} from "../shared/api/constants/endpoints"
import {EditPage} from "./../components/EditPage/EditPage"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path={`${Endpoints.GET_ALL_TALENTS}`}>
                <Route path="" element={<Main />} />
                <Route path={"signup"} element={<SignUp />} />
                <Route path={`${Endpoints.POST_TALENT_LOGIN}`} element={<LoginPopup />} />
            </Route>
            <Route index path="profile/5/edit" element={<EditPage />} />
        </Routes>
    )
}

export {Router}
