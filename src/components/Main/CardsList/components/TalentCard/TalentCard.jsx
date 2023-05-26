import React from "react"
import {Avatar} from "../../../../Avatar"
import {VisitButton} from "./components/VisitButton"
import PropTypes from "prop-types"
import styles from "./TalentCard.module.css"
import {SigninPopupContext} from "../../../../../context"
import {Chip} from "@mui/material"
import {useNavigate} from "react-router-dom"

const TalentCard = ({talent}) => {
    const navigate = useNavigate()
    const filterSkillsOnURL =
        window.location.href.split("&")[1] &&
        window.location.href.split("&")[1].split("=")[1].split(",")
    let result = new Set()
    talent.skills.map((el) => {
        return (
            filterSkillsOnURL &&
            filterSkillsOnURL
                .map((skills) => {
                    if (skills === el.title) {
                        result.add(el.title)
                    }
                })
                .filter((el) => el !== undefined)
        )
    })
    talent.skills && talent.skills.filter((el) => el[0] !== undefined)

    talent.skills.map((el) => {
        result.add(el.title)
    })

    const onClickSkils = (skill) => {
        if (
            window.location.href.split("&")[1] &&
            window.location.href.split("&")[1].split("=")[1].split(",").length < 4
        ) {
            if (
                !window.location.href
                    .split("&")[1]
                    .split("=")[1]
                    .split(",")
                    .includes(skill)
            ) {
                navigate(
                    `${location.pathname}?page=${1}&filterBySkills=${
                        window.location.href.split("&")[1].split("=")[1] &&
                        window.location.href.split("&")[1].split("=")[1] !== "nofilter"
                            ? window.location.href
                                  .split("&")[1]
                                  .split("=")[1]
                                  .split(",") +
                              "," +
                              skill
                            : skill
                    }`
                )
            }
        }
    }

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
                        Array.from(result)
                            .slice(0, 4)
                            .map((skill, i) => {
                                return (
                                    <Chip
                                        size="small"
                                        label={skill}
                                        onClick={() => onClickSkils(skill)}
                                        key={i}
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
