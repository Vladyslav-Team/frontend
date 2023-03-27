import React, { useState } from "react"
import { Pagination } from "./Pagination"
import { useGetTalentsQuery } from "./Pagination/api/services"
import { TalentCard } from "./CardsList/components/TalentCard"
import Grid from "@mui/material/Grid";
const Main = () => {
    const [page, setPage] = useState(1)
    const { data } = useGetTalentsQuery(page)
    
    return (
        <div>
            <Grid container spacing={10} sx={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}>
                {data && data.talents.map(talent => {
                    return <Grid item key={talent.id} >
                        {data && <TalentCard talent={data.talents[0]} />}
                    </Grid>
                })}
            </Grid>
            <Pagination setPage={setPage} />
        </div>
    )
}

export { Main }
