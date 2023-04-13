import React from "react"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import {Avatar} from "../../Avatar"
import {Controller} from "react-hook-form"
import {registerOptions} from "../../pages/SignUp/validationRules"
import {TextField} from "@mui/material"

const AvatarChange = ({avatar, errors, control}) => {
    const matches = useMediaQuery("(min-width:750px)")
    return (
        <Grid
            item
            xs={!matches ? "2" : "0.5"}
            display="flex"
            flexDirection={"column"}
            justifyContent="flex-start"
            alignItems={"center"}
            marginTop={"120px"}>
            <Avatar avatar={avatar} size={180} />
            <Controller
                name="image"
                control={control}
                rules={registerOptions.link}
                render={({field}) => (
                    <TextField
                        placeholder="Avatar link"
                        sx={{width: "250px", paddingBottom: "20px"}}
                        error={errors.image}
                        helperText={errors.image && `${errors.image.message}`}
                        {...field}
                    />
                )}
            />
        </Grid>
    )
}

export {AvatarChange}
