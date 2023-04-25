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
                name="birthday"
                control={control}
                rules={registerOptions.birthDateEdit}
                render={({field: {onChange, ...restField}}) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            format="DD/MM/YYYY"
                            label="New birth date"
                            onChange={(date) => {
                                const newdate = Date.now()
                                console.log(JSON.stringify(date), newdate)
                                onChange(date)
                            }}
                            sx={{
                                width: "100%",
                                paddingBottom: 2,
                            }}
                            slotProps={{
                                textField: {
                                    error: errors.birthday,
                                    helperText:
                                        errors.birthday && `${errors.birthday.message}`,
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
