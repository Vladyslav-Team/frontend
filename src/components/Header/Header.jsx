import React from "react"
import {Logo} from "./components/Logo"
import styles from "./Header.module.css"
import {NavLink} from "react-router-dom"
import {Endpoints} from "../../shared/api/constants/endpoints"
import {useLocation} from "react-router-dom"
import {Avatar} from "../Avatar"
import {ArrowButton} from "./components/ArrowButton"
import {useJwtCheck} from "../../shared/api/hooks"

const Header = ({isRegistered}) => {
    const {data} = useJwtCheck()
    console.log(data)
    let location = useLocation()
    const isSignup =
        location.pathname === "/talents/signup" || location.pathname === "/talents/signin"

    const isTalentsPage = location.pathname === "/talents"
    const isProofsPage = location.pathname === "/proofs"

    return (
        <header className={styles.header}>
            <div className={styles.logo_wrap}>
                <NavLink to={"/talents?page=1"}>
                    <Logo />
                </NavLink>
            </div>
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <NavLink to={`${Endpoints.GET_ALL_TALENTS}`}>
                            <span
                                className={`${styles.navItem} ${
                                    isTalentsPage && styles.active
                                }`}>
                                Talents
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/proofs"}>
                            <span
                                className={`${styles.navItem} ${
                                    isProofsPage && styles.active
                                }`}>
                                Proofs
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            {isSignup ? (
                <></>
            ) : (
                <div className={styles.button_wrap}>
                    {data ? (
                        <>
                            <NavLink to={`${"profile"}/${data.id}`}>
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
                                to={`${Endpoints.POST_TALENT_SIGNIN}`}>
                                SIGN IN
                            </NavLink>
                        </>
                    )}
                </div>
            )}
        </header>
    )
}

export {Header}
