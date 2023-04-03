import React from "react"
import {ProofCard, TalentCard} from "./components/TalentCard"
import Grid from "@mui/material/Grid"
import styles from "./CardsList.module.css"
const CardsList = ({GetTalentsData, type}) => {
    const {data} = GetTalentsData
    const talents =
        data &&
        data.talents.map((talent) => {
            return (
                <Grid item key={talent.id}>
                    {type === "Talent" ? (
                        <TalentCard talent={talent} />
                    ) : (
                        <ProofCard talent={talent} />
                    )}
                </Grid>
            )
        })

    return (
        <div className={styles.wrapper}>
            {data && <h1 style={{paddingTop: "20px", paddingLeft: "32px"}}>{type}</h1>}
            <Grid
                container
                spacing={10}
                sx={{display: "flex", justifyContent: "center", paddingTop: "20px"}}>
                {talents && talents}
            </Grid>
        </div>
    )
}

export {CardsList}
