import React, {useEffect, useState} from "react"
import {Button, Grid, Typography} from "@mui/material"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import DeleteIcon from "@mui/icons-material/Delete"
import {ConfirmPopup} from "../ConfirmPopup"

const ProofHeader = ({status, setStatus, setIsHidden, isHidden}) => {
    const [showConfirm, setShowConfirm] = useState(false)
    const [statusColor, setStatusColor] = useState("#0a9a7d")
    const [option, setOption] = useState("")

    const handleHiddenButton = () => {
        if (status === "Draft") {
            handleShowConfirm("hidden")
        } else if (status === "Hidden") {
            handleShowConfirm("published")
        } else if (status === "Published") {
            handleShowConfirm("hidden")
        }
    }

    const handleShowConfirm = (option) => {
        setShowConfirm(true)
        setOption(option)
    }

    useEffect(() => {
        const handleStatusColor = () => {
            if (status === "Draft") {
                setStatusColor("#007965")
            } else if (status === "Published") {
                setStatusColor("#005079")
            } else if (status === "Hidden") {
                setStatusColor("#8A8A8A")
            }
        }
        handleStatusColor()
    }, [status])

    return (
        <Grid
            container
            display={"flex"}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            padding={"0 5px 0 15px"}
            sx={{
                width: "100%",
                height: "40px",
                backgroundColor: statusColor,
                color: "#ffffff",
            }}>
            <Typography variant="h6" zIndex={20}>
                {status}
            </Typography>
            <Grid>
                <Button
                    onClick={handleHiddenButton}
                    sx={{minWidth: "30px", color: "#ffffff", borderRadius: "50%"}}>
                    {isHidden ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </Button>
                <Button
                    onClick={() => {
                        handleShowConfirm("delete")
                    }}
                    sx={{minWidth: "30px", color: "#ffffff", borderRadius: "50%"}}>
                    <DeleteIcon />
                </Button>
                <ConfirmPopup
                    option={option}
                    showConfirm={showConfirm}
                    setShowConfirm={setShowConfirm}
                    status={status}
                    setStatus={setStatus}
                    setIsHidden={setIsHidden}
                />
            </Grid>
        </Grid>
    )
}

export {ProofHeader}
