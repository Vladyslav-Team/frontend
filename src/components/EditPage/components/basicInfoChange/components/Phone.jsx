import React from "react"
import Grid from "@mui/material/Grid"

import PhoneInput from "react-phone-input-2"
import "./react-phone-input-2/lib/material.css"
import countryList from "../../../../../shared/api/constants/countries.json"
const Phone = ({field, errors}) => {
    return (
        <Grid item paddingBottom={"20px"}>
            <PhoneInput
                value={field.value}
                inputStyle={{width: "100%", height: "56px", outline: "none"}}
                country={"ua"}
                onlyCountries={countryList.map((el) => el.cca2.toLowerCase())}
                error={!!errors.phone}
                enableSearch
                searchStyle={{borderRadius: "5px"}}
                buttonStyle={{border: "none"}}
                helperText={errors.Phone && `${errors.phone.message}`}
                {...field}
            />
        </Grid>
    )
}

export {Phone}
