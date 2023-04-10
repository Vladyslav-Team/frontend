import React from "react"
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material"
import {getConfirmBody} from "./getConfirmBody"

const ConfirmPopup = ({
    option,
    showConfirm,
    setShowConfirm,
    status,
    setStatus,
    setIsHidden,
}) => {
    const confirmBody = getConfirmBody(option)

    const handlePositiveAnswer = () => {
        if (option === "delete") {
            console.log("proof removed")
        } else if (status === "Draft") {
            if (option === "hidden") {
                setStatus("Hidden")
                setIsHidden(true)
            } else if (option === "published") {
                setStatus("Published")
            }
        } else if (status === "Hidden") {
            setIsHidden(false)
            setStatus("Published")
        } else if (status === "Published") {
            setStatus("Hidden")
            setIsHidden(true)
        }

        handleClose()
    }

    const handleNegativeAnswer = () => {
        handleClose()
    }

    const handleClose = () => {
        setShowConfirm(false)
    }

    return (
        <div>
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
                        variant="contained"
                        onClick={handlePositiveAnswer}
                        sx={{minWidth: 70}}>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export {ConfirmPopup}
