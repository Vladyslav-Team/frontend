import React from "react"
import {Avatar} from "../../../../Avatar"
import {VisitButton} from "./components/VisitButton"
import PropTypes from "prop-types"
import {SigninPopupContext} from "../../../../../context"
import {Box, Grid, Chip} from "@mui/material"
import {useTheme} from "@emotion/react"
import {useNavigate} from "react-router-dom"

const TalentCard = ({talent}) => {
    const navigate = useNavigate()
    const {palette} = useTheme()
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
        <Grid
            container
            sx={{
                position: "relative",
                width: "230px",
                height: "290px",
                flexDirection: "column",
                color: palette.primary.main,
                textAlign: "center",
                fontSize: "14px",
                border: `1px solid ${palette.primary.main}`,
                borderRadius: "8px",
                boxShadow: "0 0 10px 4px rgba(0, 0, 0, 0.25)",
                overflow: "hidden",
                bgcolor: palette.neutral.secondary,
            }}>
            <Box
                sx={{
                    width: "100%",
                    height: "45px",
                    backgroundColor: palette.primary.main,
                }}>
                <Avatar avatar={talent.image} size={58} />
            </Box>
            <Grid
                container
                sx={{
                    flex: "1 0 auto",
                    flexDirection: "column",
                    alignContent: "center",
                    padding: "27px 8px 6px",
                    "& > * ": {
                        mt: "3px",
                        fontSize: "14px",

                        textOverflow: "ellipsis",
                        maxWidth: "200px",
                        overflow: "hidden",
                    },
                }}>
                <Box sx={{fontWeight: "bold"}}>{`${talent.name} ${talent.surname}`}</Box>
                <Box>{talent.location}</Box>
                <Box sx={{wordBreak: "normal", textOverflow: "ellipsis"}}>
                    {talent.experience}
                </Box>
                <Box
                    sx={{
                        mt: 1,
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "4px",
                    }}>
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
                                            bgcolor: palette.primary.main,
                                            color: "#ffffff",
                                            fontSize: "12px",
                                            "&:hover": {
                                                backgroundColor: "#bdbdbd",
                                            },
                                        }}
                                    />
                                )
                            })}
                </Box>
            </Grid>
            <SigninPopupContext.Consumer>
                {({setVisibilitySigninPopup}) => (
                    <VisitButton
                        setVisibilitySigninPopup={setVisibilitySigninPopup}
                        id={talent.id}
                        to="profile"
                    />
                )}
            </SigninPopupContext.Consumer>
        </Grid>
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
