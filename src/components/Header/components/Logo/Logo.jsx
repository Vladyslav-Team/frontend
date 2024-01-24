import React from "react"
import styles from "./Logo.module.css"

const Logo = () => {
    return (
        <div className={styles.logo} data-testid="logo">
            <p>SkillScope</p>
        </div>
    )
}

export {Logo}
