import React from "react"
import Avatar from "@mui/material/Avatar"
import {NavLink, useLocation} from "react-router-dom"
import {useGetAllProofQuery} from "../pages/Profile/api"
import {Grid, Typography} from "@mui/material"
import {useGetUserAvatarQuery} from "../Avatar/api"

const ProofAllInfo = () => {
    const location = useLocation()
    const idProof = location.pathname.replace("/proof", "")
    const {data} = useGetAllProofQuery(idProof, {
        refetchOnMountOrArgChange: true,
    })
    const AvatarIMG = useGetUserAvatarQuery(data && data.talent_id)

    return (
        <>
            <Grid
                container
                max-width={"1900px"}
                justifyContent={"center"}
                paddingTop={"90px"}>
                {data && (
                    <Grid container width={"700px"} paddingBottom={"20px"} gap={3}>
                        <Grid item width={"100%"}>
                            <Typography
                                component={"div"}
                                sx={{fontSize: "32px", fontWeight: "bold"}}>
                                {data.title}
                            </Typography>
                            <Typography component={"div"}>
                                {data.publication_date}
                            </Typography>
                        </Grid>
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
                )}
            </Grid>
        </>
    )
}

export {ProofAllInfo}
