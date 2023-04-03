import React from "react"
import {Avatar} from "./components/Avatar"
import {VisitButton} from "./components/VisitButton"
import PropTypes from "prop-types"
import styles from "./TalentCard.module.css"
import {SigninPopupContext} from "../../../../../context"
const TalentCard = ({talent}) => {
    return (
        <div className={styles.card}>
            <div className={styles.background}>
                <Avatar avatar={talent.image} />
            </div>
            <div className={styles.content}>
                <div>{`${talent.name} ${talent.surname}`}</div>
                <div className={styles.location}>{talent.location}</div>
                <div className={styles.proof}>{talent.experience}</div>
            </div>

            <SigninPopupContext.Consumer>
                {({setVisibilitySigninPopup}) => (
                    <VisitButton
                        setVisibilitySigninPopup={setVisibilitySigninPopup}
                        id={talent.id}
                    />
                )}
            </SigninPopupContext.Consumer>
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
