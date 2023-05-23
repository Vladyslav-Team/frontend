import React from "react"
import styles from "./TalentCard.module.css"
import Typography from "@mui/material/Typography"
import {SigninPopupContext} from "../../../../../context"
import {VisitButton} from "./components/VisitButton"
import {SkillsOnProof} from "../../../../Proof/components"
import {Box} from "@mui/material"

const ProofCard = ({proof}) => {
    return (
        <div
            style={{width: "470px", textOverflow: "ellipsis", position: "relative"}}
            className={styles.card}>
            <div
                style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                className={styles.background}>
                <h1 style={{color: "#ffff", fontSize: "20px"}}>{proof.title}</h1>
            </div>
            <div
                className={styles.content}
                style={{
                    maxHeight: "100px",
                    textAlign: "left",
                    width: "80%",
                    wordBreak: "break-word",
                }}>
                <Typography variant="body1" gutterBottom>
                    {proof.description}
                </Typography>
            </div>
            <Box position={"absolute"} bottom={"42px"}>
                <SkillsOnProof idProof={proof.id} />
                <Typography variant="subtitle2" gutterBottom>
                    {proof.publication_date}
                </Typography>
            </Box>

            <SigninPopupContext.Consumer>
                {({setVisibilitySigninPopup}) => (
                    <VisitButton
                        setVisibilitySigninPopup={setVisibilitySigninPopup}
                        id={proof.id}
                        text="Show more"
                        to="proof"
                    />
                )}
            </SigninPopupContext.Consumer>
        </div>
    )
}

export {ProofCard}
