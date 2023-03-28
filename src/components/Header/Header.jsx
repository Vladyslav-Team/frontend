import React from "react"
import {Logo} from "./Logo"
import styles from "./Header.module.css"
import {NavLink} from "react-router-dom"
import {Endpoints} from "../../shared/api/constants/endpoints"
import {useSelector} from "react-redux"
import {useLocation} from "react-router-dom"
const Header = () => {
    const page = useSelector((state) => state.page.value)
    let location = useLocation()
    const isSignup =
        location.pathname === "/talents/signup" || location.pathname === "/talents/login"
    return (
        <header className={styles.header}>
            <div className={styles.logo_wrap}>
                <NavLink to={`${Endpoints.GET_ALL_TALENTS}?page=${page}`}>
                    <Logo />
                </NavLink>
            </div>
            {!isSignup && (
                <div className={styles.button_wrap}>
                    <NavLink className={styles.button_in} to="/talents/signup">
                        SIGN UP
                    </NavLink>
                    <NavLink
                        className={styles.button_in}
                        to={`${Endpoints.POST_TALENT_LOGIN}`}>
                        LOG IN
                    </NavLink>
                </div>
            )}
        </header>
    )
}

export {Header}
