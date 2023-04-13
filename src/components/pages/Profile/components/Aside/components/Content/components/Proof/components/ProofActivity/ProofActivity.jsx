import React, {useEffect, useState} from "react"
import {Button, CardActions} from "@mui/material"
import {useNavigate} from "react-router-dom"
import {ConfirmPopup} from "../ConfirmPopup"
import {useJwtCheck} from "../../../../../../../../../../../shared/api/hooks"

const ProofActivity = ({
    isEditMode,
    id,
    statusVis,
    setVis,
    addProof,
    watch,
    allProofsRefetch,
    talentId,
    status,
}) => {
    const [showConfirm, setShowConfirm] = useState(false)
    const navigate = useNavigate()
    const {data} = useJwtCheck()
    const handleShowConfirm = async () => {
        setShowConfirm(true)
    }
    const handleSave = (e) => {
        const watchAllFields = watch()
        addProof(
            addProof({
                id: talentId,
                payload: {
                    title: watchAllFields.title,
                    description: watchAllFields.description,
                },
            })
        )
        setVis(false)
        allProofsRefetch()
    }

    return (
        <CardActions
            sx={{
                justifyContent: "flex-end",
                gap: 1,
                "& button": {minWidth: "90px"},
            }}>
            {status === "DRAFT" && !isEditMode && (
                <Button
                    variant="outlined"
                    onClick={() => id && navigate(`proof/${id}/edit`)}>
                    Edit
                </Button>
            )}
            {statusVis === "Added" && (
                <>
                    <Button
                        type="submit"
                        form="proof-form"
                        onClick={() => handleSave()}
                        variant="outlined">
                        Save
                    </Button>
                    <Button
                        type="submit"
                        onClick={() => setVis(false)}
                        form="proof-form"
                        variant="outlined">
                        Cancel
                    </Button>
                </>
            )}

            {status !== "PUBLISHED" && (
                <>
                    <Button variant="contained" onClick={handleShowConfirm}>
                        Publish
                    </Button>
                    <ConfirmPopup
                        option={"published"}
                        showConfirm={showConfirm}
                        setShowConfirm={setShowConfirm}
                        status={"DRAFT"}
                        id={id}
                    />
                </>
            )}
        </CardActions>
    )
}

export {ProofActivity}
