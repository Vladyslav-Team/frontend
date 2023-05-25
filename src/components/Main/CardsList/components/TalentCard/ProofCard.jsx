import React from "react"
import Typography from "@mui/material/Typography"
import {SigninPopupContext} from "../../../../../context"
import {VisitButton} from "./components/VisitButton"
import {useTheme} from "@emotion/react"
import {SkillsOnProof} from "../../../../Proof/components"
import {Box, Grid} from "@mui/material"
import {useGetKudosQuery} from "../../../../AddKudosForm/api"
import {SponsorKudoses} from "../../../../AddKudosForm/components/SponsorKudoses"
import {useGetSkillsByProofsQuery} from "../../../../pages/Profile/components/Aside/components/Content/components/Proof/api"

const ProofCard = ({proof}) => {
    const proofId = proof?.id
    const idProof = proof?.id
    const skills = useGetSkillsByProofsQuery(idProof)
    const {palette} = useTheme()
    const KudosInfo = useGetKudosQuery(
        {proofId},
        {
            refetchOnMountOrArgChange: true,
        }
    )

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
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: "10px 30px",
                    height: "45px",
                    bgcolor: palette.primary.main,
                    "& > div ": {
                        color: "#ffff",
                    },
                }}>
                <Grid>
                    <Typography sx={{fontSize: "20px"}}>{proof.title}</Typography>
                </Grid>
                <Grid>
                    <Typography sx={{fontSize: "14px"}}>
                        {proof.publication_date}
                    </Typography>
                </Grid>
            </Grid>
            <Box
                sx={{
                    maxHeight: "155px",
                    textAlign: "left",
                    width: "90%",
                    wordBreak: "break-word",
                    padding: "10px 8px 6px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    m: "0 auto",
                }}>
                <Typography variant="body1">{proof.description}</Typography>
            </Box>
            <Grid
                container
                sx={{
                    justifyContent: "space-between",
                    position: "absolute",
                    bottom: "42px",
                    p: "0px 30px",
                }}>
                <Box>
                    <SkillsOnProof idProof={proof.id} />
                </Box>
                <Box>
                    <SponsorKudoses
                        KudosInfo={KudosInfo}
                        isHaveSkills={skills.isSuccess && skills.data.skills.length !== 0}
                    />
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
