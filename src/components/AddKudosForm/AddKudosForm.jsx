import React, {useEffect, useState} from "react"
import styles from "./AddKudosForm.module.css"
import {useJwtCheck} from "../../shared/api/hooks"
import {useAddKudosMutation, useGetKudosQuery} from "./api"
import Loader from "../../shared/components/Loader"
import Unlike from "./img/unlike.png"
import {Button, TextField, Tooltip, Grid, Typography} from "@mui/material"
import {useForm} from "react-hook-form"
import {AlertError} from "../../shared/components"
import {DialogForm} from "./components/DialogForm/DialogForm"

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

const AddKudosForm = ({proofId, refetch, skills, setSkills}) => {
    const {data} = useJwtCheck()

    const isSponsor = data && data.scope === "ROLE_SPONSOR"

    const [amount, setAmount] = useState(0)
    const [totalCount, setTotalCount] = useState(skills ? skills.length * amount : 0)
    const [show, setShow] = useState(false)
    const [updateKudos, result] = useAddKudosMutation()
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()
    const KudosInfo = useGetKudosQuery(
        {proofId},
        {
            refetchOnMountOrArgChange: true,
        }
    )

    const onSubmit = () => {
        skills.map((skill) => {
            const skillId = +skill.id
            const skillAmount = +skill.amount
            !!skillAmount &&
                updateKudos({
                    proofId,
                    skillId,
                    body: JSON.stringify({amount: skillAmount}),
                })
        })

        setShow(false)
    }

    const changeAmount = () => {
        skills &&
            setSkills(
                skills.map((skill) => {
                    return {...skill, amount: amount}
                })
            )
    }

    const handleOpen = () => {
        changeAmount()
        setShow(true)
    }

    useEffect(() => {
        result.data && KudosInfo.refetch()
    }, [result.status])

    useEffect(() => {
        setTotalCount(totalCount)
    }, [totalCount])

    const handleAmountChange = (event) => {
        setAmount(event.target.value)
    }

    return (
        <>
            {!KudosInfo.isLoading ? (
                <Tooltip
                    title={
                        <SponsorKudoses
                            amount={
                                KudosInfo.data &&
                                KudosInfo.data.amount_of_kudos_current_user
                            }
                        />
                    }
                    arrow>
                    <div className={styles.flex_container}>
                        <div className={styles.kudos_img}>
                            <img className={styles.kudos_img} src={Unlike} />
                        </div>
                        <div className={styles.kudos_counter}>{`${
                            KudosInfo.data && KudosInfo.data.amount_of_kudos
                        }`}</div>
                    </div>
                </Tooltip>
            ) : (
                <Loader
                    isLoading={KudosInfo.isLoading}
                    isError={KudosInfo.isError}
                    error={KudosInfo.error}
                />
            )}
            {isSponsor && (
                <>
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
                        value={amount}
                        onChange={handleAmountChange}
                        inputProps={{min: 0}}
                        error={errors.amount}
                        helperText={errors.amount && errors.amount.message}
                    />
                    <Button variant="contained" onClick={handleOpen}>
                        Add
                    </Button>
                    <DialogForm
                        show={show}
                        setShow={setShow}
                        skills={skills}
                        setSkills={setSkills}
                        onSubmit={onSubmit}
                        handleSubmit={handleSubmit}
                        errors={errors}
                    />
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

export {AddKudosForm}
