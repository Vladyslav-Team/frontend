import React from "react"
import {Box, Grid, Tooltip, Typography} from "@mui/material"
import Unlike from "../../img/unlike.png"
import Like from "../../img/like.png"
import {useLocation} from "react-router-dom"
import {useTheme} from "@emotion/react"

const SponsorKudoses = React.memo(({KudosInfo, isHaveSkills, isDraft = false}) => {
    const {pathname} = useLocation()
    const isProfile = pathname.split("/")[1] === "profile"
    const {palette} = useTheme()

    return (
        <>
            {isHaveSkills && !isDraft && (
                <Tooltip
                    title={
                        isHaveSkills && (
                            <Grid container justifyContent="center" alignItems="center">
                                <Typography
                                    paddingLeft={1}
                                    paddingTop={1}
                                    sx={{fontSize: "13px"}}>
                                    {KudosInfo.isSuccess &&
                                        KudosInfo.data.amount_of_kudos_current_user}
                                </Typography>
                            </Grid>
                        )
                    }
                    arrow>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: isProfile ? "flex-end" : "space-around",
                            pr: isProfile ? 3 : 0,
                        }}>
                        <Box
                            sx={{
                                height: "28px",
                                width: "28px",
                                marginRight: "3px",
                            }}>
                            <img
                                style={{
                                    height: "28px",
                                    width: "28px",
                                    marginRight: "3px",
                                }}
                                src={palette.mode === "dark" ? Like : Unlike}
                                alt="Unlike"
                            />
                        </Box>
                        <Box sx={{fontSize: "18px"}}>
                            {KudosInfo.data && KudosInfo.data.amount_of_kudos}
                        </Box>
                    </Box>
                </Tooltip>
            )}
        </>
    )
})

SponsorKudoses.displayName = "SponsorKudoses"

export {SponsorKudoses}
