import React from "react"
import PropTypes from "prop-types"
import styles from "./VisitButton.module.css"

import {useJwtCheck} from "../../../../../../../shared/api/hooks"
import {useNavigate} from "react-router-dom"

const VisitButton = ({setVisibilitySigninPopup, id, to = "profile", text = "Visit"}) => {
    const {data} = useJwtCheck()
    const navigate = useNavigate()
    const handleClick = () => {
        if (data) {
            navigate(`/${to}/${id}${to === "profile" ? "?page=1" : ""}`)
        } else {
            setVisibilitySigninPopup({status: true, id: id, type: "proof"})
        }
    }
    return (
        <>
            <button className={styles.visitButton} onClick={handleClick}>
                <span className={styles.link}>{text}</span>
            </button>
        </>
    )
}

VisitButton.propTypes = {
    id: PropTypes.number,
}

export {VisitButton}
