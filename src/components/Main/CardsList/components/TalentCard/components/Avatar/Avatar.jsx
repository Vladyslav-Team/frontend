import React from "react"
import PropTypes from "prop-types"
import styles from "./Avatar.module.css"
import avatarIncognito from "../../../../../../../source/img/avatarIncognito.png"

const Avatar = ({avatar, size = 58}) => {
    const handleError = (e) => {
        e.target.src = avatarIncognito
    }

    return (
        <div
            style={{
                width: size,
                height: size,
            }}
            className={styles.wrapper}>
            <img
                src={avatar || avatarIncognito}
                alt="avatar"
                className={styles.avatar}
                onError={handleError}
                style={{
                    width: size,
                    height: size,
                }}
            />
        </div>
    )
}

Avatar.propTypes = {
    avatar: PropTypes.string,
}

export {Avatar}
