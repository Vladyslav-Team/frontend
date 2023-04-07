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
                    name="name"
                    control={control}
                    rules={registerOptions.name}
                    render={({field}) => (
                        <TextField
                            sx={{width: "100%"}}
                            id="outlined-basic1"
                            InputLabelProps={{shrink: true}}
                            label="FIRST NAME"
                            variant="outlined"
                            error={!!errors.name}
                            helperText={errors.name && `${errors.name.message}`}
                            {...field}
                        />
                    )}
                />
            </Grid>
            <Grid item width={matches ? "350px" : "100%"}>
                <Controller
                    name="surname"
                    control={control}
                    rules={registerOptions.name}
                    render={({field}) => (
                        <TextField
                            InputLabelProps={{shrink: true}}
                            sx={{width: "100%"}}
                            id="outlined-basic"
                            label="LAST NAME"
                            variant="outlined"
                            error={!!errors.surname}
                            helperText={errors.surname && `${errors.surname.message}`}
                            {...field}
                        />
                    )}
                />
            </Grid>
        </Grid>
    )
}

export {FullName}
