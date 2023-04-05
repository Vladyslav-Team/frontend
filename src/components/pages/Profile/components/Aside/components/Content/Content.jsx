import React from "react"
import styles from "./Content.module.css"
import {Proof} from "./components/Proof"

const Content = () => {
    return (
        <div className={styles.wrapper}>
            <Proof />
            <Proof />
            <Proof />
            <Proof />
        </div>
    )
}

export {Content}
