import React from "react"
import {VisitButton} from "./components/VisitButton"
import PropTypes from "prop-types"
import styles from "./TalentCard.module.css"
import {Avatar} from "../../../Avatar"

const TalentCard = ({talent}) => {
    return (
        <div className={styles.card}>
            <div className={styles.background}>
                <Avatar avatar={talent.image} size={70} />
            </div>
            <div className={styles.content}>
                <div>{`${talent.name} ${talent.surname}`}</div>
                <div className={styles.location}>{talent.location}</div>
                <div className={styles.proof}></div>
            </div>
            <VisitButton id={talent.id} />
        </div>
    )
}

TalentCard.propTypes = {
    talent: PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string,
        name: PropTypes.string,
        surname: PropTypes.string,
        location: PropTypes.string,
    }),
}

export {TalentCard}
