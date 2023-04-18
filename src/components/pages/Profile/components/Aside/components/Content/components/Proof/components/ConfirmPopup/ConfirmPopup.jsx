import React, {useEffect} from "react"
import {getConfirmBody} from "./getConfirmBody"
import {DialogPopup} from "./components"
import {
    useChangeStatusProofMutation,
    useDeleteProofMutation,
} from "../../../../../../../../api"

const ConfirmPopup = ({
    option,
    showConfirm,
    setShowConfirm,
    status,
    id,
    statusVis,
    allProofsRefetch,
}) => {
    const confirmBody = getConfirmBody(option, status)
    const [DeleteProof, deletedData] = useDeleteProofMutation()
    const [ChangeStatusProof, proof] = useChangeStatusProofMutation()
    const talentId = location.pathname.replace("/profile/", "")

    const ChangeStatus = (status, option, toStatus, toOption, toOptionToServer) => {
        if (status === toStatus && option === toOption && !statusVis) {
            id && ChangeStatusProof({talentId, proofId: id, status: toOptionToServer})
        }
    }

    const handlePositiveAnswer = () => {
        ChangeStatus(status, option, "DRAFT", "published", "publish")
        ChangeStatus(status, option, "PUBLISHED", "hidden", "hide")
        ChangeStatus(status, option, "HIDDEN", "published", "publish")
        ChangeStatus(status, option, "DRAFT", "hidden", "hide")
        if (option === "delete") {
            id && DeleteProof({talentId, proofId: id})
        }
        handleClose()
    }

    useEffect(() => {
        if (proof.data || deletedData.data) {
            allProofsRefetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deletedData.data, proof.data])

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
