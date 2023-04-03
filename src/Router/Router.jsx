import React from "react"
import {Navigate, Route, Routes} from "react-router-dom"
import {Main} from "../components/Main"
import {SignUp} from "../components/pages/SignUp"
import {LoginPopup} from "../components/LoginPopup"
import {Endpoints} from "../shared/api/constants/endpoints"
import {PageNotFound} from "../components/404"
import {Profile} from "../components/pages/Profile"

const Router = ({isRegistered}) => {
    return (
        <Routes>
            <Route index path="/" element={<Main />} />
            <Route path={`${Endpoints.GET_ALL_TALENTS}`}>
                <Route path="" element={<Main />} />
                <Route path={`${Endpoints.GET_TALENT_BY_ID}/id`} element={<Profile />} />
                <Route
                    path={"signup"}
                    element={
                        isRegistered ? (
                            <Navigate to={`${Endpoints.GET_ALL_TALENTS}`} />
                        ) : (
                            <SignUp />
                        )
                    }
                />
                <Route
                    path={`${Endpoints.POST_TALENT_LOGIN}`}
                    element={
                        isRegistered ? (
                            <Navigate to={`${Endpoints.GET_ALL_TALENTS}`} />
                        ) : (
                            <LoginPopup />
                        )
                    }
                />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export {Router}
