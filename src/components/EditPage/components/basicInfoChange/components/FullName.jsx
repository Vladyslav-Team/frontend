import React from "react"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import {Controller} from "react-hook-form"
import useMediaQuery from "@mui/material/useMediaQuery"
import {registerOptions} from "../../../../pages/SignUp/validationRules"

const FullName = ({control, errors}) => {
    const matches = useMediaQuery("(min-width:750px)")

    return (
        <Grid
            container
            columns={1}
            display={"flex"}
            flexDirection={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            paddingBottom={"10px"}>
            <Grid
                item
                width={matches ? "350px" : "100%"}
                paddingBottom={matches ? "0" : "20px"}>
                <Controller
                    name="FirstName"
                    control={control}
                    rules={registerOptions.name}
                    render={({field}) => (
                        <TextField
                            sx={{width: "100%"}}
                            id="outlined-basic1"
                            label="FIRST NAME"
                            variant="outlined"
                            error={!!errors.FirstName}
                            helperText={errors.FirstName && `${errors.FirstName.message}`}
                            {...field}
                        />
                    )}
                />
            </Grid>
            <Grid item width={matches ? "350px" : "100%"}>
                <Controller
                    name="LastName"
                    control={control}
                    rules={registerOptions.name}
                    render={({field}) => (
                        <TextField
                            sx={{width: "100%"}}
                            id="outlined-basic"
                            label="LAST NAME"
                            variant="outlined"
                            error={!!errors.LastName}
                            helperText={errors.LastName && `${errors.LastName.message}`}
                            {...field}
                        />
                    )}
                />
            </Grid>
        </Grid>
    )
}

export {FullName}
