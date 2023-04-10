import React from "react"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import {Controller} from "react-hook-form"

const Link = ({name, control, errors}) => {
    const domain = `${name}.com`
    const regex = new RegExp(`^https?:\\/\\/(${domain})(\\/.*?)?$`)
    return (
        <Grid
            item
            display="flex"
            flexDirection={"column"}
            marginTop={2}
            paddingRight={"50px"}>
            <Controller
                name={name}
                rules={{
                    pattern: {
                        value: regex,
                        message: `Not valid URL. Must be ${domain}`,
                    },
                }}
                control={control}
                render={({field}) => (
                    <TextField
                        placeholder={name}
                        sx={{width: "100%"}}
                        {...field}
                        error={!!errors[name]}
                        helperText={errors[name] && `${errors[name].message}`}
                    />
                )}
            />
        </Grid>
    )
}

const ExternalLinksChange = ({control, errors}) => {
    return (
        <>
            <Link name={"github"} control={control} errors={errors} />
            <Link name={"linkedin"} control={control} errors={errors} />
            <Link name={"twitter"} control={control} errors={errors} />
            <Link name={"instagram"} control={control} errors={errors} />
        </>
    )
}

export {ExternalLinksChange}
