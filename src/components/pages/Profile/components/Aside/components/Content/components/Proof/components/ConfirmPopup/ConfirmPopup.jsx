import React from "react"
import {getConfirmBody} from "./getConfirmBody"
import {DialogPopup} from "./components"

const ConfirmPopup = ({
    option = "draft",
    showConfirm,
    setShowConfirm,
    status,
    setStatus,
    setIsHidden,
    isEditMode,
}) => {
    const confirmBody = getConfirmBody(option, status)

    const handlePositiveAnswer = () => {
        if (!isEditMode) {
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
        <DialogPopup
            showConfirm={showConfirm}
            handleClose={handleClose}
            confirmBody={confirmBody}
            handleNegativeAnswer={handleNegativeAnswer}
            handlePositiveAnswer={handlePositiveAnswer}
        />
    )
}

export {ConfirmPopup}
