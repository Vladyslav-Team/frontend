import React, {useState} from "react"
import {Button, CardActions} from "@mui/material"
import {useNavigate} from "react-router-dom"
import {ConfirmPopup} from "../ConfirmPopup"

const ProofActivity = ({isEditMode, status, setIsHidden, setStatus}) => {
    const [showConfirm, setShowConfirm] = useState(false)
    const navigate = useNavigate()

    const handleShowConfirm = async () => {
        setShowConfirm(true)
    }

    return (
        <CardActions
            sx={{
                justifyContent: "flex-end",
                gap: 1,
                "& button": {minWidth: "90px"},
            }}>
            {status === "Draft" && !isEditMode && (
                <Button variant="outlined" onClick={() => navigate("/proof/edit")}>
                    Edit
                </Button>
            )}
            {status === "Draft" && isEditMode && (
                <Button type="submit" form="proof-form" variant="outlined">
                    Save
                </Button>
            )}
            {status !== "Published" && (
                <>
                    <Button variant="contained" onClick={handleShowConfirm}>
                        Publish
                    </Button>
                    <ConfirmPopup
                        option={"published"}
                        showConfirm={showConfirm}
                        setShowConfirm={setShowConfirm}
                        status={status}
                        setStatus={setStatus}
                        setIsHidden={setIsHidden}
                        isEditMode={isEditMode}
                    />
                </>
            )}
        </CardActions>
    )
}

export {ProofActivity}
