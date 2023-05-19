import React, {useMemo} from "react"
import {NameStage, ProofCard, TalentCard} from "./components/TalentCard"
import Grid from "@mui/material/Grid"
import styles from "./CardsList.module.css"

const CardsList = ({GetData, type, setSort, sort}) => {
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
            {data && (
                <NameStage type={type} setSort={setSort} sort={sort} refetch={refetch} />
            )}
            <Grid
                container
                spacing={10}
                sx={{display: "flex", justifyContent: "center", paddingTop: "20px"}}>
                {Cards && Cards}
            </Grid>
        </div>
    )
}

export {CardsList}
