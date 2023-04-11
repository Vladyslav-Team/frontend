import {Button, Divider, Grid} from "@mui/material"
import React from "react"
import {useNavigate} from "react-router-dom"

const ContentActions = () => {
    const navigate = useNavigate()

    return (
        <>
            <Grid
                container
                justifyContent={"space-between"}
                alignItems={"center"}
                marginBottom={2}>
                <Grid flex={"1 0 auto"}></Grid>
                <Button variant="contained" onClick={() => navigate("/proof/edit")}>
                    Add proof
                </Button>
            </Grid>
            <Divider />
        </>
    )
}

export {ContentActions}
