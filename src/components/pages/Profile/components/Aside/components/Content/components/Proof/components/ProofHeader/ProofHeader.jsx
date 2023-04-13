import React, {useEffect, useState} from "react"
import {Button, Grid, Typography} from "@mui/material"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import DeleteIcon from "@mui/icons-material/Delete"
import {ConfirmPopup} from "../ConfirmPopup"

const ProofHeader = ({status, statusVis, id}) => {
    const [showConfirm, setShowConfirm] = useState(false)
    const [statusColor, setStatusColor] = useState()
    const [option, setOption] = useState()
    const handleHiddenButton = () => {
        if (status === "DRAFT") {
            handleShowConfirm("hidden")
        } else if (status === "HIDDEN") {
            handleShowConfirm("PUBLISHED")
        } else if (status === "PUBLISHED") {
            handleShowConfirm("hidden")
        }
    }

    const handleShowConfirm = (option) => {
        setShowConfirm(true)
        setOption(option)
    }

    useEffect(() => {
        const handleStatusColor = () => {
            if (status === "DRAFT") {
                setStatusColor("#007965")
            } else if (status === "PUBLISHED") {
                setStatusColor("#005079")
            } else if (status === "HIDDEN") {
                setStatusColor("#8A8A8A")
            }
        }

        handleStatusColor()
    }, [status, statusColor])

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
                {/* <Button
                    onClick={handleHiddenButton}
                    sx={{minWidth: "30px", color: "#ffffff", borderRadius: "50%"}}>
                    {statusVis !== "Added" &&
                        (status === "HIDDEN" ? (
                            <VisibilityOffIcon />
                        ) : (
                            <VisibilityIcon />
                        ))}
                </Button>
                <Button
                    onClick={() => {
                        handleShowConfirm("delete")
                    }}
                    sx={{minWidth: "30px", color: "#ffffff", borderRadius: "50%"}}>
                    {statusVis !== "Added" && <DeleteIcon />}
                </Button>
                <ConfirmPopup
                    option={option}
                    showConfirm={showConfirm}
                    setShowConfirm={setShowConfirm}
                    status={status}
                    id={id}
                /> */}
            </Grid>
        </Grid>
    )
}

export {ProofHeader}
