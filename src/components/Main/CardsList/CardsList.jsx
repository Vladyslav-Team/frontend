import React, {useMemo} from "react"
import {NameStage, ProofCard, TalentCard} from "./components/TalentCard"
import Grid from "@mui/material/Grid"
import styles from "./CardsList.module.css"

const CardsList = ({GetTalentsData, type, setSort, sort}) => {
    const {data, currentData, refetch} = GetTalentsData
    const talents = useMemo(() => {
        return (
            currentData &&
            data[type].map((talent) => {
                return (
                    <Grid item key={talent.id}>
                        {type === "talents" ? (
                            <TalentCard talent={talent} />
                        ) : (
                            <ProofCard talent={talent} />
                        )}
                    </Grid>
                )
            })
        )
    }, [currentData, data, type])

    return (
        <div className={styles.wrapper}>
            {data && (
                <NameStage type={type} setSort={setSort} sort={sort} refetch={refetch} />
            )}
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
