import React, {useEffect, useState} from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import {
    AvatarChange,
    NameStage,
    BasicInfoChange,
    AboutMeChange,
    SecurityChange,
} from "./components"
import {useForm} from "react-hook-form"
import useMediaQuery from "@mui/material/useMediaQuery"
import {useLocation, useNavigate} from "react-router-dom"
import {useGetAllUserInfoByIDQuery} from "../pages/Profile/api"
import Loader from "../../shared/components/Loader"
import {useEditUserInfoMutation} from "./api"
import {useJwtCheck} from "../../shared/api/hooks"
import {DeleteField} from "./components/DeleteField/DeleteField"
import {ConfirmationPopup} from "./components/DeleteField/components/ConfirmationPopup/ConfirmationPopup"

const filterResForm = (res, data) => {
    let dataRes = {}
    res &&
        Object.keys(res).filter((key) => {
            if (data[key] !== res[key]) {
                dataRes[key] = res[key]
            }
        })
    return dataRes
}

const setDefaultValueForm = (data, setter) => {
    if (data) {
        for (const [key, value] of Object.entries(data)) {
            setter(key, value)
        }
    }
}

const filterDataForDate = (data) => {
    if (data.birthday) {
        const date = new Date(data.birthday.$y, data.birthday.$M, data.birthday.$D + 1)
        data.birthday = date.toISOString().slice(0, 10).split("-").reverse().join("-")
    }
    return data
}

const EditPage = ({AvatarIMG}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const {data} = useJwtCheck()
    const matches = useMediaQuery("(min-width:750px)")
    const id = location.pathname.replace(/[^0-9\\.]+/g, "")
    const [updateUserInfo, result] = useEditUserInfoMutation()

    const role = data.scope === "ROLE_TALENT" ? "talents" : "sponsors"
    const AllInfo = useGetAllUserInfoByIDQuery({id, role})

    const [visibilityConfirmationPopup, setVisibilityConfirmationPopup] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)

    const {
        control,
        handleSubmit,
        formState: {errors},
        setValue,
        watch,
    } = useForm()
    const password = watch("password")

    useEffect(() => {
        setDefaultValueForm(AllInfo.data, setValue)
    }, [AllInfo.data, setValue])

    const onSubmit = (data) => {
        const payload = filterResForm(filterDataForDate(data), AllInfo.data)
        updateUserInfo({payload, id, role})
        AvatarIMG.refetch()
    }
    useEffect(() => {
        if (result.data) {
            navigate(`/profile/${data.id}`)
        } else if (data) {
            data.id !== parseInt(id) && navigate(`/profile/${data.id}/edit`)
        }
    }, [data, id, navigate, result, result.data])

    return (
        <>
            {AllInfo.data ? (
                <Grid container maxWidth={1900} columns={2} alignItems={"start"}>
                    {visibilityConfirmationPopup && (
                        <ConfirmationPopup
                            setVisibilityConfirmationPopup={
                                setVisibilityConfirmationPopup
                            }
                            setIsDeleted={setIsDeleted}
                        />
                    )}
                    <AvatarChange
                        avatar={AllInfo.data && AllInfo.data.image}
                        control={control}
                        errors={errors}
                    />
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
                            <NameStage name={"Basic info"} button={true} id={data.id} />
                            <BasicInfoChange control={control} errors={errors} />
                            {role === "talents" && (
                                <>
                                    <NameStage name={"About Me"} errors={errors} />
                                    <AboutMeChange control={control} errors={errors} />
                                </>
                            )}
                            <NameStage name={"Security"} errors={errors} />
                            <SecurityChange
                                control={control}
                                errors={errors}
                                password={password}
                            />
                        </form>
                        <DeleteField
                            isDeleted={isDeleted}
                            setIsDeleted={setIsDeleted}
                            setVisibilityConfirmationPopup={
                                setVisibilityConfirmationPopup
                            }
                            visibilityConfirmationPopup={visibilityConfirmationPopup}
                            role={role}
                        />
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
