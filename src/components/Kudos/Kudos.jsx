import React, {useEffect, useState} from "react"
import styles from "./Kudos.module.css"
import {useJwtCheck} from "../../shared/api/hooks"
import {useAddKudosMutation, useGetKudosQuery} from "./api"
import Loader from "../../shared/components/Loader"
import Unlike from "./img/unlike.png"
import {useLocation} from "react-router-dom"
import {Button, TextField, Tooltip, Grid, Typography} from "@mui/material"
import {useForm} from "react-hook-form"
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material"
import { AlertError } from "../../shared/components"

const SponsorKudoses = ({amount}) => {
    return (
        <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"5px"}>
            <Typography paddingLeft={"2px"} paddingTop={"2px"} sx={{fontSize: "13px"}}>
                {amount}
            </Typography>
        </Grid>
    )
}

const Kudos = ({talentId, proofId}) => {
    const {data} = useJwtCheck()
    const {pathname} = useLocation()

    const isSponsor = data.scope === "ROLE_SPONSOR"
    const isOnProfile = pathname.includes("/profile")

    const [show, setShow] = useState(false)

    const confirmBody = {
        title: "Add Kudos",
        description: "Are you sure you want to add kudoses on that proof?",
    }

    const handleClose = () => {
        setShow(false)
    }

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    const [updateKudos, result] = useAddKudosMutation()
    const KudosInfo = useGetKudosQuery(
        {proofId},
        {
            refetchOnMountOrArgChange: true,
        }
    )

    const onSubmit = (data) => {
        const res = data
        res.amount = +data.amount
        updateKudos({proofId, body: JSON.stringify(res)})
        setShow(false)
    }

    useEffect(() => {
        KudosInfo.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result.status])

    return (
        <>
            {!KudosInfo.isLoading ? (
                <Tooltip
                    title={
                        <SponsorKudoses
                            amount={KudosInfo.data.amount_of_kudos_current_user}
                        />
                    }
                    arrow>
                    <div className={styles.flex_container}>
                        <div className={styles.kudos_img}>
                            <img className={styles.kudos_img} src={Unlike} />
                        </div>
                        <div
                            className={
                                styles.kudos_counter
                            }>{`${KudosInfo.data.amount_of_kudos}`}</div>
                    </div>
                </Tooltip>
            ) : (
                <Loader
                    isLoading={KudosInfo.isLoading}
                    isError={KudosInfo.isError}
                    error={KudosInfo.error}
                />
            )}
            {isOnProfile && isSponsor && (
                <>
                    <form id="proof-form" onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            sx={{
                                width: "85px",
                                marginRight: "5px",
                            }}
                            id="outlined-basic"
                            label="Add kudos"
                            variant="outlined"
                            type="number"
                            size="small"
                            InputProps={{inputProps: {min: 1}}}
                            {...register("amount", {})}
                            error={errors.amount}
                            helperText={errors.amount && errors.amount.message}
                        />
                        <Button
                            variant="contained"
                            onClick={() => {
                                setShow(true)
                            }}>
                            Add
                        </Button>
                        <Dialog
                            open={show}
                            onClose={() => {
                                setShow(false)
                            }}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description">
                            <DialogTitle id="alert-dialog-title">
                                {confirmBody && confirmBody.title}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    {confirmBody && confirmBody.description}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    variant="outlined"
                                    onClick={handleClose}
                                    sx={{minWidth: 70}}>
                                    Disagree
                                </Button>
                                <Button
                                    onClick={handleSubmit(onSubmit)}
                                    variant="contained"
                                    sx={{minWidth: 70}}>
                                    Agree
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </form>
                </>
            )}
            {result.error && (
                <AlertError
                    defaultStatus={true}
                    massageError={"Not enough Kudos on your balance"}
                />
            )}
        </>
    )
}

export {Kudos}
