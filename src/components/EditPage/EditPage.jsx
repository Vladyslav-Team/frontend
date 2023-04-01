import React from "react"
import {Avatar} from "../Main/CardsList/components/TalentCard/components/Avatar"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import ButtonGroup from "@mui/material/ButtonGroup"
const EditPage = () => {
    return (
        <Grid container maxWidth={1900} columns={2} sx>
            <Grid
                item
                xs="0.5"
                display="flex"
                flexDirection={"column"}
                flex={"1 1 auto"}
                justifyContent="flex-start"
                alignItems={"center"}>
                <Avatar size={180} />
                <Button
                    sx={{position: "relative", top: "110px"}}
                    size="large"
                    variant="contained">
                    <Typography sx={{fontWeight: 600}}>Upload new avatar</Typography>
                </Button>
            </Grid>
            <Grid item xs display="flex" flexDirection={"column"} paddingTop={15}>
                <Typography sx={{fontWeight: 600, fontSize: 30}}>Edit profile</Typography>
                <Grid
                    container
                    columns={1}
                    sx
                    display={"flex"}
                    flexDirection={"row"}
                    flexWrap={"nowrap"}>
                    <Grid item>
                        <Typography
                            sx={{fontWeight: 400, fontSize: 20, whiteSpace: "nowrap"}}>
                            Basic info
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        spacing={2}
                        columns={2}
                        justifyContent={"flex-end"}
                        paddingBottom={2}>
                        <Grid item>
                            <Button size="medium" variant="outlined">
                                CANCEL
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button size="medium" variant="contained">
                                SAVE
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider />
            </Grid>
        </Grid>
    )
}

export {EditPage}
