import React from "react"
import {TalentCard} from "./components/TalentCard"
import Grid from "@mui/material/Grid"

const CardsList = ({GetTalentsData}) => {
    const {data} = GetTalentsData
    return (
        <>
            <h1 style={{paddingTop: "20px", paddingLeft: "32px"}}>Talents</h1>
            <Grid
                container
                spacing={10}
                sx={{display: "flex", justifyContent: "center", paddingTop: "20px"}}>
                {data &&
                    data.talents.map((talent) => {
                        return (
                            <Grid item key={talent.id}>
                                {data && <TalentCard talent={talent} />}
                            </Grid>
                        )
                    })}
            </Grid>
        </>
    )
}

export {CardsList}
