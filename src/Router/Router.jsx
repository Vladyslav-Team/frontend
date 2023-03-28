import React from "react"
import {Route, Routes} from "react-router-dom"
import {Main} from "../components/Main"
import {SignUp} from "../components/pages/SignUp"
import {Endpoints} from "../shared/api/constants/endpoints"

const Router = () => {
    return (
        <Routes>
            <Route index path="/" element={<Main />} />
            <Route path={`${Endpoints.GET_ALL_TALENTS}`}>
                <Route index path="*" element={<Main />} />
                <Route path={"signup"} element={<SignUp />} />
                <Route
                    path={`${Endpoints.POST_TALENT_LOGIN}`}
                    element={<h1>Log in</h1>}
                />
            </Route>
            <Route path="*" element={<h1>Error Page</h1>} />
        </Routes>
    )
}

export {Router}
