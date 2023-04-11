import React from "react"
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material"

const DialogPopup = ({
    showConfirm,
    handleClose,
    confirmBody,
    handleNegativeAnswer,
    handlePositiveAnswer,
}) => {
    return (
        <>
            <Dialog
                open={showConfirm}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{confirmBody.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {confirmBody.description}
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
                        type="submit"
                        form="proof-form"
                        variant="contained"
                        onClick={handlePositiveAnswer}
                        sx={{minWidth: 70}}>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export {DialogPopup}
