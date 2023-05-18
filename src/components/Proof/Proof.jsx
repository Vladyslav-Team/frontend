import React from "react"
import Avatar from "@mui/material/Avatar"
import {NavLink, useLocation} from "react-router-dom"
import {useGetAllProofQuery} from "../pages/Profile/api"
import {Grid, Typography} from "@mui/material"
import {useGetAvatarTalentQuery} from "../Avatar/api"
import {useTheme} from "@emotion/react"

const ProofAllInfo = () => {
    const location = useLocation()
    const idProof = location.pathname.replace("/proof", "")
    const {palette} = useTheme()
    const {data} = useGetAllProofQuery(idProof, {
        refetchOnMountOrArgChange: true,
    })
    const AvatarIMG = useGetAvatarTalentQuery(data && data.talent_id)

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
                        paddingBottom={"20px"}
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
                                    fontSize: "32px",
                                    fontWeight: "bold",
                                    bgcolor: palette.primary.main,
                                    padding: "5px 20px",
                                    color: "#ffffff",
                                }}>
                                {data.title}
                            </Typography>
                        </Grid>
                        <Grid container gap={4} padding={"5px 20px"}>
                            <Typography component={"div"}>
                                {data.publication_date}
                            </Typography>
                            <Grid
                                item
                                width={"100%"}
                                sx={{
                                    wordWrap: "break-word",
                                }}>
                                <p>{data.description}</p>
                            </Grid>

                            <Grid
                                item
                                display={"flex"}
                                flexDirection={"row"}
                                sx={{
                                    background: "none",
                                    borderRadius: "10px",
                                    padding: "5px",
                                    border: "1px solid #0a6f9a",
                                }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    sx={{width: 24, height: 24, marginRight: "6px"}}
                                    src={AvatarIMG.data && AvatarIMG.data.image}
                                />
                                <NavLink to={`/profile/${data.talent_id}`}>
                                    <span>
                                        {data.talent_name} {data.talent_surname}
                                    </span>
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </>
    )
}

export {ProofAllInfo}
