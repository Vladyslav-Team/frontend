import React, {useState} from "react"
import {Card} from "@mui/material"
import styles from "./Proof.module.css"
import styled from "@emotion/styled"
import {ProofHeader} from "./components/ProofHeader"
import {ProofForm} from "./components/ProofForm"
import {ProofContent} from "./components/ProofContent"
import {ProofActivity} from "./components/ProofActivity"

const Proof = ({proof = {title: "", description: ""}, isEditMode, styleObj}) => {
    const {title, description, data} = proof
    const [isHidden, setIsHidden] = useState(false)
    const [status, setStatus] = useState("Draft")

    const StyledProof = styled(Card)(({theme}) => ({
        display: "flex",
        position: "relative",
        flexDirection: "column",
        width: "370px !important",
        minHeight: 260,
        [theme.breakpoints.down("lg")]: {
            minWidth: "100%",
            minHeight: 200,
        },
    }))

    return (
        <StyledProof sx={styleObj}>
            {isHidden && <div className={styles.die}></div>}
            <ProofHeader
                status={status}
                setStatus={setStatus}
                isHidden={isHidden}
                setIsHidden={setIsHidden}
                isEditMode={isEditMode}
            />
            {isEditMode ? (
                <ProofForm title={title} description={description} />
            ) : (
                <ProofContent title={title} data={data} description={description} />
            )}
            <ProofActivity
                status={status}
                setStatus={setStatus}
                setIsHidden={setIsHidden}
                isEditMode={isEditMode}
            />
        </StyledProof>
    )
}

export {Proof}
