import React from "react"
import {useState, useEffect} from "react"
import PropTypes from "prop-types"
import styles from "./VisitButton.module.css"
import {NavLink} from "react-router-dom"
import {Endpoints} from "../../../../../../shared/api/constants/endpoints"

const VisitButton = ({id}) => {
    const [isRegistered] = useState(false)
    const [endpoint, setEndpoint] = useState("")

    const handleClick = () => {
        if (!isRegistered) {
            setEndpoint(`${Endpoints.POST_TALENT_LOGIN}`)
        } else {
            setEndpoint(`${Endpoints.GET_TALENT_BY_ID}/${id}`)
        }
    }

    useEffect(() => {
        handleClick()
    })

    return (
        <>
            <button className={styles.visitButton} onClick={handleClick}>
                <NavLink className={styles.link} to={endpoint}>
                    Visit
                </NavLink>
            </button>
        </>
    )
}

VisitButton.propTypes = {
    id: PropTypes.number,
}

export {VisitButton}
