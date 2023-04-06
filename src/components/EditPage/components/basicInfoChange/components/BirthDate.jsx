import React from "react"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider"
import {DatePicker} from "@mui/x-date-pickers/DatePicker"
import {Controller} from "react-hook-form"
import {registerOptions} from "../../../../pages/SignUp/validationRules"
import dayjs from "dayjs"
const BirthDate = ({control, errors}) => {
    return (
        <>
            <Controller
                name="birthDate"
                control={control}
                rules={registerOptions.birthDate}
                render={({field: {onChange, value, ...restField}}) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            inputFormat="dd/MM/yyyy"
                            value={dayjs(value)}
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
                                    error: errors.birthDate,
                                    helperText:
                                        errors.birthDate && `${errors.birthDate.message}`,
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
