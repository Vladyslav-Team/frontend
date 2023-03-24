import React from "react"
import {Logo} from "./Logo"
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo_wrap}>
                <Logo />
            </div>
            <div className={styles.button_wrap}>
                <button className={styles.button_in}>SIGN UP</button>
                <button className={styles.button_in}>LOG IN</button>
            </div>
        </header>
    )
}

export {Header}
