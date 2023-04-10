import React, {useState} from "react"
import {Button, CardActions} from "@mui/material"
import {useNavigate} from "react-router-dom"
import {ConfirmPopup} from "../ConfirmPopup"

const ProofActivity = ({status, setIsHidden, setStatus}) => {
    const [showConfirm, setShowConfirm] = useState(false)
    const navigate = useNavigate()

    const handleShowConfirm = async () => {
        setShowConfirm(true)
    }

    return (
        <CardActions
            sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                "& button": {minWidth: "80px"},
            }}>
            {status === "Draft" && (
                <Button
                    variant="outlined"
                    size="small"
                    onClick={() => navigate("/proof/edit")}>
                    Edit
                </Button>
            )}
            {status !== "Published" && (
                <>
                    <Button variant="contained" size="small" onClick={handleShowConfirm}>
                        Publish
                    </Button>
                    <ConfirmPopup
                        option={"published"}
                        showConfirm={showConfirm}
                        setShowConfirm={setShowConfirm}
                        status={status}
                        setStatus={setStatus}
                        setIsHidden={setIsHidden}
                    />
                </>
            )}
        </CardActions>
    )
}

export {ProofActivity}
