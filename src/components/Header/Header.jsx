import React from "react"
import {Logo} from "./Logo"
import styles from "./Header.module.css"
import {NavLink} from "react-router-dom"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo_wrap}>
                <NavLink to="/talents">
                    <Logo />
                </NavLink>
            </div>
            <div className={styles.button_wrap}>
                <NavLink className={styles.button_in} to="/talents/signup">
                    SIGN UP
                </NavLink>
                <NavLink className={styles.button_in} to="/talents/login">
                    LOG IN
                </NavLink>
            </div>
        </header>
    )
}

export {Header}
