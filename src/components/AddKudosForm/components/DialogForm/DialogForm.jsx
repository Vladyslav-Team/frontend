import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    TextField,
} from "@mui/material"
import React from "react"

const DialogForm = ({
    show,
    setShow,
    skills,
    setSkills,
    onSubmit,
    handleSubmit,
    errors,
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
            aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">Add Kudos</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" sx={{mb: 4}}>
                    {`Are you sure you want to add ${
                        skills
                            ? skills.reduce(
                                  (sum, skill) => sum + parseInt(skill.amount || 0),
                                  0
                              )
                            : 0
                    }
                    kudoses on that proof?`}
                </DialogContentText>
                {skills && (
                    <form id="proof-form" onSubmit={handleSubmit(onSubmit)}>
                        <Grid container sx={{maxWidth: "470px", gap: 5}}>
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
