import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    TextField,
} from "@mui/material"
import React from "react"
import {DialogFormDescription} from "./components/DialogFormDescription"

const DialogForm = ({
    show,
    setShow,
    skills,
    setSkills,
    onSubmit,
    handleSubmit,
    errors,
    balance,
}) => {
    const handleClose = () => {
        setShow(false)
    }

    const handleSkillAmountChange = (event, skillId) => {
        const {value} = event.target

        setSkills((prevSkillData) => {
            const updatedSkillData = [...prevSkillData]
            updatedSkillData[skillId] = {...updatedSkillData[skillId], amount: value}

            return updatedSkillData
        })
    }

    return (
        <Dialog
            open={show}
            onClose={() => {
                setShow(false)
            }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{
                width: "537px",
                m: "0 auto",
                "& > .MuiDialog-container > .MuiPaper-root": {
                    width: "537px",
                },
            }}>
            <DialogTitle
                id="alert-dialog-title"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                <Box>Add Kudos</Box> <Box sx={{fontSize: "18px"}}>balance: {balance}</Box>
            </DialogTitle>
            <DialogContent>
                <DialogFormDescription skills={skills} balance={balance} />
                {skills && (
                    <form id="proof-form" onSubmit={handleSubmit(onSubmit)}>
                        <Grid container sx={{gap: 5}}>
                            {skills.map((skill, id) => {
                                return (
                                    <TextField
                                        id={skill.title}
                                        label={skill.title}
                                        variant="outlined"
                                        type="number"
                                        size="small"
                                        value={skills[id]?.amount}
                                        onChange={(e) => handleSkillAmountChange(e, id)}
                                        inputProps={{min: 0}}
                                        error={errors.amount}
                                        helperText={
                                            errors.amount && errors.amount.message
                                        }
                                        key={skill.id}
                                        sx={{
                                            width: "200px",
                                        }}
                                    />
                                )
                            })}
                        </Grid>
                    </form>
                )}
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={handleClose} sx={{minWidth: 70}}>
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
    )
}

export {DialogForm}
