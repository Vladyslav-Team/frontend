import React from "react"
import styles from "./Post.module.css"

const Post = () => {
    return (
        <div className={styles.wrapper}>
            <h3>Title</h3>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, rem
                dolores eligendi harum perspiciatis eveniet magni error rerum temporibus
                quos alias illo quasi, vero dicta accusamus debitis, necessitatibus
                tempore ea.
            </div>
        </div>
    )
}

export {Post}
