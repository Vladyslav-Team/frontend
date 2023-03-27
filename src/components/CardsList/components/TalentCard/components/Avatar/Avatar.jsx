import React from "react"
import PropTypes from "prop-types"
import styles from "./Avatar.module.css"

const Avatar = ({avatar}) => {
    return (
        <div className={styles.wrapper}>
            {avatar && <img src={avatar} alt="avatar" className={styles.avatar} />}
        </div>
    )
}

Avatar.propTypes = {
    avatar: PropTypes.string,
}

export {Avatar}
