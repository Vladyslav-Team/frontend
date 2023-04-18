import React, {useState} from "react"
import {Button, CardActions} from "@mui/material"
import {useNavigate} from "react-router-dom"
import {
    ActionsButtonsEditAndAdded,
    ActionsButtonDraft,
    ActionsButtonShowMore,
} from "./components"

const Edit = ({proofId}) => {
    const navigate = useNavigate()
    return (
        <Button
            variant="outlined"
            onClick={() => proofId && navigate(`proof/${proofId}/edit`)}>
            Edit
        </Button>
    )
}

const ProofActivity = ({proofId, statusVis, setVis, allProofsRefetch, status}) => {
    const [showConfirm, setShowConfirm] = useState(false)
    const isEditOrAdded = statusVis === "Added" || statusVis === "Edit"
    const isDraft = status === "DRAFT" && !statusVis
    const isPublish = status === "PUBLISHED" && !statusVis
    const CardActionsStyle = {
        justifyContent: "flex-end",
        gap: 1,
        "& button": {minWidth: "90px"},
    }

    return (
        <CardActions sx={CardActionsStyle}>
            {isDraft && <Edit proofId={proofId} />}
            {isEditOrAdded && (
                <ActionsButtonsEditAndAdded statusVis={statusVis} setVis={setVis} />
            )}
            {isDraft && (
                <ActionsButtonDraft
                    setShowConfirm={setShowConfirm}
                    showConfirm={showConfirm}
                    proofId={proofId}
                    statusVis={statusVis}
                    allProofsRefetch={allProofsRefetch}
                />
            )}
            {isPublish && <ActionsButtonShowMore proofId={proofId} />}
        </CardActions>
    )
}

export {ProofActivity}
