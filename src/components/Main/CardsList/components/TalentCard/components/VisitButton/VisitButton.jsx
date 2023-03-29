import React from "react"
import PropTypes from "prop-types"
import styles from "./VisitButton.module.css"

const VisitButton = ({setVisibilityLoginPopup}) => {
    return (
        <>
            <button
                className={styles.visitButton}
                onClick={() => setVisibilityLoginPopup(true)}>
                <span className={styles.link}>Visit</span>
            </button>
        </>
    )
}

VisitButton.propTypes = {
    id: PropTypes.number,
}

export {VisitButton}
