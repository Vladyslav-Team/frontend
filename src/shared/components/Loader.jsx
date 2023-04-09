import React from "react"
import {Grid} from "@mui/material"
import CircularProgress from "@mui/material/CircularProgress"
import Alert from "@mui/material/Alert"
const Loader = ({isLoading, isError, error}) => {
    return (
        <Grid
            container
            width={"100%"}
            height={"100vh"}
            justifyContent={"center"}
            alignItems={"center"}>
            {isLoading && <CircularProgress />}
            {isError && <Alert severity="error">{error ? error.message : "Error"}</Alert>}
        </Grid>
    )
}

export default Loader
