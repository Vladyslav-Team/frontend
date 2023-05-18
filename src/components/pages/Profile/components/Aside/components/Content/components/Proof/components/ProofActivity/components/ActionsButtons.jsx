import {Button} from "@mui/material"
import React from "react"
import {useNavigate} from "react-router-dom"
import {ConfirmPopup} from "../../ConfirmPopup"
import {useTheme} from "@emotion/react"

export const ActionsButtonsEditAndAdded = ({statusVis, setVis}) => {
    const navigate = useNavigate()
    const handleCancel = () => {
        if (statusVis === "Edit") {
            navigate(-1)
        } else {
            setVis && setVis(false)
        }
    }

    return (
        <>
            <Button onClick={handleCancel} form="proof-form" variant="outlined">
                Cancel
            </Button>
            <Button type="submit" form="proof-form" variant="contained">
                Save
            </Button>
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
