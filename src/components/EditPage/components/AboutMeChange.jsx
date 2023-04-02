import React from "react"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import {Controller} from "react-hook-form"
const AboutMeChange = ({control}) => {
    return (
        <Grid
            container
            columns={1}
            display={"flex"}
            flexDirection={"row"}
            flexWrap={"wrap"}
            marginTop={2}
            paddingRight={"50px"}
            paddingBottom={"20px"}
            width={"100%"}>
            <Controller
                name="BIO"
                control={control}
                render={({field}) => (
                    <TextField
                        placeholder="BIO"
                        multiline
                        rows={5}
                        sx={{width: "100%"}}
                        {...field}
                    />
                )}
            />
        </Grid>
    )
}

export {AboutMeChange}
