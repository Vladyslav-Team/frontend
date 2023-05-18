import React from "react"
import PropTypes from "prop-types"
import styles from "./VisitButton.module.css"

import {useJwtCheck} from "../../../../../../../shared/api/hooks"
import {useNavigate} from "react-router-dom"
import {Button, Typography} from "@mui/material"

const VisitButton = ({setVisibilitySigninPopup, id, to = "profile", text = "Visit"}) => {
    const {data} = useJwtCheck()
    const navigate = useNavigate()
    const handleClick = () => {
        if (data) {
            navigate(`/${to}/${id}`)
        } else {
            setVisibilitySigninPopup({status: true, id: id, type: "proof"})
        }
    }
    return (
        <>
            <Button
                variant="contained"
                sx={{
                    bottom: "0",
                    width: "100%",
                    height: "40px",
                    borderRadius: 0,
                }}
                onClick={handleClick}>
                <Typography
                    sx={{fontWeight: "bold", fontSize: "14px", textTransform: "none"}}>
                    {text}
                </Typography>
            </Button>
        </>
    )
}

VisitButton.propTypes = {
    id: PropTypes.number,
}

export {VisitButton}
