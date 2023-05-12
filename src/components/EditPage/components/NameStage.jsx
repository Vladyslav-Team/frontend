import React, {useState} from "react"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"
import {useNavigate} from "react-router-dom"
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material"
const NameStage = ({name, button = false, id}) => {
    const [showConfirm, setShowConfirm] = useState(false)
    const navigate = useNavigate()

    const handlePositiveAnswer = () => {
        handleClose()
        navigate(`/profile/${id}`)
    }

    const handleNegativeAnswer = () => {
        handleClose()
    }

    const handleClose = () => {
        setShowConfirm(false)
    }
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
                                    onClick={() => setShowConfirm(true)}
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
            <Dialog
                open={showConfirm}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    You want to undo the changes?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        All changes you have made before will not be saved and you will
                        not be able to restore them. Continue operation?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        onClick={handleNegativeAnswer}
                        sx={{minWidth: 70}}>
                        Disagree
                    </Button>
                    <Button
                        type="submit"
                        form="proof-form"
                        variant="contained"
                        onClick={handlePositiveAnswer}
                        sx={{minWidth: 70}}>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
            <Divider sx={{width: "96%"}} />
        </>
    )
}

export {NameStage}
