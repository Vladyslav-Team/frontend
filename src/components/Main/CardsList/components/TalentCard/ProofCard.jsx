import React from "react"
import Typography from "@mui/material/Typography"
import {SigninPopupContext} from "../../../../../context"
import {VisitButton} from "./components/VisitButton"
import {Grid} from "@mui/material"
import {useTheme} from "@emotion/react"
import {SkillsOnProof} from "../../../../Proof/components"
import {Box} from "@mui/material"

const ProofCard = ({proof}) => {
    const {palette} = useTheme()

    return (
        <Grid
            container
            sx={{
                position: "relative",
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
                pb: "30px",
            }}>
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
                <Box>
                    <SkillsOnProof idProof={proof.id} />
                    <Typography variant="subtitle2" gutterBottom>
                        {proof.publication_date}
                    </Typography>
                </Box>
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
