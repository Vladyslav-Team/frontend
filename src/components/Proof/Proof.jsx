import React from "react"
import Avatar from "@mui/material/Avatar"
import {NavLink, useLocation} from "react-router-dom"
import {useGetAllProofQuery} from "../pages/Profile/api"
import {Grid} from "@mui/material"
import {useGetAvatarTalentQuery} from "../Avatar/api"

const ProofAllInfo = () => {
    const location = useLocation()
    const idProof = location.pathname.replace("/proof", "")
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
                    <Grid container width={"700px"} paddingBottom={"20px"}>
                        <Grid
                            item
                            display={"flex"}
                            flexDirection={"row"}
                            justifyContent={"space-between"}
                            width={"100%"}
                            alignItems={"flex-end"}>
                            <h1>TestTitle</h1>
                            <span>{data.publication_date}</span>
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
