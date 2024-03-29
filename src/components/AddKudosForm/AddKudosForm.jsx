import React, {useEffect, useState} from "react"
import {useJwtCheck} from "../../shared/api/hooks"
import {useGetKudosQuery} from "./api"
import Loader from "../../shared/components/Loader"
import {Button, TextField} from "@mui/material"
import {useForm} from "react-hook-form"
import {AlertError} from "../../shared/components"
import {DialogForm} from "./components/DialogForm/DialogForm"
import {useGetAllUserInfoByIDQuery} from "../pages/Profile/api"
import {SponsorKudoses} from "./components/SponsorKudoses"

const AddKudosForm = ({proofId, skills, setSkills, updateKudos, result}) => {
    const jwt = useJwtCheck()
    const isSponsor = jwt.data && jwt.data.scope === "ROLE_SPONSOR"
    const [amount, setAmount] = useState(0)
    const [totalCount, setTotalCount] = useState(skills ? skills.length * amount : 0)
    const [show, setShow] = useState(false)
    const id = jwt.data.id
    const role = "sponsors"
    const {
        handleSubmit,
        formState: {errors},
    } = useForm()

    const KudosInfo = useGetKudosQuery(
        {proofId},
        {
            refetchOnMountOrArgChange: true,
        }
    )

    const SponsorInfo = useGetAllUserInfoByIDQuery(
        {id, role},
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

        setAmount(0)
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
        result.data && KudosInfo.isSuccess && KudosInfo.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <SponsorKudoses
                    KudosInfo={KudosInfo}
                    isHaveSkills={skills.length !== 0}
                />
            ) : (
                <Loader
                    isLoading={KudosInfo.isLoading}
                    isError={KudosInfo.isError}
                    error={KudosInfo.error}
                />
            )}
            {isSponsor && skills && skills.length !== 0 && (
                <>
                    <TextField
                        sx={{
                            width: "85px",
                            marginRight: "5px",
                            "& > div": {
                                color: "#000000",
                            },
                        }}
                        id="outlined-basic"
                        label="Add kudos"
                        variant="outlined"
                        type="number"
                        size="small"
                        focused
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
                        balance={SponsorInfo.isSuccess && SponsorInfo.data.balance}
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
