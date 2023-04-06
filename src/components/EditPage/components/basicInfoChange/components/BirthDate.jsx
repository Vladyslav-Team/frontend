import React from "react"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider"
import {DatePicker} from "@mui/x-date-pickers/DatePicker"
import {Controller} from "react-hook-form"
import {registerOptions} from "../../../../pages/SignUp/validationRules"
const BirthDate = ({control, errors}) => {
    return (
        <>
            <Controller
                name="BirthDate"
                control={control}
                rules={registerOptions.birthDate}
                render={({field: {onChange, value, ...restField}}) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            inputFormat="dd/MM/yyyy"
                            value={value || null}
                            label="BirthDate"
                            onChange={(date) => {
                                onChange(date)
                            }}
                            sx={{
                                width: "100%",
                                paddingBottom: 2,
                            }}
                            slotProps={{
                                textField: {
                                    error: !errors.BirthDate,
                                    helperText:
                                        errors.BirthDate && `${errors.BirthDate.message}`,
                                },
                            }}
                            {...restField}
                            disableFuture
                        />
                    </LocalizationProvider>
                )}
            />
        </>
    )
}

export {BirthDate}
