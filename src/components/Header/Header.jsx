import React from "react"
import {Logo} from "./components/Logo"
import styles from "./Header.module.css"
import {NavLink, useLocation} from "react-router-dom"
import PropTypes from "prop-types"
import {Endpoints} from "../../shared/api/constants/endpoints"
import {Avatar} from "../Avatar"
import {ArrowButton} from "./components/ArrowButton"

const Header = ({isRegistered}) => {
    const {pathname} = useLocation()
    let isSigUpPage = pathname === "/talents/signup"

    return (
        <header className={styles.header}>
            <div className={styles.logo_wrap}>
                <NavLink to={`${Endpoints.GET_ALL_TALENTS}`}>
                    <Logo />
                </NavLink>
            </div>
            {isSigUpPage ? (
                <></>
            ) : (
                <div className={styles.button_wrap}>
                    {isRegistered ? (
                        <>
                            <NavLink to={`${Endpoints.GET_TALENT_BY_ID}`}>
                                <Avatar avatar={""} size={50} style={styles.avatar} />
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

Header.propTypes = {
    image: PropTypes.string,
}

export {Header}
