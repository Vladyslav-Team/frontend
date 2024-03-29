import React from "react"
import Grid from "@mui/material/Grid"
import {Controller} from "react-hook-form"
import {FullName, BirthDate, Location, Phone} from "./components"
import {registerOptions} from "../../../pages/SignUp/validationRules"

const BasicInfoChange = ({control, errors}) => {
    return (
        <Grid
            container
            columns={1}
            display={"flex"}
            flexDirection={"row"}
            flexWrap={"wrap"}
            marginTop={2}
            paddingRight={"50px"}>
            <FullName control={control} errors={errors} />
            <Grid item width={"100%"} gap={3}>
                <BirthDate control={control} errors={errors} />
                <Location control={control} errors={errors} />
                <Controller
                    name="phone"
                    rules={registerOptions.phone}
                    control={control}
                    render={({field}) => <Phone field={field} errors={errors} />}
                />
            </Grid>
        </Grid>
    )
}

export {BasicInfoChange}
