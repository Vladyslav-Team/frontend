import React, {useEffect, useState} from "react"
import {Grid, Typography} from "@mui/material"
import {useJwtCheck} from "../../../../../../../../../../../shared/api/hooks"
import {ActionHeaderProofButtons} from "./components"

const ProofHeader = ({status, statusVis, proofId, allProofsRefetch, talentId}) => {
    const {data} = useJwtCheck()
    const isYourAccount = +talentId === data.id
    const isSponsor = data.scope === "ROLE_SPONSOR"
    const [showConfirm, setShowConfirm] = useState(false)
    const [statusColor, setStatusColor] = useState()
    const [option, setOption] = useState()

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

    const propsActionHeaderProofButtons = {
        statusVis,
        status,
        handleShowConfirm,
        option,
        showConfirm,
        setShowConfirm,
        proofId,
        allProofsRefetch,
    }
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
            {isYourAccount && !isSponsor && (
                <ActionHeaderProofButtons {...propsActionHeaderProofButtons} />
            )}
        </Grid>
    )
}

export {ProofHeader}
