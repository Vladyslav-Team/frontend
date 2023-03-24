import React from "react"
import {useState} from "react"
import styles from "./VisitButton.module.css"

const VisitButton = () => {
    const [isRegistered] = useState(false)
    const [, setShowLogin] = useState(false)

    const handleClick = () => {
        if (!isRegistered) {
            setShowLogin(true)
        } else {
            // go to talent profile
        }
    }

    return (
        <>
            {/* {showLogin && <LogIn />} */}
            <button className={styles.visitButton} onClick={handleClick}>
                Visit
            </button>
        </>
    )
}

export {VisitButton}
