import React, {useState} from "react"
import {Card} from "@mui/material"
import styles from "./Proof.module.css"
import styled from "@emotion/styled"
import {ProofHeader} from "./components/ProofHeader"
import {ProofContent} from "./components/ProofContent"
import {ProofActivity} from "./components/ProofActivity"
import Button from "@mui/material/Button"
const Proof = ({proof}) => {
    const {title, description, data, status} = proof
    const [isHidden, setIsHidden] = useState(false)
    const [statusProof, setStatusStatusProof] = useState(status)

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
                status={statusProof}
                setStatus={setStatusStatusProof}
                isHidden={isHidden}
                setIsHidden={setIsHidden}
            />
            <ProofContent title={title} data={data} description={description} />
            <ProofActivity
                status={statusProof}
                setStatus={setStatusStatusProof}
                setIsHidden={setIsHidden}
            />
        </StyledProof>
    )
}

export {Proof}
