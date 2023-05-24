import React from "react"
import {Box, Grid, Tooltip, Typography} from "@mui/material"
import Unlike from "../../img/unlike.png"

const SponsorKudoses = ({KudosInfo}) => {
    return (
        <Tooltip
            title={
                <Grid
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    padding={"5px"}>
                    <Typography
                        paddingLeft={"2px"}
                        paddingTop={"2px"}
                        sx={{fontSize: "13px"}}>
                        {KudosInfo.isSuccess
                            ? KudosInfo.data.amount_of_kudos_current_user
                            : ""}
                    </Typography>
                </Grid>
            }
            arrow>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",

                    justifyContent: "space-around",
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
                        src={Unlike}
                    />
                </Box>
                <Box sx={{fontSize: "18px"}}>{`${
                    KudosInfo.data && KudosInfo.data.amount_of_kudos
                }`}</Box>
            </Box>
        </Tooltip>
    )
}

export {SponsorKudoses}
