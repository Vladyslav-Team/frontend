import React from "react"
import Grid from "@mui/material/Grid"
import PhoneInput from "react-phone-input-2"
import "./react-phone-input-2/lib/material.css"
import countryList from "../../../../../shared/api/constants/countries.json"
import {useTheme} from "@emotion/react"

const Phone = ({field, errors}) => {
    const {palette} = useTheme()

    return (
        <Grid
            item
            paddingBottom={"20px"}
            sx={{
                "& > div > .special-label": {
                    background: palette.neutral.main,
                },
            }}>
            <PhoneInput
                value={field.value}
                inputStyle={{
                    width: "100%",
                    height: "56px",
                    outline: "none",
                    backgroundColor: "inherit",
                    borderRadius: "10px",
                    color: palette.mode === "dark" ? "#ffffff" : "#000000",
                }}
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
