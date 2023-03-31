import React from "react"
import PropTypes from "prop-types"
import styles from "./VisitButton.module.css"

import {useJwtCheck} from "../../../../../../../shared/api/hooks"
import {useNavigate} from "react-router-dom"

const VisitButton = ({setVisibilityLoginPopup, id}) => {
    const {data} = useJwtCheck()
    const navigate = useNavigate()
    const handleClick = () => {
        if (data) {
            navigate(`/profile/${id}`)
        } else {
            setVisibilityLoginPopup(true)
        }
    }
    return (
        <>
            <button className={styles.visitButton} onClick={handleClick}>
                <span className={styles.link}>Visit</span>
            </button>
        </>
    )
}

VisitButton.propTypes = {
    id: PropTypes.number,
}

export {VisitButton}
