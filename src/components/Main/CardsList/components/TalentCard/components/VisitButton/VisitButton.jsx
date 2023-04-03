import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import styles from "./VisitButton.module.css"
import {Endpoints} from "../../../../../../../shared/api/constants/endpoints"
import {NavLink} from "react-router-dom"

const VisitButton = ({setVisibilityLoginPopup}) => {
    const [isRegistered] = useState(true)
    const [endpoint, setEndpoint] = useState("")

    const handleClick = () => {
        if (!isRegistered) {
            setEndpoint(`${Endpoints.POST_TALENT_LOGIN}`)
            setVisibilityLoginPopup(true)
        } else {
            setEndpoint(`${Endpoints.GET_TALENT_BY_ID}/id`)
        }
    }

    useEffect(() => {
        handleClick()
    })

    return (
        <>
            <button className={styles.visitButton} onClick={handleClick}>
                <NavLink className={styles.link} to={endpoint}>
                    <span>Visit</span>
                </NavLink>
            </button>
        </>
    )
}

VisitButton.propTypes = {
    id: PropTypes.number,
}

export {VisitButton}
