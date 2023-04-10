import React, {useState} from "react"
import {Card} from "@mui/material"
import styles from "./Proof.module.css"
import styled from "@emotion/styled"
import {ProofHeader} from "./components/ProofHeader"
import {ProofContent} from "./components/ProofContent"
import {ProofActivity} from "./components/ProofActivity"

const Proof = ({proof}) => {
    const {title, description, data} = proof
    const [isHidden, setIsHidden] = useState(false)
    const [status, setStatus] = useState("Draft")

    const StyledProof = styled(Card)(({theme}) => ({
        position: "relative",
        width: "370px !important",
        minHeight: 220,
        [theme.breakpoints.down("lg")]: {
            minWidth: "100%",
            minHeight: 200,
        },
    }))

    return (
        <StyledProof>
            {isHidden && <div className={styles.die}></div>}
            <ProofHeader
                status={status}
                setStatus={setStatus}
                isHidden={isHidden}
                setIsHidden={setIsHidden}
            />
            <ProofContent title={title} data={data} description={description} />
            <ProofActivity
                status={status}
                setStatus={setStatus}
                setIsHidden={setIsHidden}
            />
        </StyledProof>
    )
}

export {Proof}
