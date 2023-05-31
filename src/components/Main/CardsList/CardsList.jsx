import React, {useMemo} from "react"
import {NameStage, ProofCard, TalentCard} from "./components/TalentCard"
import Grid from "@mui/material/Grid"
import styles from "./CardsList.module.css"

const CardsList = ({GetData, type, setSort, sort, skills}) => {
    const {data, currentData, refetch} = GetData

    const Cards = useMemo(() => {
        return (
            currentData &&
            data[type].map((data) => {
                return (
                    <Grid item key={data.id}>
                        {type === "talents" ? (
                            <TalentCard talent={data} />
                        ) : (
                            <ProofCard proof={data} />
                        )}
                    </Grid>
                )
            })
        )
    }, [currentData, data, type])

    return (
        <div className={styles.wrapper}>
            {skills && (
                <NameStage
                    type={type}
                    setSort={setSort}
                    sort={sort}
                    refetch={refetch}
                    skills={skills}
                />
            )}
            <Grid
                container
                spacing={10}
                sx={{display: "flex", justifyContent: "center", paddingTop: "20px"}}>
                {Cards && Cards}
                {GetData.isError && "Talents not found"}
            </Grid>
        </div>
    )
}

export {CardsList}
