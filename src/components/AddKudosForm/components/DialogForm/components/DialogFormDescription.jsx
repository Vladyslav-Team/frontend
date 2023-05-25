import React, {useEffect} from "react"
import {DialogContentText} from "@mui/material"

const DialogFormDescription = ({skills, balance, setIsCanGiveKudos}) => {
    const amount = skills
        ? skills.reduce((sum, skill) => sum + parseInt(skill.amount || 0), 0)
        : 0

    let message

    useEffect(() => {
        if (amount <= balance) {
            setIsCanGiveKudos(true)
        } else {
            setIsCanGiveKudos(false)
        }
    }, [amount, balance, setIsCanGiveKudos])

    if (amount <= balance) {
        message = `Are you sure you want to add ${amount} kudos on that proof?`
    } else {
        message =
            "Not enough kudos on balance. The kudos transfer operation could not be completed."
    }

    return (
        <DialogContentText id="alert-dialog-description" sx={{mb: 2, height: 55}}>
            {message}
        </DialogContentText>
    )
}

export {DialogFormDescription}
