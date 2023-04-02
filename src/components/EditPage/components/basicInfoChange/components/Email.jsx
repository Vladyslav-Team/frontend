import React from "react"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"

const Email = ({field, errors}) => {
    return (
        <Grid item paddingBottom={"20px"}>
            <TextField
                value={field.value}
                sx={{width: "100%"}}
                id="outlined-basic"
                label="EMAIL"
                variant="outlined"
                error={!!errors.Email}
                helperText={errors.Email && `${errors.Email.message}`}
                {...field}
            />
        </Grid>
    )
}

export {Email}
