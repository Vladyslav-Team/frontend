import React from "react"
import styles from "./Content.module.css"
import {Post} from "./components"

const Content = () => {
    return (
        <div className={styles.wrapper}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export {Content}
