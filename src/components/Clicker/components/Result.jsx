import {Button, Dialog, DialogTitle, Grid, Typography} from "@mui/material"
import React from "react"

const Result = ({count, handleClose, open}) => {
    const handleSave = () => {
        localStorage.setItem(`kudosFarmDate-${Date.now()}`, +count)

        handleClose()
    }
    return (
        <Dialog
            open={open}
            maxWidth="500px"
            sx={{
                "& .MuiDialog-container": {
                    "& .MuiPaper-root": {
                        width: "100%",
                        maxWidth: "500px",
                    },
                },
            }}>
            <DialogTitle>Your result</DialogTitle>
            <Typography
                textAlign={"center"}
                variant="h5"
                paddingBottom={"20px"}
                fontWeight={"600"}>
                Points
            </Typography>
            <Typography textAlign={"center"} variant="h5" paddingBottom={"20px"}>
                {count}
            </Typography>
            <Grid
                display={"flex"}
                justifyContent={"flex-end"}
                paddingRight={"20px"}
                paddingBottom={"5px"}>
                <Button
                    onClick={handleClose}
                    variant="outlined"
                    size="small"
                    sx={{marginRight: "10px"}}>
                    Try again
                </Button>
                <Button variant="outlined" size="small" onClick={handleSave}>
                    SUBMIT
                </Button>
            </Grid>
        </Dialog>
    )
}

export {Result}
