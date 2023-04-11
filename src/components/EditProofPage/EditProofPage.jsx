import React from "react"
import {Grid} from "@mui/material"
import {Proof} from "../pages/Profile/components/Aside/components/Content/components/Proof"

const EditProofPage = () => {
    const proof = {
        title: "Very big title with many details",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro odio delectus nostrum vel consectetur, quos aliquid labore similique. Iusto magnam sit temporibus veniam laudantium ipsa quibusdam. Nemo, voluptate distinctio officiis quasi ducimus modi eaque cupiditate exercitationem vel dicta consectetur qui alias ipsam doloribus sit iusto tenetur similique libero sequi maxime.",
        data: "12.03.2022",
    }
    return (
        <Grid sx={{padding: "80px 20px 10px", margin: "0 auto", maxWidth: "1140px"}}>
            <h1>Proof</h1>
            <Grid sx={{marginTop: "20px"}}>
                <Proof
                    proof={proof}
                    isEditMode={true}
                    styleObj={{minWidth: "100%"}}></Proof>
            </Grid>
        </Grid>
    )
}

export {EditProofPage}
