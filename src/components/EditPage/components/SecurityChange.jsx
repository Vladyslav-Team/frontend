import React from "react"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import {Controller} from "react-hook-form"
import {registerOptions} from "../../pages/SignUp/validationRules"

const SecurityChange = ({control, errors, password}) => {
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
                name="password"
                control={control}
                rules={password && registerOptions.password}
                render={({field}) => (
                    <TextField
                        label="New password"
                        type={"password"}
                        name="password"
                        autoComplete="new-password"
                        error={!!errors.password}
                        helperText={errors.password && `${errors.password.message}`}
                        InputLabelProps={{shrink: true}}
                        variant="outlined"
                        sx={{width: "100%"}}
                        {...field}
                    />
                )}
            />
        </Grid>
    )
}

export {SecurityChange}
