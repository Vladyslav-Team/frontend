import React, {useEffect, useState} from "react"
import Avatar from "@mui/material/Avatar"
import {NavLink, useLocation} from "react-router-dom"
import {useGetAllProofQuery} from "../pages/Profile/api"
import {Box, Grid, Typography} from "@mui/material"
import {useGetUserAvatarQuery} from "../Avatar/api"
import {AddKudosForm} from "../AddKudosForm"
import {SkillsOnProof} from "./components/SkillsOnProof"
import {useGetSkillsByProofsQuery} from "../pages/Profile/components/Aside/components/Content/components/Proof/api"
import {useTheme} from "@emotion/react"
import {useAddKudosMutation} from "../AddKudosForm/api"

const ProofAllInfo = () => {
    const location = useLocation()
    const idProof = location.pathname.replace("/proof/", "")
    const {palette} = useTheme()
    const {data} = useGetAllProofQuery(idProof, {
        refetchOnMountOrArgChange: true,
    })
    const [skillsSet, setSkillsSet] = useState([])
    const skills = useGetSkillsByProofsQuery(idProof)
    const AvatarIMG = useGetUserAvatarQuery(data && data.talent_id)
    const [updateKudos, result] = useAddKudosMutation()

    useEffect(() => {
        const skillsSet =
            !skills.isLoading &&
            skills.data.skills.map((skill) => {
                return {...skill, amount: 0}
            })

        setSkillsSet(skillsSet)
    }, [skills])

    return (
        <>
            <Grid
                container
                max-width={"1900px"}
                justifyContent={"center"}
                paddingTop={"90px"}>
                {data && (
                    <Grid
                        container
                        width={"700px"}
                        gap={3}
                        sx={{
                            borderRadius: "20px",
                            overflow: "hidden",
                            border: `1px solid ${palette.primary.main}`,
                            bgcolor: palette.neutral.secondary,
                            color: "#000000",
                        }}>
                        <Grid item width={"100%"}>
                            <Typography
                                component={"div"}
                                sx={{
                                    fontSize: "28px",
                                    bgcolor: palette.primary.main,
                                    padding: "5px 20px",
                                    color: "#ffffff",
                                    wordWrap: "break-word",
                                }}>
                                {data.title}
                            </Typography>
                        </Grid>
                        <Grid container gap={3} padding={"5px 20px"}>
                            <Grid
                                container
                                sx={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}>
                                <NavLink to={`/profile/${data.talent_id}`}>
                                    <Grid
                                        item
                                        display={"flex"}
                                        flexDirection={"row"}
                                        sx={{
                                            background: "none",
                                            borderRadius: "10px",
                                            padding: "5px",
                                            border: "1px solid #0a6f9a",
                                            "&:hover": {
                                                transitionDuration: "0.5s",
                                                bgcolor: "rgba(10, 110, 154, 0.1)",
                                            },
                                        }}>
                                        <Avatar
                                            alt="Remy Sharp"
                                            sx={{
                                                width: 24,
                                                height: 24,
                                                marginRight: "6px",
                                            }}
                                            src={AvatarIMG.data && AvatarIMG.data.image}
                                        />
                                        <span>
                                            {data.talent_name} {data.talent_surname}
                                        </span>
                                    </Grid>
                                </NavLink>
                                <Typography component={"div"} sx={{fontSize: "14px"}}>
                                    {data.publication_date}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                width={"100%"}
                                sx={{
                                    mt: 2,
                                    mb: 3,
                                    wordWrap: "break-word",
                                }}>
                                <p>{data.description}</p>
                            </Grid>
                            {skills.isSuccess && skills?.data.skills && skillsSet && (
                                <Grid
                                    container
                                    sx={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        mb: 2,
                                    }}>
                                    <Box>
                                        <SkillsOnProof
                                            result={result}
                                            idProof={idProof}
                                        />
                                    </Box>
                                    <Grid
                                        sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                            gap: 4,
                                        }}>
                                        <AddKudosForm
                                            proofId={idProof}
                                            skills={skillsSet}
                                            setSkills={setSkillsSet}
                                            updateKudos={updateKudos}
                                            result={result}
                                        />
                                    </Grid>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </>
    )
}

export {ProofAllInfo}
