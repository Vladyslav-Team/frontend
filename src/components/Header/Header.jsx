import React from "react"
import {Logo} from "./Logo"
import styles from "./Header.module.css"
import {NavLink} from "react-router-dom"
import {Endpoints} from "../../shared/api/constants/endpoints"
import {useNavigate} from "react-router-dom"
import {useLocation} from "react-router-dom"
const Header = () => {
    let location = useLocation()
    const navigate = useNavigate()
    const isSignup =
        location.pathname === "/talents/signup" || location.pathname === "/talents/signin"

    return (
        <header className={styles.header}>
            <div className={styles.logo_wrap}>
                <NavLink to={"/talents?page=1"}>
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
                        to={`${Endpoints.POST_TALENT_SIGNIN}`}>
                        SIGN IN
                    </NavLink>
                </div>
            )}
        </header>
    )
}

export {Header}
