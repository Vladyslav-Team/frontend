import React from "react"
import {Navigate, Route, Routes} from "react-router-dom"
import {Main} from "../components/Main"
import {SignUp} from "../components/pages/SignUp"
import {SigninPopup} from "../components/SigninPopup"
import {Endpoints} from "../shared/api/constants/endpoints"
import {EditPage} from "./../components/EditPage/EditPage"
import {PageNotFound} from "../components/404"
import {Profile} from "../components/pages/Profile"
import {Proof} from "../components/Proof"

const Router = ({isRegistered}) => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path={`${Endpoints.GET_ALL_TALENTS}`}>
                <Route path="" element={<Main url={"talents?page"} type={"talents"} />} />
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

            <Route path={"/profile"}>
                <Route path={":talentId"} element={<Profile />} />
                <Route path=":talentId/edit" element={<EditPage />} />
            </Route>

            <Route path={"/proofs"}>
                <Route path="" element={<Main url={"proofs?page"} type={"proofs"} />} />
            </Route>
            <Route path={"/proof"}>
                <Route path={":talentId"} element={<Proof />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export {Router}
