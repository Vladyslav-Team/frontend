import React from "react"
import {ReactComponent as PageNotFoundSVG} from "../../source/img/PageNotFound.svg"
import Grid from "@mui/material/Grid"
import useMediaQuery from "@mui/material/useMediaQuery"
const PageNotFound = () => {
    const matches = useMediaQuery("(max-width:832px)")
    return (
        <Grid
            data-testid="pageNotFound"
            container
            width={"100%"}
            height={"100vh"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            paddingBottom={"20px"}>
            <Grid item marginBottom={"60px"}>
                <PageNotFoundSVG
                    style={{transform: !matches ? "scale(2)" : "scale(1)"}}
                />
            </Grid>
            <Grid item>{!matches && <h1>Page not found</h1>}</Grid>
        </Grid>
    )
}

export {PageNotFound}
