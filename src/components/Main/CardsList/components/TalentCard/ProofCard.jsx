import React from "react"
import styles from "./TalentCard.module.css"
import Typography from "@mui/material/Typography"
import {SigninPopupContext} from "../../../../../context"
import {VisitButton} from "./components/VisitButton"
import {SkillsOnProof} from "../../../../Proof/components"
import {Box, Grid} from "@mui/material"
import {useGetKudosQuery} from "../../../../AddKudosForm/api"
import {SponsorKudoses} from "../../../../AddKudosForm/components/SponsorKudoses"

const ProofCard = ({proof}) => {
    // const proofId = proof?.id
    // const KudosInfo = useGetKudosQuery(
    //     {proofId},
    //     {
    //         refetchOnMountOrArgChange: true,
    //     }
    // )
    // console.log(KudosInfo.isSuccess && KudosInfo.data)

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
            <Box>
                {/* <SponsorKudoses
                    amount={KudosInfo.data && KudosInfo.data.amount_of_kudos_current_user}
                /> */}
            </Box>
            <Box position={"absolute"} bottom={"42px"}>
                <SkillsOnProof idProof={proof.id} />
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
