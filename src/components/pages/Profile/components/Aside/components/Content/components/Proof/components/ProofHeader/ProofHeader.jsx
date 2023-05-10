import React, {useEffect, useState} from "react"
import {Grid, Typography} from "@mui/material"
import {useJwtCheck} from "../../../../../../../../../../../shared/api/hooks"
import {ActionHeaderProofButtons} from "./components"
import Tooltip from "@mui/material/Tooltip"
import AccessTimeIcon from "@mui/icons-material/AccessTime"

const Time = ({time}) => {
    return (
        <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"5px"}>
            <AccessTimeIcon sx={{width: "17px"}} />
            <Typography paddingLeft={"2px"} paddingTop={"2px"} sx={{fontSize: "13px"}}>
                {time}
            </Typography>
        </Grid>
    )
}

const ProofHeader = ({status, statusVis, proofId, allProofsRefetch, talentId, publication_date}) => {
    const {data} = useJwtCheck()
    const isYourAccount = +talentId === data.id
    const [showConfirm, setShowConfirm] = useState(false)
    const [statusColor, setStatusColor] = useState()
    const [option, setOption] = useState()
    const time = publication_date && publication_date.split(" ")[0]
    const date = publication_date && publication_date.split(" ")[1]

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
            padding={"0 15px 0 15px"}
            sx={{
                width: "100%",
                height: "40px",
                backgroundColor: statusColor,
                color: "#ffffff",
            }}>
            <Typography variant="h6" zIndex={20}>
                {status}
            </Typography>
            <Tooltip title={<Time time={time} />} arrow>
                <Typography
                    variant="body2" 
                    color="#ffffff">
                    {date}
                </Typography>
            </Tooltip>
            {isYourAccount && (
                <ActionHeaderProofButtons {...propsActionHeaderProofButtons} />
            )}
        </Grid>
    )
}

export {ProofHeader}
