import React from "react"
import {Controller} from "react-hook-form"
import {registerOptions} from "../../../../pages/SignUp/validationRules"
import {TextField} from "@mui/material"

const Email = ({control, errors}) => {
    return (
        <>
            <Controller
                name="email"
                control={control}
                rules={registerOptions.email}
                render={({field}) => (
                    <TextField
                        sx={{width: "100%", paddingBottom: 2}}
                        InputLabelProps={{shrink: true}}
                        label="Email"
                        variant="outlined"
                        error={!!errors.email}
                        helperText={errors.email && `${errors.email.message}`}
                        {...field}
                    />
                )}
            />
        </>
    )
}

export {Email}
