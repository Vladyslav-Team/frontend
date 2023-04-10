import React from "react"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import {Controller} from "react-hook-form"
import {registerOptions} from "../../pages/SignUp/validationRules"

const AboutMeChange = ({control, errors}) => {
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
                name="about"
                control={control}
                rules={registerOptions.about}
                render={({field}) => (
                    <TextField
                        placeholder="BIO"
                        multiline
                        rows={5}
                        sx={{width: "100%", paddingBottom: "20px"}}
                        error={errors.about}
                        helperText={errors.about && `${errors.about.message}`}
                        {...field}
                    />
                )}
            />
            <Controller
                name="experience"
                control={control}
                rules={registerOptions.experience}
                render={({field}) => (
                    <TextField
                        label="Experience"
                        InputLabelProps={{shrink: true}}
                        variant="outlined"
                        sx={{width: "100%", paddingBottom: "20px"}}
                        error={errors.experience}
                        helperText={errors.experience && `${errors.experience.message}`}
                        {...field}
                    />
                )}
            />
            <Controller
                name="education"
                control={control}
                rules={registerOptions.education}
                render={({field}) => (
                    <TextField
                        label="Education"
                        InputLabelProps={{shrink: true}}
                        variant="outlined"
                        sx={{width: "100%"}}
                        error={errors.education}
                        helperText={errors.education && `${errors.education.message}`}
                        {...field}
                    />
                )}
            />
        </Grid>
    )
}

export {AboutMeChange}
