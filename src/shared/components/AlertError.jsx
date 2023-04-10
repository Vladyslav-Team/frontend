import React from "react"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
const AlertError = ({defaultStatus, massageError}) => {
    const [open, setOpen] = React.useState(defaultStatus)
    return (
        <>
            {open && (
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false)
                            }}>
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    severity="error"
                    sx={{position: "fixed", bottom: "10px", right: "10px", zIndex: 120}}>
                    <AlertTitle>Error</AlertTitle>
                    {massageError}
                </Alert>
            )}
        </>
    )
}

export {AlertError}
