import React from "react"
import PropTypes from "prop-types"
import styles from "./Avatar.module.css"
import avatarIncognito from "../../source/img/avatarIncognito.png"

const Avatar = ({avatar, size, style}) => {
    const sizeStyle = {width: `${size}px`, height: `${size}px`}

    const handleError = (e) => {
        e.target.src = avatarIncognito
    }

    return (
        <div className={`${styles.wrapper}`} style={sizeStyle}>
            <img
                src={avatar || avatarIncognito}
                alt="avatar"
                className={`${style} ${styles.avatar} `}
                onError={handleError}
                style={sizeStyle}
            />
        </div>
    )
}

Avatar.propTypes = {
    avatar: PropTypes.string,
    size: PropTypes.number,
    style: PropTypes.string,
}

export {Avatar}
