import React from "react"
import {getConfirmBody} from "./getConfirmBody"
import {DialogPopup} from "./components"
import {useChangeStatusProofMutation} from "../../../../../../../../api"

const ConfirmPopup = ({option, showConfirm, setShowConfirm, status, id}) => {
    const confirmBody = getConfirmBody(option, status)
    const [ChangeStatusProof] = useChangeStatusProofMutation()
    const talentId = location.pathname.replace("/profile/", "")
    const handlePositiveAnswer = () => {
        if (option === "delete") {
            console.log("proof removed")
        } else if (status === "DRAFT") {
            if (option === "hidden") {
                id && ChangeStatusProof({talentId, proofId: id, status: "hide"})
            } else if (option === "published") {
                ChangeStatusProof({talentId, proofId: id, status: "publish"})
            }
        } else if (status === "HIDDEN") {
            ChangeStatusProof({talentId, proofId: id, status: "hide"})
        } else if (status === "PUBLISHED") {
            ChangeStatusProof({talentId, proofId: id, status: "publish"})
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
