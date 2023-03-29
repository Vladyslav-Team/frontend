import React from "react"
import PropTypes from "prop-types"
import styles from "./Avatar.module.css"

const Avatar = ({avatar, size, style}) => {
    const sizeStyle = {width: `${size}px`, height: `${size}px`}

    return (
        <div className={`${styles.wrapper} ${style}`} style={sizeStyle}>
            {avatar && (
                <img
                    src={avatar}
                    alt="avatar"
                    className={styles.avatar}
                    style={sizeStyle}
                />
            )}
        </div>
    )
}

Avatar.propTypes = {
    avatar: PropTypes.string,
    size: PropTypes.number,
    style: PropTypes.string,
}

export {Avatar}
