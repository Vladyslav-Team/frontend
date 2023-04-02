import React from "react"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import {Avatar} from "../../Main/CardsList/components/TalentCard/components/Avatar"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
const AvatarChange = () => {
    const matches = useMediaQuery("(min-width:750px)")
    return (
        <Grid
            item
            xs={!matches ? "2" : "0.5"}
            display="flex"
            flexDirection={"column"}
            justifyContent="flex-start"
            alignItems={"center"}
            marginTop={"120px"}>
            <Avatar size={180} />
            <Button
                sx={{position: "relative", top: "20px"}}
                size="large"
                variant="contained">
                <Typography sx={{fontWeight: 600}}>Upload new avatar</Typography>
            </Button>
        </Grid>
    )
}

export {AvatarChange}
