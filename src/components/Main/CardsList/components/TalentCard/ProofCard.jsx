import React from "react"
import styles from "./TalentCard.module.css"
import Typography from "@mui/material/Typography"
import {SigninPopupContext} from "../../../../../context"
import {VisitButton} from "./components/VisitButton"
import {Kudos} from "../../../../Kudos"
import {Grid} from "@mui/material"
import {useTheme} from "@emotion/react"

const ProofCard = ({proof}) => {
    const {palette} = useTheme()

    return (
        <Grid
            container
            sx={{
                flexDirection: "column",
                width: "470px",
                textOverflow: "ellipsis",
                height: "290px",
                color: palette.primary.main,
                textAlign: "center",
                fontSize: "14px",
                border: `1px solid ${palette.primary.main}`,
                borderRadius: "8px",
                boxShadow: "0 0 10px 4px rgba(0, 0, 0, 0.25)",
                overflow: "hidden",
                bgcolor: palette.neutral.secondary,
            }}
            className={styles.card}>
            <Grid
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "50px",
                    bgcolor: palette.primary.main,
                }}>
                <Typography sx={{color: "#ffffff", fontSize: "20px"}}>
                    {proof.title}
                </Typography>
            </Grid>
            <Grid
                container
                className={styles.content}
                sx={{
                    width: "100%",
                    wordBreak: "break-word",
                    flex: "1 0 auto",
                    flexDirection: "column",
                    alignContent: "center",
                    padding: 4,
                }}>
                <Grid sx={{flex: "1 0 auto"}}>
                    <Typography variant="body1">{proof.description}</Typography>
                </Grid>
                <Grid
                    variant="subtitle2"
                    sx={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}>
                    <Kudos proofId={proof.id} />
                    {proof.publication_date}
                </Grid>
            </Grid>

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
        </Grid>
    )
}

export {ProofCard}
