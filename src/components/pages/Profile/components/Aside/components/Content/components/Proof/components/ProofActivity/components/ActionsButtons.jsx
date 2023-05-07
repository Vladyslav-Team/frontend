import {Button} from "@mui/material"
import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import {ConfirmPopup} from "../../ConfirmPopup"
import {ConfirmationPopup} from "../../../../../../../../../../../ConfirmationPopup"

export const ActionsButtonsEditAndAdded = ({statusVis, setVis}) => {
    const [showConfirm, setShowConfirm] = useState(false)
    const navigate = useNavigate()
    const handleCancel = () => {
        if (statusVis === "Edit") {
            setShowConfirm(true)
        } else {
            setVis && setVis(false)
        }
    }

    const confirmBody = {
        title: "You want to undo the changes?",
        description:
            "All changes you have made before will not be saved and you will not be able to restore them. Continue operation?",
    }

    const handlePositiveAnswer = () => {
        setShowConfirm(false)
        navigate(-1)
    }

    return (
        <>
            <Button type="submit" form="proof-form" variant="outlined">
                Save
            </Button>
            <Button onClick={handleCancel} form="proof-form" variant="outlined">
                Cancel
            </Button>
            <ConfirmationPopup
                confirmBody={confirmBody}
                showConfirm={showConfirm}
                setShowConfirm={setShowConfirm}
                handlePositiveAnswer={handlePositiveAnswer}
            />
        </>
    )
}

export const ActionsButtonDraft = ({
    setShowConfirm,
    showConfirm,
    proofId,
    statusVis,
    allProofsRefetch,
}) => {
    const handleShowConfirm = async () => {
        setShowConfirm(true)
    }
    return (
        <>
            <Button variant="contained" onClick={handleShowConfirm}>
                Publish
            </Button>
            <ConfirmPopup
                option={"published"}
                showConfirm={showConfirm}
                setShowConfirm={setShowConfirm}
                status={"DRAFT"}
                id={proofId}
                statusVis={statusVis}
                allProofsRefetch={allProofsRefetch}
            />
        </>
    )
}
export const ActionsButtonShowMore = ({proofId}) => {
    const navigate = useNavigate()
    const ShowMore = () => {
        navigate(`/proof/${proofId}`)
    }
    return (
        <>
            <Button variant="contained" onClick={ShowMore}>
                Show more
            </Button>
        </>
    )
}
