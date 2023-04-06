import React, {useEffect} from "react"
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
import {useLocation} from "react-router-dom"
import {useGetAllInfoByIDQuery} from "../pages/Profile/api"
import Loader from "../../shared/components/Loader"

const EditPage = () => {
    const location = useLocation()
    const idTalent = location.pathname.replace(/[^0-9\\.]+/g, "")

    const AllInfo = useGetAllInfoByIDQuery(idTalent)

    const {
        control,
        handleSubmit,
        formState: {errors},
        setValue,
    } = useForm()

    useEffect(() => {
        if (AllInfo.data) {
            for (const [key, value] of Object.entries(AllInfo.data)) {
                setValue(key, value)
            }
        }
    }, [AllInfo.data, setValue])

    const onSubmit = (data) => {
        console.log(JSON.stringify(data).replace("T22:00:00.000Z", ""))
    }
    // console.log(JSON.stringify(data).replace("T22:00:00.000Z", ""))
    const matches = useMediaQuery("(min-width:750px)")

    return (
        <>
            {AllInfo.data ? (
                <Grid container maxWidth={1900} columns={2} alignItems={"start"}>
                    <AvatarChange avatar={AllInfo.data && AllInfo.data.image} />
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
            ) : (
                <Loader
                    isLoading={AllInfo.isLoading}
                    isError={AllInfo.isError}
                    error={AllInfo.error}
                />
            )}
        </>
    )
}

export {EditPage}
