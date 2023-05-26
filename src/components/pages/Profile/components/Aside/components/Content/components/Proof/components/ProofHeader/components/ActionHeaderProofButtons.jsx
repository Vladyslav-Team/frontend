import {Button, Grid} from "@mui/material"
import React from "react"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import DeleteIcon from "@mui/icons-material/Delete"
import {ConfirmPopup} from "../../ConfirmPopup"

const ActionHeaderProofButtons = ({
    statusVis,
    status,
    handleShowConfirm,
    option,
    showConfirm,
    setShowConfirm,
    proofId,
    allProofsRefetch,
}) => {
    const handleHiddenButton = () => {
        if (status === "DRAFT") {
            handleShowConfirm("hidden")
        } else if (status === "HIDDEN") {
            handleShowConfirm("published")
        } else if (status === "PUBLISHED") {
            handleShowConfirm("hidden")
        }
    }

    return (
        <Grid>
            <Button
                onClick={handleHiddenButton}
                sx={{minWidth: "30px", color: "#ffffff", borderRadius: "50%"}}>
                {!statusVis &&
                    (status === "HIDDEN" ? <VisibilityOffIcon /> : <VisibilityIcon />)}
            </Button>
            <Button
                onClick={() => {
                    handleShowConfirm("delete")
                }}
                sx={{minWidth: "30px", color: "#ffffff", borderRadius: "50%"}}>
                {!statusVis && <DeleteIcon />}
            </Button>
            <ConfirmPopup
                option={option}
                showConfirm={showConfirm}
                setShowConfirm={setShowConfirm}
                status={status}
                id={proofId}
                allProofsRefetch={allProofsRefetch}
            />
        </Grid>
    )
}

export {ActionHeaderProofButtons}
