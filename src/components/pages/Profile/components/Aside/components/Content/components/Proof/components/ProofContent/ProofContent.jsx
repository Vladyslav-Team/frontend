import React from "react"
import {CardContent, Grid, Typography} from "@mui/material"

const ProofContent = ({title, data, description}) => {
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
        </CardContent>
    )
}

export {ProofContent}
