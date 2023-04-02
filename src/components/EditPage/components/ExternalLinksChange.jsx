import React from "react"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import {Controller} from "react-hook-form"

const Link = ({name, control}) => {
    return (
        <Grid
            item
            display="flex"
            flexDirection={"column"}
            marginTop={2}
            paddingRight={"50px"}>
            <Controller
                name={name}
                control={control}
                render={({field}) => (
                    <TextField placeholder={name} sx={{width: "100%"}} {...field} />
                )}
            />
        </Grid>
    )
}

const ExternalLinksChange = ({control}) => {
    return (
        <>
            <Link name={"GitHub"} control={control} />
            <Link name={"LinkedIn"} control={control} />
            <Link name={"Twitter"} control={control} />
            <Link name={"Instagram"} control={control} />
        </>
    )
}

export {ExternalLinksChange}
