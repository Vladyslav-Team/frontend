import React from "react"
import {Grid} from "@mui/material"
import {Proof} from "../pages/Profile/components/Aside/components/Content/components/Proof"
import {useGetAllProofQuery} from "../pages/Profile/api"
import {useLocation} from "react-router"

const EditProofPage = () => {
    const location = useLocation()
    const idProof = location.pathname.replace("/profile/", "").split("/")[2]
    const {data} = useGetAllProofQuery(`/${idProof}`, {
        refetchOnMountOrArgChange: true,
    })
    return (
        <Grid sx={{padding: "80px 20px 10px", margin: "0 auto", maxWidth: "1140px"}}>
            <h1>Proof</h1>
            <Grid sx={{marginTop: "20px"}}>
                {data && (
                    <Proof
                        proof={data}
                        isEditMode={true}
                        statusVis={"Edit"}
                        styleObj={{minWidth: "100%"}}
                    />
                )}
            </Grid>
        </Grid>
    )
}

export {EditProofPage}
