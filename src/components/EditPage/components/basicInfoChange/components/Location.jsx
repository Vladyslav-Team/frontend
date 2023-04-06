import React from "react"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import {Controller} from "react-hook-form"
import countryList from "../../../../../shared/api/constants/countries.json"
import {registerOptions} from "../../../../pages/SignUp/validationRules"

const Location = ({control, errors}) => {
    return (
        <Grid
            container
            columns={2}
            display={"flex"}
            flexDirection={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            paddingBottom={"20px"}>
            <Controller
                control={control}
                name="location"
                rules={registerOptions.location}
                render={({field: {onChange, value}}) => (
                    <Autocomplete
                        options={countryList.map((el) => el.name)}
                        onChange={(event, values) => onChange(values)}
                        sx={{
                            width: "100%",
                        }}
                        value={value || null}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Country"
                                variant="outlined"
                                onChange={onChange}
                                error={!!errors.Country}
                                helperText={errors.Country && `${errors.Country.message}`}
                            />
                        )}
                    />
                )}
            />
        </Grid>
    )
}

export {Location}
