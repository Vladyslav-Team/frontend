import React from "react"
import {CardContent, Grid, Typography} from "@mui/material"

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
                <Typography gutterBottom variant="h5" noWrap={true} maxWidth={"65%"}>
                    {title}
                </Typography>
            </Grid>
            <Grid sx={{maxHeight: "100px", overflow: "hidden"}}>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </Grid>
        </CardContent>
    )
}

export {ProofContent}
