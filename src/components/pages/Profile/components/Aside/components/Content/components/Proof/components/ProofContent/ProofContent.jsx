import React from "react"
import {CardContent, Grid, Typography} from "@mui/material"
import Tooltip from "@mui/material/Tooltip"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import {ProofSkills} from "../ProofActivity/components"

const Time = ({time}) => {
    return (
        <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"5px"}>
            <AccessTimeIcon sx={{width: "17px"}} />
            <Typography paddingLeft={"2px"} paddingTop={"2px"} sx={{fontSize: "13px"}}>
                {time}
            </Typography>
        </Grid>
    )
}

const ProofContent = ({title, data, description, publication_date, proofId}) => {
    const time = publication_date && publication_date.split(" ")[0]
    const date = publication_date && publication_date.split(" ")[1]

    return (
        <CardContent sx={{flex: "1 0 auto"}}>
            <Grid
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                flex={"1 0 auto"}>
                <Typography gutterBottom variant="h5" noWrap={true} maxWidth={"60%"}>
                    {title}
                </Typography>
                <Typography gutterBottom variant="h8">
                    {data}
                </Typography>
            </Grid>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
            <Tooltip title={<Time time={time} />} arrow>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    position={"absolute"}
                    bottom={"15px"}
                    left="30%">
                    {date}
                </Typography>
            </Tooltip>
        </CardContent>
    )
}

export {ProofContent}
