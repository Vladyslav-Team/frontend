import {Box, Typography} from "@mui/material"
import React from "react"
import {Chart, statistic} from "./snippets"

const Rules = () => {
    return (
        <>
            {!statistic[0] ? (
                <Box sx={{color: "#000000"}}>
                    <Typography
                        textAlign={"center"}
                        variant="h4"
                        fontWeight={"800"}
                        paddingBottom={"5px"}>
                        {"Let's start farming Kudos"}
                    </Typography>
                    <Typography
                        textAlign={"center"}
                        variant="h5"
                        fontWeight={"800"}
                        paddingBottom={"5px"}>
                        {"Rules"}
                    </Typography>
                    <Typography variant="body1">
                        1. Press the Kudos button as fast as possible for a set amount of
                        time (e.g., 1 minute). <br />
                        2. For each press of the Kudos button, you will receive points.
                        <br />
                        3. At the end of the time period (e.g. after 1 minute), the sum of
                        all points you have earned will be tallied and entered into the
                        results table.
                        <br />
                        4. You can participate in Kudos farming only once per day. After
                        that, you will be able to use the farming feature again on the
                        next day, or pay $5.99 to reset the timer.
                        <br />
                    </Typography>
                </Box>
            ) : (
                <>
                    <Chart />
                </>
            )}
        </>
    )
}

export {Rules}
