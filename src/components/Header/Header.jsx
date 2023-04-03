import React from "react"
import {Logo} from "./components/Logo"
import styles from "./Header.module.css"
import {NavLink} from "react-router-dom"
import {Endpoints} from "../../shared/api/constants/endpoints"
import {useNavigate} from "react-router-dom"
import {useLocation} from "react-router-dom"
import {Avatar} from "../Avatar"
import {ArrowButton} from "./components/ArrowButton"

const Header = ({isRegistered}) => {
    let location = useLocation()
    const navigate = useNavigate()
    const isSignup =
        location.pathname === "/talents/signup" || location.pathname === "/talents/login"

    return (
        <header className={styles.header}>
            <div className={styles.logo_wrap}>
                <NavLink
                    to={`${Endpoints.GET_ALL_TALENTS}`}
                    onClick={() => navigate("/talents")}>
                    <Logo />
                </NavLink>
            </div>
            {isSignup ? (
                <></>
            ) : (
                <div className={styles.button_wrap}>
                    {isRegistered ? (
                        <>
                            <NavLink to={`${Endpoints.GET_TALENT_BY_ID}/id`}>
                                <Avatar avatar={""} size={40} style={styles.avatar} />
                            </NavLink>
                            <ArrowButton />
                        </>
                    ) : (
                        <>
                            <NavLink className={styles.button_in} to="/talents/signup">
                                SIGN UP
                            </NavLink>
                            <NavLink
                                className={styles.button_in}
                                to={`${Endpoints.POST_TALENT_LOGIN}`}>
                                LOG IN
                            </NavLink>
                        </>
                    )}
                </div>
            )}
        </header>
    )
}

export {Header}
