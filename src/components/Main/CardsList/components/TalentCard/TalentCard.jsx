import React from "react"
import {Avatar} from "../../../../Avatar"
import {VisitButton} from "./components/VisitButton"
import PropTypes from "prop-types"
import {SigninPopupContext} from "../../../../../context"
import {Box, Grid, Chip} from "@mui/material"
import {useTheme} from "@emotion/react"

const TalentCard = ({talent}) => {
    const {palette} = useTheme()

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
                    height: "48px",
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
                    padding: "28px 8px 6px",
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
                        mt: 2,
                        height: "80px",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "4px",
                    }}>
                    {talent.skills &&
                        talent.skills.slice(0, 6).map((skill) => {
                            return (
                                <Chip
                                    size="small"
                                    label={skill.title}
                                    key={skill.id}
                                    sx={{
                                        bgcolor: palette.primary.main,
                                        color: "#ffffff",
                                        fontSize: "12px",
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
