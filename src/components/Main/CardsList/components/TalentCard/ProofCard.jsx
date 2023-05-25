import React from "react"
import styles from "./TalentCard.module.css"
import Typography from "@mui/material/Typography"
import {SigninPopupContext} from "../../../../../context"
import {VisitButton} from "./components/VisitButton"
import {SkillsOnProof} from "../../../../Proof/components"
import {Box, Grid} from "@mui/material"
import {useGetKudosQuery} from "../../../../AddKudosForm/api"
import {SponsorKudoses} from "../../../../AddKudosForm/components/SponsorKudoses"
import {useGetSkillsByProofsQuery} from "../../../../pages/Profile/components/Aside/components/Content/components/Proof/api"

const ProofCard = ({proof}) => {
    const proofId = proof?.id
    const idProof = proof?.id
    const skills = useGetSkillsByProofsQuery(idProof)
    const KudosInfo = useGetKudosQuery(
        {proofId},
        {
            refetchOnMountOrArgChange: true,
        }
    )

    return (
        <div
            style={{width: "470px", textOverflow: "ellipsis", position: "relative"}}
            className={styles.card}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: "10px 30px",
                    "& > div ": {
                        color: "#ffff",
                    },
                }}
                className={styles.background}>
                <Grid>
                    <Typography style={{fontSize: "20px"}}>{proof.title}</Typography>
                </Grid>
                <Grid>
                    <Typography style={{fontSize: "14px"}}>
                        {proof.publication_date}
                    </Typography>
                </Grid>
            </Box>
            <Box
                sx={{
                    maxHeight: "168px",
                    textAlign: "left",
                    width: "90%",
                    wordBreak: "break-word",
                    padding: "20px 8px 6px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
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
        </div>
    )
}

export {ProofCard}
