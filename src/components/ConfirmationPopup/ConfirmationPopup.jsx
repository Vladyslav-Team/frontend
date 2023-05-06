import React from "react"
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material"

const ConfirmationPopup = ({
    confirmBody,
    showConfirm,
    setShowConfirm,
    handlePositiveAnswer,
}) => {
    const handleNegativeAnswer = () => {
        setShowConfirm(false)
    }

    return (
        <Dialog
            open={showConfirm}
            onClose={() => {
                setShowConfirm(false)
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
                    onClick={handleNegativeAnswer}
                    sx={{minWidth: 70}}>
                    Disagree
                </Button>
                <Button
                    variant="contained"
                    onClick={handlePositiveAnswer}
                    sx={{minWidth: 70}}>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export {ConfirmationPopup}
