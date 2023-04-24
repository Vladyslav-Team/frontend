import React from "react"
import {Route, Routes} from "react-router-dom"
import {Main} from "../components/Main"
import {SignUp} from "../components/pages/SignUp"
import {SigninPopup} from "../components/SigninPopup"
import {Endpoints} from "../shared/api/constants/endpoints"
import {EditPage} from "./../components/EditPage/EditPage"
import {PageNotFound} from "../components/404"
import {Profile} from "../components/pages/Profile"
import {EditProofPage} from "../components/EditProofPage/EditProofPage"
import {ProofAllInfo} from "../components/Proof"

const Router = ({AvatarIMG}) => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path={`${Endpoints.GET_ALL_TALENTS}`}>
                <Route path="" element={<Main url={"talents?page"} type={"talents"} />} />
                <Route path={"signup"} element={<SignUp AvatarIMG={AvatarIMG} />} />
                <Route
                    path={`${Endpoints.POST_TALENT_SIGNIN}`}
                    element={<SigninPopup AvatarIMG={AvatarIMG} />}
                />
            </Route>
            <Route path={"/profile"}>
                <Route path={":talentId"} element={<Profile />} />
                <Route
                    path=":talentId/edit"
                    element={<EditPage AvatarIMG={AvatarIMG} />}
                />
            </Route>
            <Route path={"/proofs"}>
                <Route path="" element={<Main url={"proofs?page"} type={"proofs"} />} />
            </Route>
            <Route path={"/proof"}>
                <Route path={":proofId"} element={<ProofAllInfo />} />
            </Route>
            <Route
                path={"profile/:talentId/proof/:proofId/edit"}
                element={<EditProofPage />}
            />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export {Router}
