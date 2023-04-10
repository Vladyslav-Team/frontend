import React from "react"
import styles from "./ConfirmationPopup.module.css"
import {Button} from "@mui/material"
import {useTheme} from "@emotion/react"

const ConfirmationPopup = ({setVisibilityConfirmationPopup, setIsDeleted}) => {
    const theme = useTheme()
    const buttonTheme = {
        width: theme.spacing(15),
        margin: theme.spacing(0, 5),
        borderRadius: theme.shape.borderRadius,
    }

    const deletionConfirmed = () => {
        setVisibilityConfirmationPopup(false)
        setIsDeleted(true)
    }

    return (
        <>
            <div className={styles.background}></div>
            <div className={styles.popup_elem}>
                <p>Are you sure you want to delete your account?</p>
                <br />
                <Button
                    variant="outlined"
                    size="medium"
                    sx={buttonTheme}
                    onClick={() => deletionConfirmed()}>
                    YES
                </Button>
                <Button
                    variant="outlined"
                    size="medium"
                    sx={buttonTheme}
                    onClick={() =>
                        setVisibilityConfirmationPopup &&
                        setVisibilityConfirmationPopup(false)
                    }>
                    NO
                </Button>
            </div>
        </>
    )
}

export {ConfirmationPopup}
