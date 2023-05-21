import React from "react"
import {Avatar} from "../../../../Avatar"
import {VisitButton} from "./components/VisitButton"
import PropTypes from "prop-types"
import styles from "./TalentCard.module.css"
import {SigninPopupContext} from "../../../../../context"
import {Chip} from "@mui/material"

const TalentCard = ({talent}) => {
    return (
        <div className={styles.card}>
            <div className={styles.background}>
                <Avatar avatar={talent.image} size={58} />
            </div>
            <div className={styles.content}>
                <div>{`${talent.name} ${talent.surname}`}</div>
                <div className={styles.location}>{talent.location}</div>
                <span>{talent.experience}</span>
                <div className={styles.proof}>
                    {talent.skills &&
                        talent.skills.slice(0, 10).map((skill) => {
                            return (
                                <Chip
                                    size="small"
                                    label={skill.title}
                                    key={skill.id}
                                    sx={{
                                        bgcolor: "rgba(10, 110, 154,1)",
                                        color: "#ffffff",
                                        fontSize: "12px",
                                    }}
                                />
                            )
                        })}
                </div>
            </div>
            <SigninPopupContext.Consumer>
                {({setVisibilitySigninPopup}) => (
                    <VisitButton
                        setVisibilitySigninPopup={setVisibilitySigninPopup}
                        id={talent.id}
                        to="profile"
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
