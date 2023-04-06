import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import {
    AvatarChange,
    NameStage,
    BasicInfoChange,
    AboutMeChange,
    ExternalLinksChange,
} from "./components"
import {useForm} from "react-hook-form"
import useMediaQuery from "@mui/material/useMediaQuery"

const EditPage = () => {
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm()
    const onSubmit = (data) => {
        console.log(JSON.stringify(data).replace("T22:00:00.000Z", ""))
    }
    // console.log(JSON.stringify(data).replace("T22:00:00.000Z", ""))
    const matches = useMediaQuery("(min-width:750px)")

    return (
        <Grid container maxWidth={1900} columns={2} alignItems={"start"}>
            <AvatarChange />
            <Grid
                item
                xs={matches ? 1.5 : 2}
                display="flex"
                flexDirection={"column"}
                paddingTop={15}
                paddingLeft={matches ? "0" : "20px"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography
                        sx={{
                            fontWeight: 600,
                            fontSize: 30,
                            textAlign: !matches && "center",
                        }}>
                        Edit profile
                    </Typography>
                    <NameStage name={"Basic info"} button={true} />
                    <BasicInfoChange control={control} errors={errors} />
                    <NameStage name={"About Me"} errors={errors} />
                    <AboutMeChange control={control} errors={errors} />
                    <NameStage name={"External Links"} errors={errors} />
                    <ExternalLinksChange control={control} errors={errors} />
                </form>
            </Grid>
        </Grid>
    )
}

export {EditPage}
