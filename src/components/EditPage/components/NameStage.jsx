import React from "react"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"
import {useNavigate} from "react-router-dom"
const NameStage = ({name, button = false}) => {
    const navigate = useNavigate()
    return (
        <>
            <Grid
                container
                columns={1}
                display={"flex"}
                flexDirection={"row"}
                flexWrap={"nowrap"}
                alignItems={"flex-end"}
                paddingBottom={2}>
                <Grid item>
                    <Typography
                        sx={{fontWeight: 400, fontSize: 20, whiteSpace: "nowrap"}}>
                        {name}
                    </Typography>
                </Grid>
                <Grid
                    container
                    spacing={2}
                    columns={2}
                    justifyContent={"flex-end"}
                    paddingRight={10}>
                    {button && (
                        <>
                            <Grid item>
                                <Button
                                    onClick={() => navigate(-1)}
                                    size="medium"
                                    variant="outlined">
                                    CANCEL
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button type="submit" size="medium" variant="contained">
                                    SAVE
                                </Button>
                            </Grid>
                        </>
                    )}
                </Grid>
            </Grid>
            <Divider sx={{width: "96%"}} />
        </>
    )
}

export {NameStage}
