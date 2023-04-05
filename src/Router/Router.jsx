import React from "react"
import {Navigate, Route, Routes} from "react-router-dom"
import {Main} from "../components/Main"
import {SignUp} from "../components/pages/SignUp"
import {SigninPopup} from "../components/SigninPopup"
import {Endpoints} from "../shared/api/constants/endpoints"
import {PageNotFound} from "../components/404"
import {Profile} from "../components/pages/Profile"

const Router = ({isRegistered}) => {
    return (
        <Routes>
            <Route index path="/" element={<Main />} />
            <Route path={`${Endpoints.GET_ALL_TALENTS}`}>
                <Route path="" element={<Main url={"talents?page"} type={"Talents"} />} />
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
                    path={`${Endpoints.POST_TALENT_SIGNIN}`}
                    element={
                        isRegistered ? (
                            <Navigate to={`${Endpoints.GET_ALL_TALENTS}`} />
                        ) : (
                            <SigninPopup />
                        )
                    }
                />
            </Route>
            <Route path={"/proofs"}>
                <Route path="" element={<Main url={"proofs?page"} type={"Proofs"} />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export {Router}
